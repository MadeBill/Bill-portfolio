import ProjectTabs, { type ProjectTab } from "@/ProjectTabs";
import imgTypographyBannerMobile from "./typography-banner-mobile.png";

const assetPathPrefix = "/assets/forfalify-mobile";
const imgImage7 = `${assetPathPrefix}/55447.png`;
const imgImage6 = `${assetPathPrefix}/24b85.png`;
const imgImage8 = `${assetPathPrefix}/9d1fb.png`;
const imgFrame10000046901 = `${assetPathPrefix}/fa04c.png`;
const imgFrame10000046891 = `${assetPathPrefix}/6c676.png`;
const imgFrame10000046911 = `${assetPathPrefix}/3ff51.png`;
const imgMacBookPro143921 = `${assetPathPrefix}/b1120.png`;
const imgMacBookPro144011 = `${assetPathPrefix}/3e3a5.png`;
const imgMacBookPro144111 = `${assetPathPrefix}/bd234.png`;
const imgMacBookPro147711 = `${assetPathPrefix}/a640f.png`;
const imgMacBookPro1446 = `${assetPathPrefix}/2eee8.png`;
const imgFrame10000046881 = `${assetPathPrefix}/c87d8.png`;
const imgMacBookPro14112 = `${assetPathPrefix}/20940.png`;
const imgMacBookPro14751 = `${assetPathPrefix}/0a3f0.png`;
const imgMacBookPro14861 = `${assetPathPrefix}/d3639.png`;
const imgMacBookPro14871 = `${assetPathPrefix}/0f4d0.png`;
const imgMacBookPro14881 = `${assetPathPrefix}/7e063.png`;
const imgMacBookPro14721 = `${assetPathPrefix}/d2bc5.png`;
const imgMacBookPro14471 = `${assetPathPrefix}/90b8e.png`;
const imgMacBookPro14701 = `${assetPathPrefix}/72406.png`;
const imgMacBookPro14841 = `${assetPathPrefix}/2f49a.png`;
const imgMacBookPro147511 = `${assetPathPrefix}/83605.png`;
const imgMacBookPro144151 = `${assetPathPrefix}/a01f7.png`;
const imgMacBookPro14731 = `${assetPathPrefix}/adc43.png`;
const imgMacBookPro14741 = `${assetPathPrefix}/0e6d1.png`;
const imgEllipse24 = `${assetPathPrefix}/a4c5b.svg`;

interface ForfalifyMobileProps {
  activeTab?: ProjectTab;
  onTabChange?: (tab: ProjectTab) => void;
}

