import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const assetPathPrefix = "/assets";

const assets = {
  row1Left: `${assetPathPrefix}/d8ec5.png`,
  row1Middle: `${assetPathPrefix}/62f67.png`,
  row1Right: `${assetPathPrefix}/be6a0.png`,
  row2Left: `${assetPathPrefix}/bc4f5.png`,
  row2Middle: `${assetPathPrefix}/92135.png`,
  row2Right: `${assetPathPrefix}/42f40.png`,
  row3Left: `${assetPathPrefix}/c7e32.png`,
  row3Middle: `${assetPathPrefix}/dba69.png`,
  row3Right: `${assetPathPrefix}/7d815.png`,
  row4Left: `${assetPathPrefix}/28654.png`,
  row4Phone1: `${assetPathPrefix}/7bec1.png`,
  row4Phone2: `${assetPathPrefix}/866c2.png`,
  row4Phone3: `${assetPathPrefix}/9f703.png`,
  row4Right: `${assetPathPrefix}/d3a0e.png`,
  row5Left: `${assetPathPrefix}/0eaef.png`,
  row5Middle: `${assetPathPrefix}/2bdbe.png`,
  row5Right: `${assetPathPrefix}/54d47.png`,
  row6Left: `${assetPathPrefix}/924c9.png`,
  row6Middle: `${assetPathPrefix}/5d20a.png`,
  row6Right: `${assetPathPrefix}/05efd.png`,
  row7Left: `${assetPathPrefix}/bbbfc.png`,
  row7Middle: `${assetPathPrefix}/9ad8a.png`,
  row7Right: `${assetPathPrefix}/17f5e.png`,
  row8Left: `${assetPathPrefix}/8e807.png`,
  row8Middle: `${assetPathPrefix}/5c40a.png`,
  row8Right: `${assetPathPrefix}/26b3d.png`,
  row9Left: `${assetPathPrefix}/1900a.png`,
  row9Middle: `${assetPathPrefix}/15529.png`,
  row9Right: `${assetPathPrefix}/b08f5.png`,
  row10Left: `${assetPathPrefix}/76fd9.png`,
  row10Middle: `${assetPathPrefix}/a239d.png`,
  row10Right: `${assetPathPrefix}/47916.png`,
  row11Left: `${assetPathPrefix}/1a4fe.png`,
  row11Middle: `${assetPathPrefix}/c9adb.png`,
  row11Right: `${assetPathPrefix}/942cd.png`,
  row12Left: `${assetPathPrefix}/4de88.png`,
  row12Middle: `${assetPathPrefix}/419df.png`,
  row12Right: `${assetPathPrefix}/19e5a.png`,
  row13Left: `${assetPathPrefix}/0ac7e.png`,
  row13Middle: `${assetPathPrefix}/10dd2.png`,
  row13Right: `${assetPathPrefix}/a3fff.png`,
  row14Left: `${assetPathPrefix}/e9c41.png`,
  row14Phone1: `${assetPathPrefix}/87d9d.png`,
  row14Phone2: `${assetPathPrefix}/7dfb1.png`,
  row14Phone3: `${assetPathPrefix}/5472d.png`,
  row14Right: `${assetPathPrefix}/31674.png`,
  backArrow: `${assetPathPrefix}/7024c.svg`,
  filledHeart: `${assetPathPrefix}/22707.svg`,
  contactIcon: `${assetPathPrefix}/0963b.svg`,
};

type CardProps = {
  background: string;
  children: ReactNode;
  className?: string;
};

const OpenPreviewContext = createContext<(src: string) => void>(() => undefined);

function getPreviewSource(node: ReactNode): string | undefined {
  let source: string | undefined;

  Children.forEach(node, (child) => {
    if (source || !isValidElement<{ src?: string; children?: ReactNode }>(child)) return;
    if (typeof child.props.src === "string") {
      source = child.props.src;
      return;
    }
    source = getPreviewSource(child.props.children);
  });

  return source;
}

