import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import svgPaths from "@/imports/MacBookPro1442-5/svg-h9j9r3qsbv";
import imgMacBookPro141721 from "@/imports/MacBookPro1442-5/73f23721ac648e6159f73ce7ff1f54e8d58f54fc.png";
import ProjectTabs, { type ProjectTab } from "../ProjectTabs";
import QuanvaulteFeed from "../QuanvaulteFeed";
import OverviewSection from "@/imports/MacBookPro1443-2/index";
import ResearchSection from "@/imports/MacBookPro1443-3/index";
import DesignSystemSection from "@/imports/MacBookPro1444/index";
import IllustrationSection from "@/imports/MacBookPro1444-1/index";
import IconSection from "@/imports/MacBookPro1444-2/index";
import FeaturesSection from "@/imports/MacBookPro1444-3/index";
import QuanvaulteMobile from "@/imports/QuanvaulteMobile/index";
import Navbar from "../Navbar";
import CaseStudySidebar from "../CaseStudySidebar";

const DESIGN_WIDTH = 1440;
const QUANVAULTE_SECTIONS = [
  { id: "quanvaulte-overview", label: "Overview" },
  { id: "quanvaulte-research", label: "Research" },
  { id: "quanvaulte-design-system", label: "Design system" },
  { id: "quanvaulte-illustrations", label: "Illustrations" },
  { id: "quanvaulte-iconography", label: "Iconography" },
  { id: "quanvaulte-features", label: "Features" },
];

function useMobileLayout() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 639px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function ScaledSection({ children, height, gap = 120 }: { children: React.ReactNode; height: number; gap?: number }) {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);
  const [contentHeight, setContentHeight] = useState(height);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const update = () => {
      setIsMobile(window.innerWidth < 640);
      setScale(Math.min(1, element.clientWidth / DESIGN_WIDTH));
    };
    const observer = new ResizeObserver(update);
    update();
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const update = () => {
      if (content.scrollHeight > 0) {
        setContentHeight(content.scrollHeight);
      }
    };
    const observer = new ResizeObserver(update);
    update();
    observer.observe(content);
    return () => observer.disconnect();
  }, [height]);

  if (isMobile) {
    return <div className="mobile-case-flow">{children}</div>;
  }

  const effectiveHeight = contentHeight || height;

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden" style={{ height: (effectiveHeight + gap) * scale }}>
      <div ref={contentRef} style={{ width: DESIGN_WIDTH, minHeight: height, zoom: scale }}>
        {children}
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="flex w-fit max-w-full items-center gap-[10px] rounded-[6px] bg-white px-3 py-[4px] sm:px-[25px]">
      <div className="h-[13.288px] relative shrink-0 w-[17.64px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.2879" preserveAspectRatio="none" viewBox="0 0 17.6396 13.2879" width="17.6396">
          <path clipRule="evenodd" d={svgPaths.p10e170f0} fill="#10161F" fillRule="evenodd" />
        </svg>
      </div>
      <p
        className="min-w-0 font-['Instrument_Sans:Medium',sans-serif] font-medium text-black text-[18px] leading-[32px] whitespace-normal sm:whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <Link to="/" className="no-underline text-black hover:text-black">Case Studies</Link>
        <span className="text-black">/Quanvaulte</span>
      </p>
    </div>
  );
}

export default function QuanvaultePage() {
  const isMobile = useMobileLayout();
  const [activeTab, setActiveTab] = useState<ProjectTab>("casestudy");

  return (
    <div className="case-study-page bg-black min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col gap-[40px]">
        {/* hero section */}
        <div className="px-5 sm:px-8 lg:px-[120px] pt-8 sm:pt-12 flex flex-col gap-[12px]">
          <Breadcrumb />
          <h1
            className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-white text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.45] max-w-[1231px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {`Quanvaulte - Designed platform for `}
            <span className="text-[#d629cc]">kids </span>
            <span>to learn</span>
            <span className="text-[#fcce00]"> tech skills the fun way</span>
            <span>{` and be monitored by`}</span>
            <span className="text-[#15fc00]"> parents or schools</span>
          </h1>
        </div>

        {/* project meta: Company / Timeline / My Role / Industry */}
        <div className="border-t border-b border-white/20 w-full py-10 sm:py-[50px]">
          <div className="px-5 sm:px-8 lg:px-[120px] grid grid-cols-2 sm:flex sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-0 text-white">
            {[
              { label: "Company", value: "Quanvaulte" },
              { label: "Timeline", value: "2 months" },
              { label: "My Role", value: "Founding designer" },
              { label: "Industry", value: "Edtech" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-[8px]">
                <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold text-[15px] sm:text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  {label}
                </p>
                <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[15px] sm:text-[32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* mockup image */}
        <div className="px-5 sm:px-8 lg:px-[120px]">
          <div className="mx-auto max-w-[1160px]">
          <div className="relative w-full rounded-[16px] overflow-hidden" style={{ aspectRatio: "1223/915.757" }}>
            <img
              alt="Quanvaulte platform mockup"
              className="absolute inset-0 w-full h-full object-cover"
              src={imgMacBookPro141721}
            />
          </div>
          </div>
        </div>

        {activeTab === "feed" ? (
          <>
            <div className="px-5 sm:px-8 lg:px-[120px]">
              <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
            <QuanvaulteFeed />
          </>
        ) : isMobile ? (
          <div className="relative w-full">
            <QuanvaulteMobile activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        ) : (
        <div className="desktop-case-study-content contents">
          {/* feed / case study tab bar */}
          <div className="px-5 sm:px-8 lg:px-[120px]">
            <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          <div className="relative px-5 sm:px-8 lg:grid lg:grid-cols-[236px_minmax(0,1fr)] lg:items-start lg:gap-6 lg:pl-[120px] lg:pr-5">
            <CaseStudySidebar sections={QUANVAULTE_SECTIONS} />
            <div className="flex min-w-0 flex-col">
              {/* overview + problem + stat callout */}
              <section className="scroll-mt-24" id="quanvaulte-overview">
                <ScaledSection height={570}>
                  <OverviewSection />
                </ScaledSection>
              </section>

              {/* research and discovery */}
              <section className="scroll-mt-24" id="quanvaulte-research">
                <ScaledSection height={648}>
                  <ResearchSection />
                </ScaledSection>
              </section>

              {/* design system decision */}
              <section className="scroll-mt-24" id="quanvaulte-design-system">
                <ScaledSection height={677}>
                  <DesignSystemSection />
                </ScaledSection>
              </section>

              {/* choice of illustration over images */}
              <section className="scroll-mt-24" id="quanvaulte-illustrations">
                <ScaledSection height={460}>
                  <IllustrationSection />
                </ScaledSection>
              </section>

              {/* choice of icons */}
              <section className="scroll-mt-24" id="quanvaulte-iconography">
                <ScaledSection height={420}>
                  <IconSection />
                </ScaledSection>
              </section>

              {/* features decision + button choice + feature cards */}
              <section className="scroll-mt-24" id="quanvaulte-features">
                <ScaledSection height={1608}>
                  <FeaturesSection />
                </ScaledSection>
              </section>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
