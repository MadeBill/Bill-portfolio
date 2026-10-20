const prefix = "/assets/forfalify-feed";

interface FeedSection {
  label: string;
  images: string[];
}

const FEED_SECTIONS: FeedSection[] = [
  {
    label: "Website",
    images: [
      `${prefix}/Frame 427321735.png`,
      `${prefix}/Frame 427321736.png`,
      `${prefix}/Frame 1.png`,
    ],
  },
  {
    label: "Key screens for Authentication",
    images: [
      `${prefix}/Frame 2.png`,
      `${prefix}/Frame 5.png`,
      `${prefix}/Frame 6.png`,
    ],
  },
  {
    label: "Merchant dashboard",
    images: [
      // Row 1
      `${prefix}/Frame 5-1.png`,
      `${prefix}/Frame 6-1.png`,
      `${prefix}/Frame 2-1.png`,
      // Row 2
      `${prefix}/Frame 5-2.png`,
      `${prefix}/Frame 1-1.png`,
      `${prefix}/Frame 4.png`,
      // Row 3
      `${prefix}/Frame 5-3.png`,
      `${prefix}/Frame 1-2.png`,
      `${prefix}/Frame 4-1.png`,
      // Row 4
      `${prefix}/Frame 5-4.png`,
      `${prefix}/Frame 1-3.png`,
      `${prefix}/Frame 6-2.png`,
      // Row 5
      `${prefix}/Frame 7.png`,
      `${prefix}/Frame 1-4.png`,
      `${prefix}/Frame 6-3.png`,
      // Row 6
      `${prefix}/Frame 5-5.png`,
      `${prefix}/Frame 4-2.png`,
    ],
  },
  {
    label: "Investor dashboard",
    images: [
      // Row 1
      `${prefix}/Frame 5-6.png`,
      `${prefix}/Frame 6-4.png`,
      `${prefix}/Frame 2-2.png`,
      // Row 2
      `${prefix}/Frame 5-7.png`,
      `${prefix}/Frame 1-5.png`,
      `${prefix}/Frame 4-3.png`,
      // Row 3
      `${prefix}/Frame 5-8.png`,
      `${prefix}/Frame 1-6.png`,
      `${prefix}/Frame 4-4.png`,
      // Row 4
      `${prefix}/Frame 5-9.png`,
      `${prefix}/Frame 1-7.png`,
      `${prefix}/Frame 6-5.png`,
      // Row 5
      `${prefix}/Frame 5-10.png`,
      `${prefix}/Frame 1-8.png`,
    ],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="w-fit bg-white px-[10px] py-[4px] font-['Instrument_Sans:Bold',sans-serif] text-[15px] font-bold leading-[1.45] text-[#060606] sm:text-[20px]"
      style={{ fontVariationSettings: '"wdth" 100' }}
    >
      {children}
    </h3>
  );
}

export default function ForfalifyFeed() {
  return (
    <div className="w-full px-5 py-10 sm:px-8 sm:py-16 lg:px-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[48px] sm:gap-[64px]">
        {FEED_SECTIONS.map((section) => (
          <div key={section.label} className="flex flex-col gap-[20px] sm:gap-[24px]">
            <SectionLabel>{section.label}</SectionLabel>

            <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 sm:gap-[20px] lg:grid-cols-3">
              {section.images.map((src) => (
                <div
                  key={src}
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
        ))}
      </div>
    </div>
  );
}