function Card({ background, children, className = "" }: CardProps) {
  const openPreview = useContext(OpenPreviewContext);
  const previewSource = getPreviewSource(children);

  return (
    <button
      aria-label="Open image preview"
      className={`group relative aspect-[418.683/354.219] min-w-0 cursor-zoom-in overflow-hidden border-0 p-0 text-left ${background} ${className}`}
      onClick={() => previewSource && openPreview(previewSource)}
      type="button"
    >
      {children}
      <span className="pointer-events-none absolute inset-0 border-2 border-white/0 transition-colors duration-200 group-hover:border-white/70 group-focus-visible:border-white" />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/20 group-hover:opacity-100 group-focus-visible:bg-black/20 group-focus-visible:opacity-100">
        <span className="rounded-[8px] bg-[#d629cc] px-5 py-3 font-['Instrument_Sans:SemiBold'] text-[14px] font-semibold text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
          Click me
        </span>
      </span>
    </button>
  );
}

function CenteredImage({
  src,
  height = "69.73%",
  width = "90.75%",
}: {
  src: string;
  height?: string;
  width?: string;
}) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
      src={src}
      style={{ height, width }}
    />
  );
}

function FullImage({ src }: { src: string }) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
    />
  );
}

const standardCards = [
  ["bg-[#e1eb2c]", assets.row9Left],
  ["bg-[#2ceb56]", assets.row9Middle],
  ["bg-[#d142f9]", assets.row9Right],
  ["bg-[#e1eb2c]", assets.row10Left],
  ["bg-[#2ceb56]", assets.row10Middle],
  ["bg-[#d142f9]", assets.row10Right],
  ["bg-[#2ceb56]", assets.row11Left],
  ["bg-[#e1eb2c]", assets.row11Middle],
  ["bg-[#d142f9]", assets.row11Right],
  ["bg-[#d142f9]", assets.row12Left],
  ["bg-[#e1eb2c]", assets.row12Middle],
  ["bg-[#2ceb56]", assets.row12Right],
  ["bg-[#e1eb2c]", assets.row13Left],
  ["bg-[#d142f9]", assets.row13Middle],
  ["bg-[#2ceb56]", assets.row13Right],
] as const;