export default function ForfalifyMobile({
  activeTab = "casestudy",
  onTabChange,
}: ForfalifyMobileProps) {
  return (
    <div className="forfalify-mobile-design relative bg-black w-full" data-node-id="325:9" data-name="iPhone 13 & 14 - 58">
      {/* Tabs — kept absolute so they float above content */}
      <div className="absolute left-[18px] top-[20.56px] z-10" data-node-id="325:10">
        <ProjectTabs
          activeTab={activeTab}
          onTabChange={(tab) => onTabChange?.(tab)}
        />
      </div>

      {/* ── Main content as a flex column – no more hardcoded top values ── */}
      <div className="flex flex-col gap-[40px] items-start pt-[91px] px-[18px] pb-[60px] w-full">

        {/* 1. Overview */}
        <div className="flex flex-col gap-[16px] items-start w-full" data-node-id="325:16">
          <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-node-id="325:17">
            <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[12px] whitespace-nowrap" data-node-id="325:18" style={{ fontVariationSettings: '"wdth" 100' }}>
              Overview
            </p>
          </div>
          <div className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium text-[15px] text-white w-full" data-node-id="325:19" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-[16px]">Small and mid-sized merchants often struggle to access invoices finance due to complex processes and limited banking relationships. Forfaitify connects these merchants with investors seeking asset-backed, insurance-protected investment opportunities.</p>
            <p className="leading-[24px]">As the founding product designer, I designed both portals, covering the merchant application flow, investment pools, epoch mechanics, notifications, and security.</p>
          </div>
        </div>

        {/* 2. The problem + user cards */}
        <div className="flex flex-col gap-[40px] items-start w-full" data-node-id="325:20">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="325:21">
            <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-node-id="325:22">
              <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[15px] whitespace-nowrap" data-node-id="325:23" style={{ fontVariationSettings: '"wdth" 100' }}>
                The problem
              </p>
            </div>
            <div className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold text-[15px] text-white w-full" data-node-id="325:24" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[24px] mb-0">Two users. Opposite relationships with risk.</p>
              <p className="leading-[24px]">The defining challenge on Forfaitify was not visual — it was structural. The platform serves two user types whose relationship to the product is almost entirely opposed.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-full" data-node-id="325:25">
            {/* Investor card */}
            <div className="h-[417.488px] relative shrink-0 w-full" data-node-id="325:26">
              <div className="absolute bg-[#37fc00] h-[417.488px] left-0 top-0 w-[352px]" data-node-id="325:27" />
              <div className="absolute content-stretch flex flex-col gap-[29.821px] items-start left-[18.71px] top-[11.69px] w-[307.561px]" data-node-id="325:28">
                <div className="content-stretch flex flex-col gap-[4.678px] items-start relative shrink-0 w-full" data-node-id="325:29">
                  <div className="bg-white content-stretch flex items-center justify-center px-[5.847px] py-[2.339px] relative shrink-0" data-node-id="325:30">
                    <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[14.033px] whitespace-nowrap" data-node-id="325:31" style={{ fontVariationSettings: '"wdth" 100' }}>
                      The investor
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Instrument_Sans:SemiBold'] font-semibold leading-[1.45] min-w-full relative shrink-0 text-[18.711px] text-black w-[min-content]" data-node-id="325:32" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Deploys capital. Expects structured returns
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[29.236px] items-start relative shrink-0 w-[296.452px]" data-node-id="325:33">
                  <div className="content-stretch flex gap-[11.694px] items-start relative shrink-0 w-full" data-node-id="325:34">
                    <div className="relative shrink-0 size-[18.711px]" data-node-id="325:35">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse24} />
                    </div>
                    <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[14.033px] text-black w-[266.047px]" data-node-id="325:36" style={{ fontVariationSettings: '"wdth" 100' }}>{`Needs to understand exactly where their money is and what it's doing at any point in time`}</p>
                  </div>
                  <div className="content-stretch flex gap-[11.694px] items-start relative shrink-0 w-full" data-node-id="325:37">
                    <div className="relative shrink-0 size-[18.711px]" data-node-id="325:38">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse24} />
                    </div>
                    <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[14.033px] text-black w-[266.047px]" data-node-id="325:39" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Needs to choose between pooled exposure and custom deal-specific allocation
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[11.694px] items-start relative shrink-0 w-full" data-node-id="325:40">
                    <div className="relative shrink-0 size-[18.711px]" data-node-id="325:41">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse24} />
                    </div>
                    <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[14.033px] text-black w-[266.047px]" data-node-id="325:42" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Needs epoch-based reporting — clear visibility of cycle start, end, and return
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[11.694px] items-start relative shrink-0 w-full" data-node-id="325:43">
                    <div className="relative shrink-0 size-[18.711px]" data-node-id="325:44">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse24} />
                    </div>
                    <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[14.033px] text-black w-[266.047px]" data-node-id="325:45" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Needs to trust the platform before they trust a single merchant
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Merchant card */}
            <div className="h-[417.488px] relative shrink-0 w-full" data-node-id="325:46">
              <div className="absolute bg-[#d600fc] h-[417.488px] left-0 top-0 w-[352px]" data-node-id="325:47" />
              <div className="absolute content-stretch flex flex-col gap-[29.821px] items-start left-[18.71px] top-[11.69px] w-[307.561px]" data-node-id="325:48">
                <div className="content-stretch flex flex-col gap-[4.678px] items-start relative shrink-0 w-full" data-node-id="325:49">
                  <div className="bg-white content-stretch flex items-center justify-center px-[5.847px] py-[2.339px] relative shrink-0" data-node-id="325:50">
                    <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[14.033px] whitespace-nowrap" data-node-id="325:51" style={{ fontVariationSettings: '"wdth" 100' }}>
                      The Merchant
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Instrument_Sans:SemiBold'] font-semibold leading-[1.45] min-w-full relative shrink-0 text-[18.711px] text-black w-[min-content]" data-node-id="325:52" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Needs capital. Operates under time pressure.
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[29.236px] items-start relative shrink-0 w-[296.452px]" data-node-id="325:53">
                  <div className="content-stretch flex gap-[11.694px] items-start relative shrink-0 w-full" data-node-id="325:54">
                    <div className="relative shrink-0 size-[18.711px]" data-node-id="325:55">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse24} />
                    </div>
                    <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[14.033px] text-black w-[266.047px]" data-node-id="325:56" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Needs fast, clear access to available financing — not a complex financial dashboard
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[11.694px] items-start relative shrink-0 w-full" data-node-id="325:57">
                    <div className="relative shrink-0 size-[18.711px]" data-node-id="325:58">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse24} />
                    </div>
                    <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[14.033px] text-black w-[266.047px]" data-node-id="325:59" style={{ fontVariationSettings: '"wdth" 100' }}>{`Needs to understand what they're committing to before they apply`}</p>
                  </div>
                  <div className="content-stretch flex gap-[11.694px] items-start relative shrink-0 w-full" data-node-id="325:60">
                    <div className="relative shrink-0 size-[18.711px]" data-node-id="325:61">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse24} />
                    </div>
                    <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[14.033px] text-black w-[266.047px]" data-node-id="325:62" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Needs status visibility — where is my application, when does it fund
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[11.694px] items-start relative shrink-0 w-full" data-node-id="325:63">
                    <div className="relative shrink-0 size-[18.711px]" data-node-id="325:64">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse24} />
                    </div>
                    <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[14.033px] text-black w-[266.047px]" data-node-id="325:65" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Needs to feel the platform is on their side, not interrogating them .Needs a process simple enough to complete without a financial advisor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Key flow decisions label */}
        <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-node-id="325:91">
          <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[15px] whitespace-nowrap" data-node-id="325:92" style={{ fontVariationSettings: '"wdth" 100' }}>
            Some Key flow decisions during design
          </p>
        </div>

        {/* 4. Illustration — Newspaper & Engraving Style */}
        <div className="[word-break:break-word] flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[20px] items-start text-[15px] w-full" data-node-id="325:93">
          <p className="leading-[51px] min-w-full relative shrink-0 text-[#39ff14] w-[min-content]" data-node-id="325:94" style={{ fontVariationSettings: '"wdth" 100' }}>{`Illustration — Newspaper & Engraving Style`}</p>
          <p className="leading-[24px] relative shrink-0 text-white w-full" data-node-id="325:95" style={{ fontVariationSettings: '"wdth" 100' }}>{`Trade finance has a history that lives in print — paper invoices, stamped documents, broadsheet financial reporting. The three illustrations reference that heritage directly: a verified invoice in aged newspaper texture, an engraving-style hand holding a magnifying glass, a pile of international currencies as a physical tangible object. The contrast between the aged illustration style and the clean digital interface communicates the platform's core proposition in one visual moment — old trust, new technology.`}</p>
          <div className="h-[145px] ml-[3px] relative shrink-0 w-[345px]" data-node-id="325:96">
            <div className="absolute bg-[#fcce00] h-[145px] left-0 top-0 w-[345px]" data-node-id="325:97" />
            <div className="absolute content-stretch flex gap-[24.083px] items-center left-[22px] top-[22px]" data-node-id="325:98">
              <div className="h-[86.206px] relative shrink-0 w-[77.365px]" data-node-id="325:99" data-name="image 7">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
              </div>
              <div className="h-[108.202px] relative shrink-0 w-[97.104px]" data-node-id="325:100" data-name="image 6">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
              </div>
              <div className="h-[86.206px] relative shrink-0 w-[77.365px]" data-node-id="325:101" data-name="image 8">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
              </div>
            </div>
          </div>
        </div>

        {/* 5. Color — Blue */}
        <div className="flex flex-col gap-[20px] items-start w-full" data-node-id="325:66">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="325:67">
            <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[24px] relative shrink-0 text-[#39ff14] text-[15px] w-[92px]" data-node-id="325:68" style={{ fontVariationSettings: '"wdth" 100' }}>
              Color — Blue
            </p>
            <div className="bg-[#2c43eb] h-[16px] relative rounded-[2.909px] shrink-0 w-[16.364px]" data-node-id="325:69" />
          </div>
          <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[24px] relative shrink-0 text-[15px] text-white w-full" data-node-id="325:70" style={{ fontVariationSettings: '"wdth" 100' }}>
            Blue is not the default fintech color by accident. It reduces anxiety, signals institutional credibility, and communicates stability — the three things an investor needs before committing capital. I used it sparingly: primary actions, active states, and trust signals only. When blue appears on Forfaitify, it means something.
          </p>
        </div>

        {/* 6. Typography */}
        <div className="flex flex-col gap-[40px] items-start w-full" data-node-id="325:71">
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[20px] items-start leading-[24px] relative shrink-0 text-[15px] w-full" data-node-id="325:72">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#39ff14] w-full" data-node-id="325:73" style={{ fontVariationSettings: '"wdth" 100' }}>{`Typography — Plus Jakarta Sans & Inter`}</p>
            <p className="relative shrink-0 text-white w-full" data-node-id="325:74" style={{ fontVariationSettings: '"wdth" 100' }}>
              I used Plus Jakarta Sans for headings and UI elements because of its clean, confident look, and Inter for body text to keep information easy to read, especially on data-heavy screens. One helps users scan quickly, while the other makes longer content easier to follow.
            </p>
          </div>
          <div className="aspect-[1023/918] relative shrink-0 w-full max-w-[341px]" data-name="Typography Banner Mobile">
            <img
              alt="Typography — Plus Jakarta Sans & Inter"
              className="h-full w-full object-cover pointer-events-none"
              src={imgTypographyBannerMobile}
            />
          </div>
        </div>

        {/* 7. Icons */}
        <div className="[word-break:break-word] flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[20px] items-start leading-[24px] text-[15px] w-full" data-node-id="325:84">
          <p className="relative shrink-0 text-[#39ff14] w-full" data-node-id="325:85" style={{ fontVariationSettings: '"wdth" 100' }}>
            Icons — Inline
          </p>
          <p className="relative shrink-0 text-white w-full" data-node-id="325:86" style={{ fontVariationSettings: '"wdth" 100' }}>
            Simple inline icons get out of the way of the data. On a financial dashboard, iconography that competes for attention is iconography that has failed its job.
          </p>
        </div>

        {/* 8. Spacing */}
        <div className="flex flex-col items-start w-full" data-node-id="325:87">
          <div className="[word-break:break-word] flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[20px] items-start leading-[24px] relative shrink-0 text-[15px] w-full" data-node-id="325:88">
            <p className="relative shrink-0 text-[#39ff14] w-full" data-node-id="325:89" style={{ fontVariationSettings: '"wdth" 100' }}>
              Spacing — 8px base, fintech standard
            </p>
            <p className="relative shrink-0 text-white w-full" data-node-id="325:90" style={{ fontVariationSettings: '"wdth" 100' }}>{`The fintech spacing convention exists because it has been validated at scale across millions of users making financial decisions. Reinventing it would have been design for its own sake, not for the user's benefit.`}</p>
          </div>
        </div>

        {/* 9. Key flow decisions label 2 */}
        <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-node-id="325:111">
          <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[24px] relative shrink-0 text-[#060606] text-[15px] whitespace-nowrap" data-node-id="325:112" style={{ fontVariationSettings: '"wdth" 100' }}>
            Some Key flow decisions during design
          </p>
        </div>

        {/* 10. First-Time Investor Onboarding Modal */}
        <div className="flex flex-col gap-[40px] items-start w-full" data-node-id="325:102">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="325:103">
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[16px] items-start leading-[24px] relative shrink-0 text-[15px] w-full" data-node-id="325:104">
              <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#39ff14] w-[278px]" data-node-id="325:105" style={{ fontVariationSettings: '"wdth" 100' }}>
                First-Time Investor Onboarding Modal
              </p>
              <div className="flex flex-col gap-[12px] text-white w-full">
                <p data-node-id="325:106" style={{ fontVariationSettings: '"wdth" 100' }}>
                  The goal was to help investors move from creating an account to making their first investment. I designed a three-screen onboarding modal that introduces the platform and guides users through the Centralized and Custom Pool journeys using real interface previews to build confidence.
                </p>
                <p style={{ fontVariationSettings: '"wdth" 100' }}>
                  Investors can choose guided or self-directed onboarding, with the option to skip at any stage so they stay in control of their experience.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[36.829px] items-start w-full" data-node-id="325:107">
            <div className="h-[431.378px] relative shrink-0 w-[349px]" data-node-id="325:108" data-name="Frame 1000004690 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10000046901} />
            </div>
            <div className="h-[467.695px] relative shrink-0 w-[349px]" data-node-id="325:109" data-name="Frame 1000004689 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10000046891} />
            </div>
            <div className="h-[467.695px] relative shrink-0 w-[349px]" data-node-id="325:110" data-name="Frame 1000004691 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10000046911} />
            </div>
          </div>
        </div>

        {/* 11. Investment Flow — Deposit & Review */}
        <div className="flex flex-col gap-[40px] items-start w-full">

          {/* Investment Flow heading + Deposit Modal */}
          <div className="flex flex-col gap-[12px] items-start w-full" data-node-id="325:116">
            <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[51px] text-[#39ff14] text-[15px] whitespace-nowrap" data-node-id="325:117" style={{ fontVariationSettings: '"wdth" 100' }}>{`Investment Flow — Deposit & Review`}</p>
            <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[51px] relative shrink-0 text-[#e1be3f] text-[15px] whitespace-nowrap" data-node-id="325:119" style={{ fontVariationSettings: '"wdth" 100' }}>
              Deposit Modal
            </p>
            <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[24px] text-[15px] text-white w-full" data-node-id="325:121" style={{ fontVariationSettings: '"wdth" 100' }}>
              The investor enters their amount — typing a custom figure or selecting from quick-pick presets ranging from $100 to $60k. Their available balance sits at the top before they touch the input, so they know their ceiling before they enter a number. No checkbox here. No confirmation yet. At this stage the investor is still in input mode — asking them to confirm before they have finished deciding is premature friction, not responsible design
            </p>
            <div className="h-[218px] relative shrink-0 w-[336px]" data-node-id="325:122" data-name="MacBook Pro 14_ - 39 (2) 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro143921} />
            </div>
          </div>

          {/* Review Modal */}
          <div className="flex flex-col gap-[20px] items-start w-full" data-node-id="325:123">
            <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[51px] relative shrink-0 text-[#e1be3f] text-[15px] whitespace-nowrap" data-node-id="325:124" style={{ fontVariationSettings: '"wdth" 100' }}>
              Review Modal
            </p>
            <div className="flex flex-col gap-[40px] items-start w-full" data-node-id="325:125">
              <div className="[word-break:break-word] font-['Instrument_Sans:Medium'] font-medium text-[15px] text-white w-full" data-node-id="325:126" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[24px] mb-0">After entering an amount, investors see a full summary of their investment, including the amount, pool, APY, estimated returns, pool share, and a warning that funds will be locked for 30–40 days.</p>
                <p className="leading-[24px]">{`I placed the confirmation checkbox after these details so investors understand what they're committing to before agreeing.`}</p>
              </div>
              <div className="aspect-[1512/982] relative shrink-0 w-full" data-node-id="325:127" data-name="MacBook Pro 14_ - 40 (1) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro144011} />
              </div>
            </div>
          </div>

          {/* Why two screens? */}
          <div className="[word-break:break-word] flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[20px] items-start text-[15px] w-full" data-node-id="325:128">
            <p className="leading-[51px] relative shrink-0 text-[#e1be3f] text-[15px] whitespace-nowrap" data-node-id="325:129" style={{ fontVariationSettings: '"wdth" 100' }}>
              Why two screens?
            </p>
            <p className="leading-[24px] relative shrink-0 text-white w-full" data-node-id="325:130" style={{ fontVariationSettings: '"wdth" 100' }}>
              The deposit modal asks how much. The review modal asks are you certain. They are different questions and they deserve different screens. Collapsing them into one would move too fast for a decision that locks capital for over a month
            </p>
          </div>

          {/* Pool Detail Page */}
          <div className="flex flex-col gap-[40px] items-start w-full" data-node-id="325:131">
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium'] font-medium gap-[20px] items-start relative shrink-0 w-full" data-node-id="325:133">
              <p className="font-['Instrument_Sans:Bold'] font-bold leading-[24px] relative shrink-0 text-[#34e619] text-[15px] w-[121px]" data-node-id="325:134" style={{ fontVariationSettings: '"wdth" 100' }}>
                Pool Detail Page
              </p>
              <div className="text-white w-full whitespace-pre-wrap" data-node-id="325:135" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[24px] mb-0 text-[15px]">The pool detail page brings everything investors need to monitor their investments and make decisions into one place. The challenge was presenting all this information without overwhelming them.</p>
                <p className="leading-[24px] mb-0 text-[15px]">​</p>
                <p className="leading-[24px] mb-0 text-[15px]">I focused on the order of information, making sure each section answers the investor's next question and keeps the experience clear and easy to navigate.</p>
                <p className="leading-[24px] mb-0 text-[15px]">​</p>
                <p className="leading-[24px] mb-0 text-[#fcce00] text-[15px]">The hierarchy of information</p>
                <p className="leading-[24px] mb-0 text-[15px]">Current amount funded leads at $30,000 in the largest type on the page. That is the number the investor cares about most, and interest tho small with different color( blue) will be seen first . Pool Info sits alongside it — total funded, APY, utilisation, pool progress, investor count — in smaller type, right column. Supporting data that never competes with the headline. The eye lands on the most important number first and moves to detail only when it needs to.</p>
                <p className="leading-[24px] mb-0 text-[15px]">​</p>
                <p className="leading-[24px] mb-0 text-[#fcce00] text-[15px]">Pool Criteria + Edit</p>
                <p className="leading-[24px] mb-0 text-[15px]">Invested, uninvested, loan range, loan interest, and target repayment duration are all visible and editable without leaving the page. Pool managers need to adjust parameters as market conditions change — burying that action in a settings page would create unnecessary friction for a task that needs to happen quickly.</p>
                <p className="leading-[24px] mb-0 text-[15px]">​</p>
                <p className="leading-[24px] mb-0 text-[#fcce00] text-[15px]">Pool Performance — Chart</p>
                <p className="leading-[24px] mb-0 text-[15px]">The green area chart with $3,706 earnings and 99.6% repayment success rate does the most important trust work on the page. A number alone means little. A number with a trend line behind it means the platform has history, and history means reliability. The chart communicates growth trajectory without the investor having to interpret raw data.</p>
                <p className="leading-[24px] mb-0 text-[15px]">​</p>
                <p className="leading-[24px] mb-0 text-[#fcce00] text-[15px]">Recent Transactions — Table</p>
                <p className="leading-[24px] mb-0 text-[15px]">Transaction history lives last. Audit information belongs at the bottom — it answers what happened, not what is happening now. Status chips — Rejected in red, Successful in green, Processing in yellow — communicate outcome at a glance without reading the full row.</p>
                <p className="leading-[24px] mb-0 text-[15px]">​</p>
                <p className="leading-[24px] mb-0 text-[#fcce00] text-[15px]">Deposit button — persistent</p>
                <p className="leading-[24px] text-[15px]">The Deposit button sits mid-page, always visible while the investor reviews pool performance. If the data is convincing, the action to add more capital is immediately reachable. The proximity of performance data to the deposit action is intentional — conviction should lead directly to action without friction in between.</p>
              </div>
            </div>
            <div className="aspect-[3460/4096] relative shrink-0 w-full" data-node-id="325:136" data-name="MacBook Pro 14_ - 41 (1) 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro144111} />
            </div>
          </div>

          {/* Explore Pools — Table & Cards */}
          <div className="flex flex-col gap-[20px] items-start w-full" data-node-id="325:137">
            <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[24px] relative shrink-0 text-[#39ff14] text-[15px] w-[313px]" data-node-id="325:138" style={{ fontVariationSettings: '"wdth" 100' }}>
              Explore Pools — When i use table and cars
            </p>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="325:139">
              <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[24px] relative shrink-0 text-[#e1be3f] text-[15px] w-[167px]" data-node-id="325:140" style={{ fontVariationSettings: '"wdth" 100' }}>
                Explore Pools — Table
              </p>
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="325:141">
                <div className="[word-break:break-word] font-['Instrument_Sans:Medium'] font-medium text-[15px] text-white w-full" data-node-id="325:142" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[24px] mb-0">Investors use the Explore page to compare pools, returns, epoch lengths, and risk before committing. A table makes this easier by keeping key information aligned, so investors can compare options quickly without jumping between cards.</p>
                  <p className="leading-[24px]">It also gives the platform a more structured, professional feel that matches the importance of financial decisions.</p>
                </div>
                <div className="h-[221px] relative shrink-0 w-[340px]" data-node-id="325:143" data-name="MacBook Pro 14_ - 77 (1) 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro147711} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[12px] items-start leading-[24px] relative shrink-0 text-[15px] w-full" data-node-id="325:144">
              <p className="relative shrink-0 text-[#e1be3f] text-[15px] w-[205px]" data-node-id="325:145" style={{ fontVariationSettings: '"wdth" 100' }}>
                Custom Pool — Card Design
              </p>
              <p className="relative shrink-0 text-white w-full" data-node-id="325:146" style={{ fontVariationSettings: '"wdth" 100' }}>
                Each card surfaces exactly what an investor needs to evaluate a pool in under five seconds — pool name, status, total value, return per epoch, TVL, epoch start date, minimum deposit, and one action: View details. Nothing more competes for attention.
              </p>
            </div>
            <div className="h-[229px] relative shrink-0 w-[352px]" data-node-id="325:148" data-name="MacBook Pro 14_ - 4 6">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro1446} />
            </div>
          </div>
        </div>

        {/* 12. Co-merchant signing — 03 Merchant Loan Application */}
        <div className="flex flex-col gap-[16px] items-start w-full" data-node-id="325:151">
          <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[24px] relative shrink-0 text-[#34e619] text-[15px] w-[256px]" data-node-id="325:154" style={{ fontVariationSettings: '"wdth" 100' }}>
            03 Merchant Loan Application — Pool Search to Funding
          </p>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium'] font-medium gap-[20px] items-start relative shrink-0 text-[15px] w-full" data-node-id="325:155">
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-[24px] relative shrink-0 text-[#e1be3f] text-[15px] w-[243px]" data-node-id="325:156" style={{ fontVariationSettings: '"wdth" 100' }}>
              Step 1 — Invited Landing Screen
            </p>
            <div className="text-white w-full" data-node-id="325:157" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[24px] mb-0">{`I designed a personalised welcome screen that tells co-merchants who invited them, why they're here, and the invoice details upfront. A four-step guide explains what comes next: account creation, KYC verification, business verification, and signing.`}</p>
              <p className="leading-[24px]">The goal was to remove confusion from the start, so co-merchants understand what to expect before proceeding.</p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium'] font-medium gap-[20px] items-start leading-[24px] relative shrink-0 text-[15px] w-full" data-node-id="325:158">
            <p className="font-['Instrument_Sans:Bold'] font-bold relative shrink-0 text-[#e1be3f] text-[15px] w-full" data-node-id="325:159" style={{ fontVariationSettings: '"wdth" 100' }}>
              Step 2 — Dashboard with Pending Signing Request
            </p>
            <p className="relative shrink-0 text-white w-full" data-node-id="325:160" style={{ fontVariationSettings: '"wdth" 100' }}>{`After creating their account the co-merchant lands on their dashboard. The KYC prompt sits at the top — a necessary gate before signing can proceed, surfaced immediately so there is no confusion about why the invoice is not yet signable. Below it, the pending invoice signing requests appear as cards — merchant name, industry, rating, maturity date, minimum deposit, and close date. The urgency chip showing "32 days due" in red creates appropriate time awareness without being aggressive. The co-merchant can see at a glance what is waiting for them and how long they have.`}</p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium'] font-medium gap-[20px] items-start relative shrink-0 text-[15px] w-full" data-node-id="325:161">
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-[24px] relative shrink-0 text-[#e1be3f] text-[15px] w-[248px]" data-node-id="325:162" style={{ fontVariationSettings: '"wdth" 100' }}>
              Step 3 — Review Before You Sign
            </p>
            <div className="text-white w-full" data-node-id="325:163" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[24px] mb-0">{`I designed the signing page to make the co-merchant's financial obligations clear before they commit. Key details, including the invoice amount, buyer, repayment date, and loan duration, appear upfront, followed by a yellow warning explaining their shared repayment responsibility.`}</p>
              <p className="leading-[24px]">{`Before signing, they must confirm that they've read and understood the terms. This follows the same approach across Forfaitify: making important information clear and ensuring consent is given, not assumed.`}</p>
            </div>
          </div>
          <div className="flex flex-col gap-[8.19px] items-start w-full" data-node-id="325:164">
            <div className="h-[467.467px] relative shrink-0 w-[348.999px]" data-node-id="325:165" data-name="Frame 1000004688 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10000046881} />
            </div>
            <div className="h-[225px] relative shrink-0 w-[346px]" data-node-id="325:166" data-name="MacBook Pro 14_ - 1 (1) 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro14112} />
            </div>
            <div className="h-[225px] relative shrink-0 w-[349px]" data-node-id="325:167" data-name="MacBook Pro 14_ - 75 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[97.48%] left-[0.12%] max-w-none top-[-0.02%] w-[99.88%]" src={imgMacBookPro14751} />
              </div>
            </div>
          </div>
        </div>

        {/* 13. 02 Merchant Loan Application — Pool Search to Funding */}
        <div className="flex flex-col gap-[20px] items-start w-full" data-node-id="325:202">
          <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[51px] relative shrink-0 text-[#34e619] text-[15px] w-[334px]" data-node-id="325:207" style={{ fontVariationSettings: '"wdth" 100' }}>
            02 Merchant Loan Application — Pool Search to Funding
          </p>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[12px] items-start leading-[51px] relative shrink-0 text-[15px] w-full" data-node-id="325:208">
            <p className="relative shrink-0 text-[#e1be3f] text-[15px] w-[233px]" data-node-id="325:209" style={{ fontVariationSettings: '"wdth" 100' }}>{`Screen 1 — Pool Detail & Apply`}</p>
            <p className="relative shrink-0 text-white w-full" data-node-id="325:210" style={{ fontVariationSettings: '"wdth" 100' }}>
              The merchant lands on the pool detail page showing everything relevant to their decision — pool name, countries served, loan range, available capital, APY, and a full description of what the pool finances. The loan tier table sits below, breaking down the available terms by duration, rate, and range. The merchant is not comparing dozens of pools here — they have already browsed and selected the one that fits their invoice. This page is confirmation, not discovery. The Apply for Loan button sits prominently once they are satisfied with the terms.
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[12px] items-start leading-[51px] relative shrink-0 text-[15px] w-full" data-node-id="325:211">
            <p className="relative shrink-0 text-[#e1be3f] text-[15px] w-[227px]" data-node-id="325:212" style={{ fontVariationSettings: '"wdth" 100' }}>
              Screen 2 — Select Loan Tier
            </p>
            <p className="relative shrink-0 text-white w-full" data-node-id="325:213" style={{ fontVariationSettings: '"wdth" 100' }}>
              After clicking Apply, a modal presents the available loan tiers as selectable cards — not a table, not a dropdown. Each tier card shows duration, interest rate, and loan range side by side. The card format is the correct choice here because the merchant is making a single selection between a small number of options, not comparing across many attributes. Seeing three cards simultaneously lets the merchant evaluate the trade-off — shorter duration, higher rate versus longer duration, lower rate — without having to read a table row by row. One tap to select, one tap to continue.
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[12px] items-start leading-[51px] relative shrink-0 text-[15px] w-full" data-node-id="325:214">
            <p className="relative shrink-0 text-[#e1be3f] text-[15px] whitespace-nowrap" data-node-id="325:215" style={{ fontVariationSettings: '"wdth" 100' }}>
              Screen 3 — Review Loan Application
            </p>
            <p className="relative shrink-0 text-white w-full" data-node-id="325:216" style={{ fontVariationSettings: '"wdth" 100' }}>
              Before the application is submitted, the merchant sees a full summary — invoice amount, selected tier, interest rate, repayment duration, and total repayment figure. The same two-confirmation logic as the investor flow applies here. The merchant entered their preferences across two screens. The review screen assembles those choices into one complete picture before anything is committed. A confirm checkbox sits above the Submit button — the merchant actively acknowledges the terms rather than clicking through passively.
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[12px] items-start relative shrink-0 text-[15px] w-full" data-node-id="325:217">
            <p className="leading-[24px] relative shrink-0 text-[#e1be3f] text-[15px] w-full" data-node-id="325:218" style={{ fontVariationSettings: '"wdth" 100' }}>
              Screen 4 — Loan Application Successful
            </p>
            <p className="leading-[51px] relative shrink-0 text-white w-full" data-node-id="325:219" style={{ fontVariationSettings: '"wdth" 100' }}>{`The success modal confirms the application has been submitted and is pending investor funding. A secondary checkbox — "Share this pool with friends" — appears at the bottom. This is a quiet but considered growth mechanic. A merchant who has just successfully applied is at their highest point of satisfaction with the platform. That is exactly the right moment to ask them to share it — not during onboarding, not in an email campaign, but at the peak of the experience when the product has just delivered on its promise.`}</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8.19px] items-start w-full" data-node-id="325:220">
            <div className="h-[378.549px] relative shrink-0 w-[350px]" data-node-id="325:221" data-name="MacBook Pro 14_ - 41 (5) 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro144151} />
            </div>
            <div className="h-[332.253px] relative shrink-0 w-[350px]" data-node-id="325:222" data-name="MacBook Pro 14_ - 73 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro14731} />
            </div>
            <div className="h-[332.253px] relative shrink-0 w-[350px]" data-node-id="325:223" data-name="MacBook Pro 14_ - 74 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro14741} />
            </div>
          </div>
        </div>

        {/* 14. Flow for getting invoice financed */}
        <div className="flex flex-col gap-[16px] items-start w-full" data-node-id="325:168">
          <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-node-id="325:169">
            <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[15px] whitespace-nowrap" data-node-id="325:170" style={{ fontVariationSettings: '"wdth" 100' }}>
              Flow for getting invoice financed
            </p>
          </div>
          <div className="flex flex-col gap-[32px] items-start w-full" data-node-id="325:172">
            <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[51px] relative shrink-0 text-[#34e619] text-[15px] w-[312px]" data-node-id="325:176" style={{ fontVariationSettings: '"wdth" 100' }}>
              01 Creating invoice
            </p>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[12px] items-start leading-[51px] relative shrink-0 text-[15px] w-full" data-node-id="325:177">
              <p className="relative shrink-0 text-[#e1be3f] text-[15px] w-[142px] whitespace-pre-wrap" data-node-id="325:178" style={{ fontVariationSettings: '"wdth" 100' }}>{`Fill basic  details`}</p>
              <p className="relative shrink-0 text-white w-full" data-node-id="325:179" style={{ fontVariationSettings: '"wdth" 100' }}>
                The first screen asks for foundational details — merchant name, invoice number, billing address, total amount, due date, and co-merchant. One form, one job: establish the invoice before anything else. Nothing about pools, nothing about funding terms. A merchant who handles trade documentation regularly completes this in under two minutes
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[12px] items-start leading-[51px] relative shrink-0 text-[15px] w-full" data-node-id="325:180">
              <p className="relative shrink-0 text-[#e1be3f] text-[15px] w-[274px]" data-node-id="325:181" style={{ fontVariationSettings: '"wdth" 100' }}>
                Upload Supporting Documents
              </p>
              <p className="relative shrink-0 text-white w-full" data-node-id="325:182" style={{ fontVariationSettings: '"wdth" 100' }}>
                Once the invoice is created, the merchant uploads supporting documentation. The upload screen is deliberately minimal — a clear drop zone, brief instruction, and a confirm terms checkbox before proceeding. The merchant acknowledges what they are submitting before the platform processes it. Consent at the moment of submission, not buried in onboarding terms.
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[12px] items-start leading-[51px] relative shrink-0 text-[15px] w-full" data-node-id="325:183">
              <p className="relative shrink-0 text-[#e1be3f] text-[15px] w-[370px]" data-node-id="325:184" style={{ fontVariationSettings: '"wdth" 100' }}>
                Share Invoice for Co-Merchant Signatures
              </p>
              <p className="relative shrink-0 text-white w-full" data-node-id="325:185" style={{ fontVariationSettings: '"wdth" 100' }}>{`Once the application is submitted, a success modal confirms the invoice has been created and immediately presents the share link as the primary action. The invoice cannot be funded until all co-merchants have signed. The share link sits as the first action at the moment the merchant is most motivated to move the deal forward — no navigating to a dashboard, no finding a share option in a menu. "I'll do it later" sits below as a secondary option for merchants who need to contact their co-merchant through a specific channel first.`}</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Bold'] font-bold gap-[12px] items-start leading-[51px] relative shrink-0 text-[15px] w-full" data-node-id="325:186">
              <p className="relative shrink-0 text-[#e1be3f] text-[15px] w-[385px]" data-node-id="325:187" style={{ fontVariationSettings: '"wdth" 100' }}>
                Signatures Collected → Approval → Funding
              </p>
              <p className="relative shrink-0 text-white w-full" data-node-id="325:188" style={{ fontVariationSettings: '"wdth" 100' }}>{`Once co-merchants receive the link and sign, their signatures appear on the invoice detail page — visible to investors evaluating the deal. `}</p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start w-full" data-node-id="325:189">
              <div className="content-stretch flex flex-col gap-[12px] items-start w-full" data-node-id="325:191">
                <div className="h-[226.59px] relative shrink-0 w-[349px]" data-node-id="325:192" data-name="MacBook Pro 14_ - 86 1">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMacBookPro14861} />
                </div>
                <div className="h-[226.59px] relative shrink-0 w-[349px]" data-node-id="325:193" data-name="MacBook Pro 14_ - 87 1">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMacBookPro14871} />
                </div>
                <div className="h-[226.59px] relative shrink-0 w-[349px]" data-node-id="325:194" data-name="MacBook Pro 14_ - 88 1">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMacBookPro14881} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start w-full" data-node-id="325:195">
                <div className="h-[220.456px] relative shrink-0 w-[351px]" data-node-id="325:196" data-name="MacBook Pro 14_ - 72 1">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMacBookPro14721} />
                </div>
                <div className="h-[228.236px] relative shrink-0 w-[351px]" data-node-id="325:197" data-name="MacBook Pro 14_ - 47 1">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMacBookPro14471} />
                </div>
                <div className="h-[229.101px] relative shrink-0 w-[350.135px]" data-node-id="325:198" data-name="MacBook Pro 14_ - 70 1">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMacBookPro14701} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start w-full" data-node-id="325:199">
                <div className="h-[219.984px] relative shrink-0 w-[349.822px]" data-node-id="325:200" data-name="MacBook Pro 14_ - 84 1">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMacBookPro14841} />
                </div>
                <div className="h-[220.769px] relative shrink-0 w-[350px]" data-node-id="325:201" data-name="MacBook Pro 14_ - 75 (1) 1">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMacBookPro147511} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
