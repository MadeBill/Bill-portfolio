const assetPathPrefix = "/assets/webprebuilt";

const workspaceImages = [
  `${assetPathPrefix}/5da0f.png`,
  `${assetPathPrefix}/891cf.png`,
  `${assetPathPrefix}/31eeb.png`,
];

export default function WebprebuiltWorkspaceSection() {
  return (
    <section
      id="webprebuilt-workspace"
      className="scroll-mt-24 bg-black px-5 text-white sm:px-8 lg:px-[119px]"
      data-node-id="245:20"
    >
      <div className="mx-auto max-w-[1274px]">
        <div data-node-id="245:21">
          <h2
            className="case-study-section-label w-full bg-white px-[10px] py-1 text-center font-['Instrument_Sans:Bold'] text-[15px] font-bold leading-[1.45] text-[#060606] sm:w-fit sm:text-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Research and Discovery
          </h2>
        </div>

        <div
          className="mt-[24px] sm:mt-[40px] space-y-4 font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] sm:text-[18px]"
          data-node-id="245:25"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <h3 className="font-['Instrument_Sans:Bold'] text-[24px] sm:text-[32px] font-bold leading-[1.3] sm:leading-[51px] mb-2 sm:mb-4">
            Decision 1 — The Workspace
          </h3>
          <p>
            The workspace is the first thing users see after logging in. Each purchased website appears as a card with a preview of the actual site, its name, business niche, and status. Statuses like Live, In Progress, Bugs, and Bookmark help users spot what needs attention at a glance, without opening each website.
          </p>
          <p className="font-['Instrument_Sans:Bold'] text-[#fcce00] text-[18px] font-bold pt-4">
            Quick Filtering
          </p>
          <p>
            I added filter tabs for All, Live, In Progress, Bugs, and Bookmark so users can quickly narrow down their websites. For an SME managing multiple sites, finding the one that needs attention takes a single click instead of checking each one individually.
          </p>
          <p className="font-['Instrument_Sans:Bold'] text-[#fcce00] text-[18px] font-bold pt-4">
            Workspace Switching
          </p>
          <p>
            I placed a workspace switcher in the top-left corner for users managing multiple brands or businesses. This lets them keep each business in its own workspace and switch between them without mixing up their websites or workflows.
          </p>
          <p className="font-['Instrument_Sans:Bold'] text-[#fcce00] text-[18px] font-bold pt-4">
            Explore lives here too
          </p>
          <p>
            The sidebar has an Explore tab — same template marketplace, accessible without leaving
            the dashboard. An SME who wants to purchase a second website for a new business venture
            doesn&apos;t have to go back to the landing page. They browse, find what fits, and pay —
            all from inside their existing workspace.
          </p>
          <p>
            And for anyone not logged in yet — the full Explore experience is available on the
            landing page too. You don&apos;t need an account to browse templates and find one you
            like. The barrier to seeing the product&apos;s value is as low as possible.
          </p>
        </div>

        <div
          className="mt-[36px] grid gap-[10px] bg-[#37fc00] p-3 md:grid-cols-3 md:py-7"
          data-node-id="245:26"
        >
          {workspaceImages.map((src, index) => (
            <div className="relative aspect-[411/267] min-w-0 overflow-hidden" key={src}>
              <img
                alt={`Webprebuilt workspace interface ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                src={src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
