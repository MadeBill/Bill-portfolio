const prefix = "/assets/quanvaulte-feed";

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
    label: "Children Authentication",
    images: [
      `${prefix}/Frame 2.png`,
      `${prefix}/Frame 2-1.png`,
      `${prefix}/Frame 1-1.png`,
    ],
  },
  {
    label: "School/Parents Authentication",
    images: [
      `${prefix}/Frame 1-2.png`,
      `${prefix}/Frame 1-3.png`,
      `${prefix}/Frame 1-4.png`,
    ],
  },
  {
    label: "Key dashboard designs for the kids",
    images: [
      `${prefix}/Frame 4.png`,
      `${prefix}/Frame 4-1.png`,
      `${prefix}/Frame 4-2.png`,
      `${prefix}/Frame 4-3.png`,
      `${prefix}/Frame 5.png`,
      `${prefix}/Frame 5-1.png`,
      `${prefix}/Frame 5-2.png`,
      `${prefix}/Frame 5-3.png`,
      `${prefix}/Frame 5-4.png`,
      `${prefix}/Frame 5-5.png`,
      `${prefix}/Frame 5-6.png`,
      `${prefix}/Frame 1-5.png`,
      `${prefix}/Frame 6.png`,
      `${prefix}/Frame 6-1.png`,
    ],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="w-fit bg-white px-[10px] py-[4px] font-['Instrument_Sans:Bold',sans-serif] text-[15px] font-bold italic leading-[1.45] text-[#060606] sm:text-[20px]"
      style={{ fontVariationSettings: '"wdth" 100' }}
    >
      {children}
    </h3>
  );
}

export default function QuanvaulteFeed() {
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
