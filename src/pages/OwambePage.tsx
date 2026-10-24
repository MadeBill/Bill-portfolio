import { useState } from "react";
import { Link } from "react-router";
import Navbar from "../Navbar";
import CaseStudySidebar from "../CaseStudySidebar";
import ProjectDetails from "../ProjectDetails";
import ProjectTabs, { type ProjectTab } from "../ProjectTabs";
import OwambeFeed from "../OwambeFeed";

const imgMockup = "/assets/21cc6.png";
const imgArrow = "/assets/b7aab.svg";
const imgCard1 = "/assets/f5b30.png";
const imgCard2 = "/assets/70b95.png";
const imgCard3 = "/assets/ebb1c.png";
const OWAMBE_SECTIONS = [
  { id: "owambe-overview", label: "Overview" },
  { id: "owambe-research", label: "Research" },
  { id: "owambe-design-direction", label: "Design direction" },
  { id: "owambe-design-decisions", label: "Design decisions" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full items-center justify-center bg-white px-[10px] py-[4px] sm:w-fit">
      <p
        className="case-study-section-label font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] text-[#060606] text-[15px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {children}
      </p>
    </div>
  );
}

function ResearchCard({
  bg,
  img,
  title,
  body,
}: {
  bg: string;
  img: string;
  title: string;
  body: string;
}) {
  return (
    <div className="case-study-card flex w-full flex-col overflow-hidden rounded-none sm:flex-row sm:items-stretch" style={{ backgroundColor: bg, minHeight: 272 }}>
      <div className="relative h-[240px] w-full shrink-0 sm:h-auto sm:w-[301px]" style={{ minHeight: 272 }}>
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          src={img}
        />
      </div>
      <div className="flex flex-col gap-[19px] px-[30px] py-[30px] flex-1">
        <p
          className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[34px] text-[24px] sm:text-[28px] text-white"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {title}
        </p>
        <p
          className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-white"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

export default function OwambePage() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("casestudy");

  return (
    <div className="case-study-page bg-black min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col gap-[40px] pb-[80px]">
        {/* ── Section 1: Hero ── */}
        <div className="px-5 sm:px-8 lg:px-[120px] pt-8 sm:pt-12 flex flex-col gap-[12px]">
          {/* breadcrumb */}
          <Link
            className="flex w-fit max-w-full items-center gap-[10px] rounded-[6px] bg-white px-3 py-[4px] no-underline sm:px-[25px]"
            to="/"
          >
            <div className="h-[13.288px] shrink-0 w-[17.64px]">
              <img alt="" src={imgArrow} width="17.6396" height="13.2879" />
            </div>
            <p
              className="min-w-0 font-['Instrument_Sans:Medium',sans-serif] font-medium text-black text-[15px] sm:text-[18px] leading-[32px] whitespace-normal sm:whitespace-nowrap"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <span>Case Studies</span>
              <span>/Owambe</span>
            </p>
          </Link>

          {/* headline */}
          <p
            className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] text-[32px] sm:text-[48px] lg:text-[64px] text-white max-w-[1226px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            OWAMBE - Designed for the gap between the outfit you imagine and the one that actually arrives
          </p>
        </div>

        <ProjectDetails company="Owambe" timeline="3 weeks" industry="Fashion Tech" />

        {/* mockup image */}
        <div className="px-5 sm:px-8 lg:px-[120px]">
          <div className="mx-auto max-w-[1160px]">
          <div className="relative w-full rounded-[16px] overflow-hidden" style={{ aspectRatio: "1273/953" }}>
            <img
              alt="Owambe platform mockup"
              className="absolute inset-0 w-full h-full object-cover"
              src={imgMockup}
            />
          </div>
          </div>
        </div>

        {/* ── Section 2: Overview + Research ── */}
        <div className="px-5 sm:px-8 lg:px-[120px] flex flex-col gap-[20px] sm:gap-[40px]">

          {/* Tab switcher */}
          <div className="w-fit">
            <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {activeTab === "feed" ? (
            <OwambeFeed />
          ) : (
            <div className="lg:grid lg:grid-cols-[236px_minmax(0,1fr)] lg:items-start lg:gap-8">
              <CaseStudySidebar sections={OWAMBE_SECTIONS} />
            <div className="flex min-w-0 flex-col gap-[40px] sm:gap-[80px]">
          <section className="flex scroll-mt-24 flex-col gap-[16px] sm:gap-[20px]" id="owambe-overview">
            <SectionLabel>Overview</SectionLabel>
            <div className="flex flex-col gap-[16px] text-white">
              <p
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[20px] sm:text-[22px] text-white"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                The outfit in your head never matches the one that arrives
              </p>
              <div
                className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-[#ffffff99] flex flex-col gap-[16px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                <p>Owambe helps users avoid the uncertainty of traditional tailoring by letting them browse fabrics and styles across categories, preview outfits virtually in the Dress Room, and order custom-made pieces with greater confidence.</p>
              </div>
            </div>
          </section>

          {/* Research & Discovery */}
          <section className="flex scroll-mt-24 flex-col gap-[16px] sm:gap-[20px]" id="owambe-research">
            <SectionLabel>Research &amp; Discovery</SectionLabel>
            <div className="flex flex-col gap-[16px] text-white">
              <p
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[20px] sm:text-[22px] text-white"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                I spoke to the people who actually buy and also tailors
              </p>
              <p
                className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-[#ffffff99]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Before designing a single screen I conducted two distinct research tracks — users who buy occasion wear, and tailors who make it
              </p>
            </div>

          {/* Research cards */}
          <div className="flex flex-col gap-0">
            <ResearchCard
              bg="#d629cc"
              img={imgCard1}
              title="The gap between imagination and delivery"
              body={`The most consistent frustration users described was receiving an outfit that didn't look like what they had in mind. They had a mental image — the finished thing didn't match it. This single finding became the product's core promise.`}
            />
            <ResearchCard
              bg="#3ad629"
              img={imgCard2}
              title="Expensive-looking, affordable price"
              body="Users wanted to look like they spent more than they did. Not cheap fabric, not fast fashion — quality occasion wear at a price that felt accessible. The platform had to communicate premium without being exclusive."
            />
            <ResearchCard
              bg="#d62929"
              img={imgCard3}
              title="Tailors: style first or fabric first?"
              body="I spoke to tailors to understand how the real-world process actually begins. The answer was neither fixed — some customers arrive with fabric and need a style, others arrive with a style and need fabric. No single entry point fit everyone."
            />
          </div>

          {/* Closing paragraph */}
          <p
            className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-[#ffffff99]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Speaking with tailors revealed that users approach outfit selection differently: some start with fabric, others with a style. This insight shaped a flexible flow that supports both without forcing users into a fixed sequence.
          </p>
          </section>

          {/* ── Section 3: Design Direction ── */}
          <section className="flex scroll-mt-24 flex-col gap-[16px] sm:gap-[20px]" id="owambe-design-direction">
            <SectionLabel>Design direction</SectionLabel>

            {/* 2×2 grid — pastel mint + pastel pink, with gap matching Figma */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[26px] gap-y-[36px]">
              {/* Row 1 left — mint: Near-black & gold */}
              <div className="bg-[#b0efa9] flex flex-col gap-[28px] p-[28px]">
                <p
                  className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.3] sm:leading-[1.45] text-[24px] sm:text-[32px] text-black"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {`Why Near-black & gold?`}
                </p>
                <p
                  className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-black"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {`The most consistent frustration users described was receiving an outfit that didn't look like what they had in mind. They had a mental image — the finished thing didn't match it. This single finding became the product's core promise.`}
                </p>
                {/* Colour swatches */}
                <div className="flex gap-[16px] sm:gap-[24px] mt-auto pt-[24px]">
                  <div className="bg-[#1a1a1a] w-[130px] sm:w-[201px] h-[130px] sm:h-[194px]" />
                  <div className="bg-[#c9a24d] w-[130px] sm:w-[201px] h-[130px] sm:h-[194px]" />
                </div>
              </div>

              {/* Row 1 right — soft pink: Playfair */}
              <div className="bg-[#efa9eb] flex flex-col gap-[28px] p-[28px]">
                <p
                  className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.3] sm:leading-[1.45] text-[24px] sm:text-[32px] text-black"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {`Playfair Display — display & headings`}
                </p>
                <p
                  className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-black"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  I chose Playfair Display to give Owambe an editorial, high-fashion feel inspired by luxury fashion brands. Its elegant serif style reinforces the platform&apos;s focus on personal style, occasion wear, and refined taste.
                </p>
                {/* Aa / 123 specimen */}
                <div className="flex items-end justify-between mt-auto pt-[24px]">
                  <p
                    className="font-['Playfair:Bold',serif] font-bold leading-[1.2] sm:leading-[1.45] text-[64px] sm:text-[128px] text-black"
                    style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
                  >
                    Aa
                  </p>
                  <p
                    className="font-['Playfair:Bold',serif] font-bold leading-[1.2] sm:leading-[1.45] text-[64px] sm:text-[128px] text-black"
                    style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
                  >
                    123
                  </p>
                </div>
              </div>

              {/* Row 2 left — mint: Dress Room */}
              <div className="bg-[#b0efa9] flex flex-col gap-[28px] p-[28px]">
                <p
                  className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.3] sm:leading-[1.45] text-[24px] sm:text-[32px] text-black"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  The Dress Room — dark canvas
                </p>
                <p
                  className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-black"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  I chose a near-black background for the Dress Room to keep fabrics and styles as the visual focus. Like a photography studio, it creates contrast that makes each fabric and style stand out without distractions.
                </p>
              </div>

              {/* Row 2 right — soft pink: Category names */}
              <div className="bg-[#efa9eb] flex flex-col gap-[28px] p-[28px]">
                <p
                  className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.3] sm:leading-[1.45] text-[24px] sm:text-[32px] text-black"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Category names as navigation
                </p>
                <p
                  className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-black"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {"I used familiar categories like Senator, Kaftan, Agbada, and Iro & Buba as primary navigation labels, helping Nigerian users find styles using terms they already know."}
                </p>
              </div>
            </div>
          </section>

        {/* ── Section 4: Design Decisions ── */}
        <section className="flex scroll-mt-24 flex-col gap-[16px] sm:gap-[20px]" id="owambe-design-decisions">

          {/* Label */}
          <div className="flex w-full items-center justify-center bg-white px-[10px] py-[4px] sm:w-fit">
            <p
              className="case-study-section-label font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] text-[#060606] text-[15px] whitespace-nowrap"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Design decisions
            </p>
          </div>

          {/* Decision 1 */}
          <div className="flex flex-col gap-[28px]">
            <div className="text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[20px] sm:text-[22px] mb-[16px] text-white">
                Decision 1 — Dynamic Flow: Fabric First or Style First
              </p>
              <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-[#ffffff99]">
                Users can create a Dress Room when selecting a fabric or style, add their selection to an existing room, or browse and add items directly from within a room. This flexible flow lets them build their outfit starting from either fabric or style.
              </p>
            </div>

            {/* Flow 1 — magenta */}
            <div className="bg-[#d629cc] px-[24px] sm:px-[47px] py-[32px] sm:py-[57px] flex flex-col gap-[14px] overflow-hidden">
              <p
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[16px] sm:text-[18px] text-white leading-normal sm:leading-[51px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Flow one
              </p>
              <div className="flex flex-wrap items-center gap-y-4 gap-x-0">
                {[
                  "Select fabric or style",
                  "Goes to Dress Room",
                  "Select the other element",
                  "Try on",
                ].map((step, i) => (
                  <div key={step} className="flex items-center">
                    <div className="bg-white px-[10px] py-[14px] flex items-center justify-center">
                      <p
                        className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#d629cc] text-[15px] leading-[51px] whitespace-nowrap"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        {step}
                      </p>
                    </div>
                    {i < 3 && (
                      <div className="w-[101px] h-[15px] relative flex-shrink-0">
                        <img alt="" className="absolute inset-0 w-full h-full object-contain" src="/assets/a0f97.svg" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Flow 2 — green */}
            <div className="bg-[#3ad629] px-[24px] sm:px-[47px] py-[20px] flex flex-col gap-[14px] overflow-hidden">
              <p
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[16px] sm:text-[18px] text-white leading-normal sm:leading-[51px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Flow two
              </p>
              {/* Row 1: four steps */}
              <div className="flex flex-wrap items-center gap-y-4 gap-x-0">
                {[
                  "Select fabric or style",
                  "Create a dress Room",
                  "Explore for the other or for same",
                  "Add to room",
                ].map((step, i) => (
                  <div key={step} className="flex items-center">
                    <div className="bg-white px-[10px] py-[14px] flex items-center justify-center">
                      <p
                        className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#d629cc] text-[15px] leading-[51px] whitespace-nowrap"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        {step}
                      </p>
                    </div>
                    {i < 3 && (
                      <div className="w-[101px] h-[15px] relative flex-shrink-0">
                        <img alt="" className="absolute inset-0 w-full h-full object-contain" src="/assets/a0f97.svg" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Row 2: Try On branch */}
              <div className="flex items-center pl-[125px]">
                <div className="w-[101px] h-[15px] relative flex-shrink-0">
                  <img alt="" className="absolute inset-0 w-full h-full object-contain" src="/assets/a0f97.svg" />
                </div>
                <div className="bg-white px-[10px] py-[14px] flex items-center justify-center">
                  <p
                    className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#d629cc] text-[15px] leading-[51px] whitespace-nowrap"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    Try On
                  </p>
                </div>
              </div>
            </div>

            {/* Path A / B paragraph */}
            <p
              className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-[#ffffff99]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              I designed two paths based on tailor research: a direct route for users who know what they want, and an exploratory route for those who want to browse and save options before entering the Dress Room. Both support different shopping behaviours without forcing a single flow.
            </p>
          </div>

          {/* Decision 2 */}
          <div className="flex flex-col text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[20px] sm:text-[22px] mb-[16px] text-white">
              Decision 2 — The Dress Room
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-[#ffffff99]">
              The Dress Room lets users preview outfits on a body template, adjust details like sleeve length and neckline, and see prices update in real time. Saved fabrics, styles, and named rooms let them revisit combinations without starting over, addressing the core challenge of visualising an outfit before ordering.
            </p>
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[18px] text-[#fcce00] mt-[32px] mb-[16px]">
              The background — not too dark, not too bright
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-[#ffffff99]">
              I chose a mid-tone grey background to make sure both dark and light fabrics remain visible. Dark backgrounds hide deeper colors, while bright ones wash out lighter fabrics. The goal was to keep the focus on the outfit, not the background.
            </p>
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[18px] text-[#fcce00] mt-[32px] mb-[16px]">
              Making Measurements Easy to Update
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-[#ffffff99]">
              {"I made measurements optional during sign-up and accessible through Settings and the Dress Room. This lets users explore styles first and update their measurements when they're ready to try on an outfit."}
            </p>
          </div>

          {/* Dress Room mockup */}
          <div className="relative w-full rounded-[16px] overflow-hidden" style={{ aspectRatio: "1267/1052" }}>
            <img
              alt="Dress Room interface"
              className="absolute inset-0 w-full h-full object-cover"
              src="/assets/7c0f8.png"
            />
          </div>

          {/* Decision 3 */}
          <div className="flex flex-col text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[20px] sm:text-[22px] mb-[16px] text-white">
              Decision 3 — Measurements: Required but Skippable
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-[#ffffff99] mb-[12px]">
              {"I made measurements optional during sign-up to avoid losing users before they experience the platform's value. They can skip the step and explore outfits first, then add or update their measurements through Settings or directly in the Dress Room."}
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] text-[#ffffff99]">
              {"This way, users aren't forced to commit too early, and they're more likely to provide accurate measurements when they find an outfit they actually want to try on."}
            </p>
          </div>

          {/* Measurement modal mockup */}
          <div className="relative w-full rounded-[16px] overflow-hidden" style={{ aspectRatio: "1274/995" }}>
            <img
              alt="Measurement modal"
              className="absolute inset-0 w-full h-full object-cover"
              src="/assets/15b55.png"
            />
          </div>

        </section>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
