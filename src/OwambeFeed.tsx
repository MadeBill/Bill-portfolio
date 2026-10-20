const prefix = "/assets/owambe-feed";

const OWAMBE_IMAGES: string[] = [
  // Row 1
  `${prefix}/Frame 427321735.png`,
  `${prefix}/Frame 427321736.png`,
  `${prefix}/Frame 1.png`,
  // Row 2
  `${prefix}/Frame 2.png`,
  `${prefix}/Frame 5.png`,
  `${prefix}/Frame 6.png`,
  // Row 3
  `${prefix}/Frame 5-1.png`,
  `${prefix}/Frame 6-1.png`,
  `${prefix}/Frame 2-1.png`,
  // Row 4
  `${prefix}/Frame 5-2.png`,
  `${prefix}/Frame 4.png`,
  `${prefix}/Frame 1-1.png`,
  // Row 5
  `${prefix}/Frame 5-3.png`,
  `${prefix}/Frame 4-1.png`,
  `${prefix}/Frame 1-2.png`,
  // Row 6
  `${prefix}/Frame 5-4.png`,
  `${prefix}/Frame 1-3.png`,
  `${prefix}/Frame 4-2.png`,
];

export default function OwambeFeed() {
  return (
    <div className="w-full pb-16 pt-4">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[16px] sm:grid-cols-2 sm:gap-[20px] lg:grid-cols-3">
        {OWAMBE_IMAGES.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="group relative overflow-hidden rounded-[8px]"
          >
            <img
              alt=""
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              src={src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
