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
        className="case-study-section-label font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] text-[#060606] text-[15px] sm:text-[20px] whitespace-nowrap"
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
    <div className="flex w-full flex-col overflow-hidden rounded-none sm:flex-row sm:items-stretch" style={{ backgroundColor: bg, minHeight: 272 }}>
      <div className="relative h-[240px] w-full shrink-0 sm:h-auto sm:w-[301px]" style={{ minHeight: 272 }}>
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          src={img}
        />
      </div>
      <div className="flex flex-col gap-[19px] px-[30px] py-[30px] flex-1">
        <p
          className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38.4px] text-[32px] text-white"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {title}
        </p>
        <p
          className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px] text-white"
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
              className="min-w-0 font-['Instrument_Sans:Medium',sans-serif] font-medium text-[rgba(16,22,31,0.8)] text-[15px] sm:text-[18px] leading-[32px] whitespace-normal sm:whitespace-nowrap"
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
            <div className="flex min-w-0 flex-col gap-[40px]">
          <section className="flex scroll-mt-24 flex-col gap-[16px] sm:gap-[20px]" id="owambe-overview">
            <SectionLabel>Overview</SectionLabel>
            <div className="flex flex-col gap-[18px] text-white">
              <p
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[51px] text-[32px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                The outfit in your head never matches the one that arrives
              </p>
              <div
                className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px] flex flex-col gap-[16px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                <p>Buying outfits for owambe events can be a frustrating process. You choose a fabric, explain your preferred style to a tailor, and wait weeks, only to end up with something different from what you imagined.</p>
                <p>Owambe aims to solve this by letting users browse fabrics and styles across six traditional categories, preview their choices virtually in the Dress Room, and order custom-made outfits delivered to them.</p>
              </div>
            </div>
          </section>

          {/* Research & Discovery */}
          <section className="flex scroll-mt-24 flex-col gap-[16px] sm:gap-[20px]" id="owambe-research">
            <SectionLabel>Research &amp; Discovery</SectionLabel>
            <div className="flex flex-col gap-[18px] text-white">
              <p
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[51px] text-[32px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                I spoke to the people who actually buy and also tailors
              </p>
              <p
                className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px]"
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
            className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px] text-white"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {`Speaking to tailors was the decision that shaped the most consequential design choice on the platform. If I had only spoken to users I would have assumed a fixed flow — browse fabrics, then select a style, then try on. The tailors showed me that real people don't start from the same place. Some have the fabric. Some have the look. The design had to serve both without penalising either.`}
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
                  className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px] text-black"
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
                  className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px] text-black"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Playfair Display carries the editorial weight of a fashion brand — the kind of typeface you see in Vogue Nigeria, in high-end boutique identities, in anything that wants to communicate considered taste. For an occasion wear platform where the product is inherently about how you present yourself, the typeface needed to match that aspiration.
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
                  className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px] text-black"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  The Dress Room uses a near-black background deliberately. Fabrics and styles need to be the visual subject — not the interface. A dark background makes every fabric swatch and style thumbnail pop without any additional treatment. It also creates a studio photography feel — the kind of controlled environment where what you are evaluating is seen at its best.
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
                  className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px] text-black"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {`Senator. Kaftan. Agbada. Iro & Buba. These are not product tags — they are cultural identifiers that every Nigerian occasion wear buyer already knows. Using them as the primary navigation labels means the platform speaks the language of its users from the first screen.`}
                </p>
              </div>
            </div>
          </section>

        {/* ── Section 4: Design Decisions ── */}
        <section className="flex scroll-mt-24 flex-col gap-[16px] sm:gap-[20px]" id="owambe-design-decisions">

          {/* Label */}
          <div className="flex w-full items-center justify-center bg-white px-[10px] py-[4px] sm:w-fit">
            <p
              className="case-study-section-label font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] text-[#060606] text-[15px] sm:text-[20px] whitespace-nowrap"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Design decisions
            </p>
          </div>

          {/* Decision 1 */}
          <div className="flex flex-col gap-[28px]">
            <div className="text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.3] sm:leading-[51px] text-[24px] sm:text-[32px] mb-2 sm:mb-0">
                Decision 1 — Dynamic Flow: Fabric First or Style First
              </p>
              <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px]">
                The single most important architectural decision on Owambe was making the entry point dynamic. A user who arrives knowing the fabric they want takes a different path from a user who arrives knowing the style they want — and both paths had to be equally valid, equally smooth, and arrive at the same destination: the Dress Room
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
              className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px] text-white"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              {`Path A is for the decisive user — they know what they want, they want to get there fast. Path B is for the browser — they want to explore, save their options, and come back to the Dress Room when they have found both elements. The platform does not impose one mental model on users who have another. The decision came directly from the tailors' research: in the real world, people start from wherever they are. The design reflects that.`}
            </p>
          </div>

          {/* Decision 2 */}
          <div className="flex flex-col gap-[28px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.3] sm:leading-[51px] text-[24px] sm:text-[32px]">
              Decision 2 — The Dress Room
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px]">
              The Dress Room is the central interface of the platform and the direct design response to the core research finding. Users described not being able to visualise the finished outfit before committing. The Dress Room gives them that visualisation — a body template wearing the selected style in the selected fabric, with style preferences like sleeve length and neckline adjustable in real time, and a live price calculated as they build the outfit.
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px]">
              Previous styles and previous fabrics are saved and visible in the Dress Room panel, so the user can revisit combinations they considered earlier without starting over. Save and Rooms sit in the top right — a Dress Room session can be paused, named, and returned to at any point.
            </p>
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] text-[20px] text-[#fcce00] sm:text-[28px] sm:leading-[51px]">
              The background — not too dark, not too bright
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px]">
              I chose a mid-tone grey background to make sure both dark and light fabrics remain visible. Dark backgrounds hide deeper colors, while bright ones wash out lighter fabrics. The goal was to keep the focus on the outfit, not the background.
            </p>
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] text-[20px] text-[#fcce00] sm:text-[28px] sm:leading-[51px]">
              Making Measurements Easy to Update
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px]">
              Users can add their measurements during sign-up, but the step is optional. I also made measurements accessible through Settings and added an Edit Measurement button in the Dress Room, so users can update their details without leaving the try-on experience.
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px]">
              This gives users the freedom to explore first and provide their measurements when they're ready to try on an outfit.
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
          <div className="flex flex-col gap-[28px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] sm:leading-[51px] text-[24px] sm:text-[32px]">
              Decision 3 — Measurements: Required but Skippable
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px]">
              {"I made measurements optional during sign-up to avoid losing users before they experience the platform's value. They can skip the step and explore outfits first, then add or update their measurements through Settings or directly in the Dress Room."}
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[15px] sm:text-[18px]">
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
