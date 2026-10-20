function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="case-study-section-label w-full bg-white px-[10px] py-1 text-center font-['Instrument_Sans:Bold'] text-[15px] font-bold leading-[1.45] text-[#060606] sm:w-fit sm:text-[20px]"
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
          <div className="mt-[16px] font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] sm:mt-[20px] sm:text-[18px]">
            <h3
              className="font-['Instrument_Sans:Bold'] text-[20px] sm:text-[24px] font-bold leading-[1.3] sm:leading-[1.45] mb-2 sm:mb-3"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Nigerian SMEs need a website. They don&apos;t need to wait two months for one.
            </h3>
            <p>
              Getting a website built can be a long and frustrating process for Nigerian SMEs, often involving multiple stages, revisions, and weeks of waiting.
            </p>
            <p>
              Webprebuilt simplifies this by letting businesses choose from templates designed for their niche, purchase one, and get a live, editable website within 2–3 days.
            </p>

          </div>
        </div>

        <div className="mt-[48px] sm:mt-[60px] scroll-mt-24" id="webprebuilt-problem" data-node-id="238:6796">
          <SectionLabel>The problem</SectionLabel>
          <div className="mt-[16px] font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] sm:mt-[20px] sm:text-[18px]">
            <h3
              className="font-['Instrument_Sans:Bold'] text-[20px] sm:text-[24px] font-bold leading-[1.3] sm:leading-[1.45] mb-2 sm:mb-3"
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
              className="font-['Instrument_Sans:Bold'] text-[32px] sm:text-[40px] font-bold leading-[1.2] sm:leading-[32px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Time
            </h3>
            <p
              className="mt-4 sm:mt-5 font-['Instrument_Sans:Medium'] text-[15px] sm:text-[18px] font-medium leading-[1.5]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Two months is the optimistic estimate. Projects routinely run longer when revisions,
              developer availability, or miscommunication cause delays
            </p>
          </article>

          <article className="min-h-[190px] bg-[#d600fc] px-5 py-7 text-black">
            <h3
              className="font-['Instrument_Sans:Bold'] text-[32px] sm:text-[40px] font-bold leading-[1.2] sm:leading-[32px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Money
            </h3>
            <p
              className="mt-4 sm:mt-5 font-['Instrument_Sans:Medium'] text-[15px] sm:text-[18px] font-medium leading-[1.5]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Custom design and development is expensive. Most Nigerian SMEs cannot afford a
              quality agency and cannot evaluate whether a cheaper freelancer will deliver.
            </p>
          </article>
        </div>

        <p
          className="mt-8 sm:mt-10 font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] sm:text-[18px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Webprebuilt removes every one of these friction points. The SME does not describe what
          they want to a designer — they browse templates built for their specific business type
          and select the one that looks right. The template is not a blank canvas — it is a fully
          designed, niche-specific website. The purchase triggers deployment. Two to three days
          later, the SME has a live website they can edit themselves.
        </p>
      </div>
    </section>
  );
}
