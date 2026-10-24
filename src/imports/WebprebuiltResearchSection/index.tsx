export default function WebprebuiltResearchSection() {
  return (
    <section
      id="webprebuilt-research"
      className="scroll-mt-24 bg-black px-5 text-white sm:px-8 lg:px-[119px]"
      data-node-id="241:2"
    >
      <div className="mx-auto max-w-[1274px]">
        <div data-node-id="241:3">
          <h2
            className="case-study-section-label w-full bg-white px-[10px] py-[4px] text-center font-['Instrument_Sans:Bold'] text-[15px] font-bold leading-[1.45] text-[#060606] sm:w-fit"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Research and Discovery
          </h2>

          <div className="mt-[20px]">
            <h3
              className="font-['Instrument_Sans:Bold'] text-[20px] sm:text-[22px] font-bold leading-[1.4] mb-[16px] text-white"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              I researched the products that already own this space.
            </h3>
            <p
              className="font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] text-[#ffffff99]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              I conducted a competitive audit of website builders and digital product tools to understand what worked, why it worked, and how those insights could inform Webprebuilt without simply copying existing solutions.
            </p>
          </div>
        </div>

        <div className="mt-[36px] grid gap-6 md:grid-cols-2">
          <article
            className="min-h-[auto] md:min-h-[548px] bg-[#37fc00] px-5 py-7 text-black"
            data-node-id="241:7"
          >
            <h3
              className="max-w-[488px] font-['Instrument_Sans:Bold'] text-[24px] sm:text-[28px] font-bold leading-[1.3]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              The best products pursue simplicity relentlessly
            </h3>
            <p
              className="mt-4 sm:mt-5 font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] text-black"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              {"Studying competitors like Figma and Framer, I noticed how they kept their interfaces clean despite extensive features. This inspired Webprebuilt's visual direction: simple, premium, and focused on what users need to do."}
            </p>
          </article>

          <article
            className="min-h-[auto] md:min-h-[548px] bg-[#37fc00] px-5 py-7 text-black"
            data-node-id="241:11"
          >
            <h3
              className="max-w-[488px] font-['Instrument_Sans:Bold'] text-[24px] sm:text-[28px] font-bold leading-[1.3]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Each file is its own world
            </h3>
            <div
              className="mt-4 sm:mt-5 space-y-4 sm:space-y-5 font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <div>
                <p className="font-['Instrument_Sans:Bold'] font-bold text-[17px] sm:text-[20px] text-black">
                  The Structural Insight
                </p>
                <p className="mt-1 text-black">
                  Inspired by tools like Figma, Framer, and Notion, I separated the main dashboard from individual workspaces, giving each its own tools and controls for a more focused workflow.
                </p>
              </div>

              <div>
                <p className="font-['Instrument_Sans:Bold'] font-bold text-[17px] sm:text-[20px] text-black">
                  How This Shaped Webprebuilt
                </p>
                <p className="mt-1 text-black">
                  I applied the same principle to Webprebuilt. The SME workspace gives users an overview of all their websites, while each website has its own dashboard for editing content, viewing stats, and managing orders.
                </p>
                <p className="mt-2.5 text-black">
                  I kept these experiences separate because they serve different needs: the workspace helps users decide which website to manage, while the individual dashboard lets them focus on running that website.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
