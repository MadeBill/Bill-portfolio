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
        className="font-['Instrument_Sans:Bold'] text-[18px] font-bold leading-[1.4] text-[#fcce00] mb-2"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {title}
      </h3>
      <div
        className="space-y-3 font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] sm:text-[18px]"
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
          className="font-['Instrument_Sans:Bold'] text-[24px] sm:text-[32px] font-bold leading-[1.3] sm:leading-[51px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Decision 2 — Content Editor
        </h2>

        <div className="mt-[15px] space-y-9">
          <DecisionBlock title="Why the editor is intentionally limited">
            <p>
              Full design freedom can overwhelm SME owners without design experience. One wrong change can break a layout and compromise the professional look of their website.
            </p>
            <p>
              I designed Webprebuilt&apos;s Content Editor to focus on what users actually need to change: text, colors, fonts, and images. The right-side panel provides these controls, along with a toggle to show or hide sections, while keeping the layout and structure intact.
            </p>
            <p>
              The goal: Give SMEs control over their content without making it easy to break the design they paid for.
            </p>
          </DecisionBlock>

          <DecisionBlock title="Content Editor — pages as a table">
            <p>
              The Content Editor shows all the pages of the website as a table — Home, Pricing,
              Product page — each with a preview thumbnail, last updated date, status chip, and an
              Edit webpages button. The table format is correct here. The SME is not browsing or
              comparing pages the way they browse templates. They are looking for a specific page
              to edit, and a table gets them there faster than cards would. The thumbnail previews
              mean they recognise the page visually before reading the title.
            </p>
          </DecisionBlock>

          <DecisionBlock title="The editor itself — click anything to edit it">
            <p>
              Selecting a page opens a live preview of the website in the centre panel with an
              editing sidebar on the right. The right panel shows the properties of whatever
              section is currently selected — headline text, body text, color, font, image upload,
              and a Show on site toggle. The SME does not interact with code or a drag-and-drop
              canvas. They click a section, see its properties appear on the right, and change them
              directly.
            </p>
          </DecisionBlock>

          <DecisionBlock title="The first-time tooltip">
            <p>
              When an SME enters the Content Editor for the first time, a modal appears: “Click any
              section in the preview to start editing.” One instruction. One button — Continue. The
              SME knows exactly what to do before they touch anything. No tutorial to watch, no
              documentation to read. The onboarding is a single sentence because the interface
              only needs a single sentence to explain it.
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
