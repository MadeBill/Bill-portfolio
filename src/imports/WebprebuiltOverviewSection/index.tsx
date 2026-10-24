function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="case-study-section-label w-full bg-white px-[10px] py-[4px] text-center font-['Instrument_Sans:Bold'] text-[15px] font-bold leading-[1.45] text-[#060606] sm:w-fit"
      style={{ fontVariationSettings: '"wdth" 100' }}
    >
      {children}
    </h2>
  );
}

export default function WebprebuiltOverviewSection() {
  return (
    <section
      className="bg-black px-5 text-white sm:px-8 lg:px-[120px]"
      data-node-id="238:6785"
    >
      <div className="mx-auto max-w-[1274px]">

        <div className="mt-0 scroll-mt-24 sm:mt-[40px]" id="webprebuilt-overview" data-node-id="238:6792">
          <SectionLabel>Overview</SectionLabel>
          <div className="mt-[20px] font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] text-[#ffffff99]">
            <h3
              className="font-['Instrument_Sans:Bold'] text-[20px] sm:text-[22px] font-bold leading-[1.4] mb-[16px] text-white"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Nigerian SMEs need a website. They don&apos;t need to wait two months for one.
            </h3>
            <p className="mb-[12px]">
              Getting a website built can be a long and frustrating process for Nigerian SMEs, often involving multiple stages, revisions, and weeks of waiting.
            </p>
            <p>
              Webprebuilt simplifies this by letting businesses choose from templates designed for their niche, purchase one, and get a live, editable website within 2–3 days.
            </p>

          </div>
        </div>

        <div className="mt-[32px] sm:mt-[80px] scroll-mt-24" id="webprebuilt-problem" data-node-id="238:6796">
          <SectionLabel>The problem</SectionLabel>
          <div className="mt-[20px] font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] text-[#ffffff99]">
            <h3
              className="font-['Instrument_Sans:Bold'] text-[20px] sm:text-[22px] font-bold leading-[1.4] mb-[16px] text-white"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Two months is too long. Most SMEs love getting their website so fast.
            </h3>
            <p>
              The traditional website development process has four stages — discovery, design,
              development, testing — each of which requires time, availability, and communication
              between the SME and the agency or freelancer they have hired. Any one of those stages
              can stall. Most do.
            </p>
          </div>
        </div>

        <div className="mt-[36px] grid gap-6 md:grid-cols-2">
          <article className="min-h-[190px] bg-[#37fc00] px-5 py-7 text-black">
            <h3
              className="font-['Instrument_Sans:Bold'] text-[26px] sm:text-[32px] font-bold leading-[1.2]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Time
            </h3>
            <p
              className="mt-4 sm:mt-5 font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] text-black"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Two months is the optimistic estimate. Projects routinely run longer when revisions,
              developer availability, or miscommunication cause delays
            </p>
          </article>

          <article className="min-h-[190px] bg-[#d600fc] px-5 py-7 text-black">
            <h3
              className="font-['Instrument_Sans:Bold'] text-[26px] sm:text-[32px] font-bold leading-[1.2]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Money
            </h3>
            <p
              className="mt-4 sm:mt-5 font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] text-black"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Custom design and development is expensive. Most Nigerian SMEs cannot afford a
              quality agency and cannot evaluate whether a cheaper freelancer will deliver.
            </p>
          </article>
        </div>

        <p
          className="mt-8 sm:mt-10 font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] text-[#ffffff99]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Webprebuilt removes the need to hire a designer or devs build from scratch. SMEs choose a fully designed template tailored to their business, purchase it, and receive a live, editable website within 2–3 days.
        </p>
      </div>
    </section>
  );
}