function OutlineHeart() {
  return (
    <svg
      aria-hidden="true"
      className="h-[18px] w-[21px]"
      fill="none"
      viewBox="0 0 21 19"
    >
      <path
        d="M5.7 1C2.9 1 1 3.2 1 6.2c0 5 3.7 7.3 9.4 10.9 5.7-3.6 9.3-5.9 9.3-10.9 0-3-1.9-5.2-4.7-5.2-2 0-3.7 1.2-4.6 2.1C9.5 2.2 7.8 1 5.7 1Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function FeedPreviewModal({
  isLiked,
  onClose,
  onToggleLike,
  selectedImage,
}: {
  isLiked: boolean;
  onClose: () => void;
  onToggleLike: () => void;
  selectedImage: string;
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleLike = () => {
    onToggleLike();
    if (!isLiked) {
      setIsAnimating(true);
      window.setTimeout(() => setIsAnimating(false), 450);
    }
  };

  return (
    <div
      aria-label="Image preview"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-0 sm:p-5"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
      role="dialog"
    >
      <div
        className="relative flex h-[100dvh] w-full max-w-[1273px] flex-col overflow-hidden bg-[#d0fbda] sm:h-[calc(100dvh-40px)]"
        data-node-id="237:39"
      >
        <div className="mx-auto flex w-full max-w-[864px] shrink-0 items-center justify-between gap-4 px-4 py-5 sm:px-0 sm:py-[30px]">
          <button
            className="flex min-w-0 items-center gap-[9px] rounded-[5px] border-0 bg-white px-[18px] py-[7px] text-left sm:w-[257px] sm:px-[22px]"
            onClick={onClose}
            type="button"
          >
            <img alt="" aria-hidden="true" className="h-[12px] w-[16px]" src={assets.backArrow} />
            <span
              className="truncate font-['Instrument_Sans:Medium'] text-[14px] font-medium leading-[28px] text-[rgba(16,22,31,0.8)] sm:text-[15.897px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Case Studies/My Feed
            </span>
          </button>

          <div className="flex shrink-0 items-center gap-2.5">
            <button
              aria-label={isLiked ? "Unlike image" : "Like image"}
              aria-pressed={isLiked}
              className={`feed-like-button flex items-center gap-[11px] border-0 bg-transparent p-1 text-black ${
                isAnimating ? "feed-like-button--active" : ""
              }`}
              onClick={toggleLike}
              type="button"
            >
              {isLiked ? (
                <img
                  alt=""
                  aria-hidden="true"
                  className="h-[18px] w-[21px]"
                  src={assets.filledHeart}
                />
              ) : (
                <span className="text-black">
                  <OutlineHeart />
                </span>
              )}
              <span className="font-['Inter:Regular'] text-[16.5px] font-normal text-black">
                {isLiked ? 2 : 1}
              </span>
            </button>

            <button
              className="flex h-9 items-center gap-2.5 rounded-[7px] border-0 bg-[#d629cc] px-3 text-white sm:w-28 sm:justify-between"
              type="button"
            >
              <span
                className="font-['Instrument_Sans:SemiBold'] text-[11.911px] font-semibold whitespace-nowrap"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Contact me
              </span>
              <img
                alt=""
                aria-hidden="true"
                className="h-[17px] w-[19px]"
                src={assets.contactIcon}
              />
            </button>
          </div>
        </div>

        <div className="mx-auto min-h-0 w-full max-w-[864px] flex-1 overflow-y-auto">
          <img
            alt="Selected work preview"
            className="h-auto w-full bg-white object-contain"
            src={selectedImage}
          />
        </div>
      </div>
    </div>
  );
}

export default function FeedSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [likedImages, setLikedImages] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedImage]);

  const toggleLike = () => {
    if (!selectedImage) return;

    setLikedImages((current) => {
      const next = new Set(current);
      if (next.has(selectedImage)) {
        next.delete(selectedImage);
      } else {
        next.add(selectedImage);
      }
      return next;
    });
  };

  return (
    <OpenPreviewContext.Provider value={setSelectedImage}>
    <section
      className="feed-gallery w-full bg-[#191818] px-4 py-[clamp(48px,5.9vw,89px)] sm:px-8 lg:px-[clamp(72px,7.9vw,119px)]"
      data-node-id="227:267"
    >
      <div
        className="mx-auto grid max-w-[1273px] grid-cols-1 gap-x-3 gap-y-[clamp(18px,2.45vw,37px)] sm:grid-cols-2"
        data-node-id="227:268"
      >
        <Card background="bg-[#2ceb56]">
          <div className="absolute left-1/2 top-[7.9%] h-[91.8%] w-[91.4%] -translate-x-1/2 overflow-hidden">
            <img
              alt=""
              aria-hidden="true"
              className="absolute left-0 top-0 h-[480.05%] w-[99.95%] max-w-none"
              src={assets.row1Left}
            />
          </div>
        </Card>
        <Card background="bg-[#d142f9]">
          <CenteredImage height="70.58%" src={assets.row1Middle} width="92.19%" />
        </Card>
        <Card background="bg-[#2ceb56]">
          <div className="absolute left-[-9.3%] top-[-11.6%] flex h-[243.9%] w-[141%] items-center justify-center">
            <img
              alt=""
              aria-hidden="true"
              className="h-[93%] w-[53.6%] max-w-none -rotate-[21.7deg] object-cover"
              src={assets.row1Right}
            />
          </div>
        </Card>

        <Card background="bg-[#e1eb2c]">
          <CenteredImage height="80.46%" src={assets.row2Left} />
        </Card>
        <Card background="bg-[#2ceb56]">
          <CenteredImage height="80.46%" src={assets.row2Middle} />
        </Card>
        <Card background="bg-[#d142f9]">
          <CenteredImage height="80.18%" src={assets.row2Right} />
        </Card>

        <Card background="bg-[#d142f9]">
          <CenteredImage height="80.18%" src={assets.row3Left} />
        </Card>
        <Card background="bg-[#2ceb56]">
          <CenteredImage height="80.46%" src={assets.row3Middle} />
        </Card>
        <Card background="bg-[#e1eb2c]">
          <CenteredImage height="80.46%" src={assets.row3Right} />
        </Card>

        <Card background="bg-transparent">
          <FullImage src={assets.row4Left} />
        </Card>
        <Card background="bg-[#d142f9]">
          <div className="absolute left-1/2 top-1/2 flex h-[77.35%] w-[96.5%] -translate-x-1/2 -translate-y-1/2 items-center gap-[2.87%]">
            {[assets.row4Phone1, assets.row4Phone2, assets.row4Phone3].map((src) => (
              <img
                alt=""
                aria-hidden="true"
                className="h-full min-w-0 flex-1 object-cover"
                key={src}
                src={src}
              />
            ))}
          </div>
        </Card>
        <Card background="bg-transparent">
          <FullImage src={assets.row4Right} />
        </Card>

        <Card background="bg-[#e1eb2c]">
          <div className="absolute left-[5.97%] top-[3.99%] h-[95.99%] w-[87.89%] overflow-hidden">
            <img
              alt=""
              aria-hidden="true"
              className="absolute left-0 top-0 h-[105.68%] w-[100.02%] max-w-none"
              src={assets.row5Left}
            />
          </div>
        </Card>
        <Card background="bg-[#2ceb56]">
          <CenteredImage src={assets.row5Middle} />
        </Card>
        <Card background="bg-[#d142f9]">
          <div className="absolute left-[4.7%] top-[4.55%] h-[95.42%] w-[90.75%] overflow-hidden">
            <img
              alt=""
              aria-hidden="true"
              className="absolute left-0 top-0 h-[133.14%] w-[100.03%] max-w-none"
              src={assets.row5Right}
            />
          </div>
        </Card>

        <Card background="bg-[#2ceb56]">
          <CenteredImage height="67.47%" src={assets.row6Left} />
        </Card>
        <Card background="bg-[#e1eb2c]">
          <CenteredImage src={assets.row6Middle} />
        </Card>
        <Card background="bg-[#d142f9]">
          <CenteredImage height="72.55%" src={assets.row6Right} />
        </Card>

        <Card background="bg-[#e1eb2c]">
          <CenteredImage src={assets.row7Left} />
        </Card>
        <Card background="bg-[#d142f9]">
          <CenteredImage height="67.47%" src={assets.row7Middle} />
        </Card>
        <Card background="bg-[#2ceb56]">
          <CenteredImage src={assets.row7Right} />
        </Card>

        <Card background="bg-[#2ceb56]">
          <CenteredImage src={assets.row8Left} />
        </Card>
        <Card background="bg-[#e1eb2c]">
          <img
            alt=""
            aria-hidden="true"
            className="absolute left-[4.3%] top-[9.7%] h-[454%] w-[65.4%] max-w-none object-cover"
            src={assets.row8Middle}
          />
          <img
            alt=""
            aria-hidden="true"
            className="absolute left-[49.9%] top-[-115%] h-[430.3%] w-[61.9%] max-w-none object-cover"
            src={assets.row8Middle}
          />
        </Card>
        <Card background="bg-[#d142f9]">
          <img
            alt=""
            aria-hidden="true"
            className="absolute left-[4.7%] top-[8.6%] h-[272.7%] w-[90.75%] max-w-none object-cover"
            src={assets.row8Right}
          />
        </Card>

        {standardCards.map(([background, src]) => (
          <Card background={background} key={src}>
            <CenteredImage src={src} />
          </Card>
        ))}

        <Card background="bg-[#2ceb56]">
          <img
            alt=""
            aria-hidden="true"
            className="absolute left-[3.34%] top-[11%] h-[312.3%] w-[56.12%] max-w-none object-cover"
            src={assets.row14Left}
          />
          <img
            alt=""
            aria-hidden="true"
            className="absolute left-[41.56%] top-[-166.8%] h-[312.3%] w-[56.12%] max-w-none object-cover"
            src={assets.row14Left}
          />
        </Card>
        <Card background="bg-[#e1eb2c]">
          <div className="absolute left-[2.39%] top-[10.73%] flex h-[78.48%] w-[95.22%] items-center gap-[2.87%]">
            {[assets.row14Phone1, assets.row14Phone2, assets.row14Phone3].map((src) => (
              <img
                alt=""
                aria-hidden="true"
                className="h-full min-w-0 flex-1 object-cover"
                key={src}
                src={src}
              />
            ))}
          </div>
        </Card>
        <Card background="bg-[#d142f9]">
          <img
            alt=""
            aria-hidden="true"
            className="absolute left-[24.29%] top-[8.57%] h-[91.37%] w-[51.82%] max-w-none object-cover"
            src={assets.row14Right}
          />
        </Card>
      </div>
    </section>
      {selectedImage && (
        <FeedPreviewModal
          isLiked={likedImages.has(selectedImage)}
          onClose={() => setSelectedImage(null)}
          onToggleLike={toggleLike}
          selectedImage={selectedImage}
        />
      )}
    </OpenPreviewContext.Provider>
  );
}
