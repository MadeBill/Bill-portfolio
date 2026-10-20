import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

async function findImages(directory) {
  const images = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) images.push(...await findImages(path));
    else if (entry.name.toLowerCase().endsWith(".png")) images.push(path);
  }
  return images;
}

// Preserve filenames, metadata and every decoded pixel; only replace smaller files.
const images = [...await findImages("public"), ...await findImages("src")];
const cache = new Map();
let originalBytes = 0;
let optimizedBytes = 0;
let changed = 0;

for (const [index, path] of images.entries()) {
  const original = await readFile(path);
  const hash = createHash("sha256").update(original).digest("hex");
  let optimized = cache.get(hash);
  if (!optimized) {
    const metadata = await sharp(original).metadata();
    optimized = original;
    if (!metadata.pages || metadata.pages === 1) {
      const candidate = await sharp(original)
        .keepMetadata()
        .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
        .toBuffer();
      if (candidate.length < original.length) {
        const before = await sharp(original).raw().toBuffer({ resolveWithObject: true });
        const after = await sharp(candidate).raw().toBuffer({ resolveWithObject: true });
        if (
          before.info.width !== after.info.width ||
          before.info.height !== after.info.height ||
          before.info.channels !== after.info.channels ||
          !before.data.equals(after.data)
        ) {
          throw new Error(`Pixel verification failed: ${path}`);
        }
        optimized = candidate;
      }
    }
    cache.set(hash, optimized);
  }
  originalBytes += original.length;
  optimizedBytes += optimized.length;
  if (optimized.length < original.length) {
    await writeFile(path, optimized);
    changed++;
  }
  if ((index + 1) % 50 === 0) {
    console.log(`Verified ${index + 1}/${images.length} images`);
  }
}

console.log(JSON.stringify({
  images: images.length,
  changed,
  originalBytes,
  optimizedBytes,
  savedBytes: originalBytes - optimizedBytes,
}, null, 2));
