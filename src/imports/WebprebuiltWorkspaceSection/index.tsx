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
            className="case-study-section-label w-full bg-white px-[10px] py-[4px] text-center font-['Instrument_Sans:Bold'] text-[15px] font-bold leading-[1.45] text-[#060606] sm:w-fit"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            The Workspace
          </h2>
        </div>

        <div
          className="mt-[20px] font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] text-[#ffffff99]"
          data-node-id="245:25"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <h3 className="font-['Instrument_Sans:Bold'] text-[20px] sm:text-[22px] font-bold leading-[1.4] mb-[10px] text-white">
            Decision 1 — The Workspace
          </h3>
          <p>
            The workspace is the first thing users see after logging in. Each purchased website appears as a card with a preview of the actual site, its name, business niche, and status. Statuses like Live, In Progress, Bugs, and Bookmark help users spot what needs attention at a glance, without opening each website.
          </p>
          <p className="font-['Instrument_Sans:Bold'] text-[#fcce00] text-[18px] font-bold leading-[1.4] mt-[32px] mb-[10px]">
            Quick Filtering
          </p>
          <p>
            I added filter tabs for All, Live, In Progress, Bugs, and Bookmark so users can quickly narrow down their websites. For an SME managing multiple sites, finding the one that needs attention takes a single click instead of checking each one individually.
          </p>
          <p className="font-['Instrument_Sans:Bold'] text-[#fcce00] text-[18px] font-bold leading-[1.4] mt-[32px] mb-[10px]">
            Workspace Switching
          </p>
          <p>
            I placed a workspace switcher in the top-left corner for users managing multiple brands or businesses. This lets them keep each business in its own workspace and switch between them without mixing up their websites or workflows.
          </p>
          <p className="font-['Instrument_Sans:Bold'] text-[#fcce00] text-[18px] font-bold leading-[1.4] mt-[32px] mb-[10px]">
            Explore lives here too
          </p>
          <p>
            I made the Explore marketplace accessible both inside the dashboard and on the landing page. Existing users can purchase templates for new ventures without leaving their workspace, while visitors can browse templates without creating an account, reducing friction to discovery and purchase.
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
