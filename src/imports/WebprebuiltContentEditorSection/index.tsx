const assetPathPrefix = "/assets/webprebuilt";

const editorImages = [
  `${assetPathPrefix}/7dc09.png`,
  `${assetPathPrefix}/e9931.png`,
  `${assetPathPrefix}/c9adb.png`,
  `${assetPathPrefix}/fabd7.png`,
];

function DecisionBlock({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div>
      <h3
        className="font-['Instrument_Sans:Bold'] text-[18px] font-bold leading-[1.4] text-[#fcce00] mt-[32px] mb-[10px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {title}
      </h3>
      <div
        className="space-y-3 font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] text-[#ffffff99]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {children}
      </div>
    </div>
  );
}

export default function WebprebuiltContentEditorSection() {
  return (
    <section
      id="webprebuilt-content-editor"
      className="scroll-mt-24 bg-black px-5 text-white sm:px-8 lg:px-[120px]"
      data-node-id="250:9"
    >
      <div className="mx-auto max-w-[1272px]">
        <h2
          className="font-['Instrument_Sans:Bold'] text-[20px] sm:text-[22px] font-bold leading-[1.4] mb-[10px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Decision 2 — Content Editor
        </h2>

        <div className="mt-[16px]">
          <DecisionBlock title="Why the editor is intentionally limited">
            <p>
              {"Full design freedom can overwhelm SMEs and risk breaking their website layouts. I designed Webprebuilt's Content Editor to let users edit text, colors, fonts, images, and toggle sections while preserving the original structure, giving them control without compromising the design."}
            </p>
          </DecisionBlock>

          <DecisionBlock title="Content Editor — pages as a table">
            <p>
              I used a table to list website pages with preview thumbnails, last updated dates, and status labels. Unlike template browsing, finding a page to edit is task-focused, so the table is best to makes navigation faster, with thumbnails helping users recognise pages at a glance.
            </p>
          </DecisionBlock>

          <DecisionBlock title="The editor itself — click anything to edit it">
            <p>
              {"I paired a live website preview with a contextual editing sidebar. SMEs can select a section and edit its text, colors, fonts, and images or toggle its visibility, without touching code or risking the layout."}
            </p>
          </DecisionBlock>

          <DecisionBlock title="The first-time tooltip">
            <p>
              I added a simple first-time prompt explaining how to edit: click any section in the preview. One instruction and one button keep onboarding brief, letting SMEs learn by doing without lengthy tutorials or documentation.
            </p>
          </DecisionBlock>
        </div>

        <div
          className="mt-[72px] bg-[#37fc00] px-4 py-7 sm:px-8 lg:px-[179px] lg:py-10"
          data-node-id="252:26"
        >
          <div className="grid gap-[29px] md:grid-cols-2">
            {editorImages.map((src, index) => (
              <div className="relative aspect-[443.39/287.943] min-w-0 overflow-hidden" key={src}>
                <img
                  alt={`Webprebuilt content editor interface ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  src={src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
