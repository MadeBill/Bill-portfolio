import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import svgPaths from "@/imports/MacBookPro1448/svg-uks37l471o";
import imgMockup from "@/imports/MacBookPro1448/a3bd46f0ae58337537ef6aa50fc2f366bc02bea3.png";
import OverviewSection from "@/imports/MacBookPro1449/index";
import DesignSystemSection from "@/imports/MacBookPro1450/index";
import KeyFlowSection from "@/imports/MacBookPro1451/index";
import InvestorDecisionsSection from "@/imports/MacBookPro1467/index";
import InvoiceFlowSection from "@/imports/MacBookPro1468/index";
import MerchantLoanSection from "@/imports/MacBookPro1469/index";
import CoMerchantSigningSection from "@/imports/MacBookPro1470/index";
import ForfalifyMobile from "@/imports/ForfalifyMobile/index";
import Navbar from "../Navbar";
import CaseStudySidebar from "../CaseStudySidebar";
import ForfalifyFeed from "../ForfalifyFeed";
import ProjectTabs, { type ProjectTab } from "../ProjectTabs";

const DESIGN_WIDTH = 1440;
const FORFALIFY_SECTIONS = [
  { id: "forfalify-overview", label: "Overview" },
  { id: "forfalify-design-system", label: "Design direction" },
  { id: "forfalify-key-flows", label: "Key flows" },
  { id: "forfalify-investor", label: "Investor experience" },
  { id: "forfalify-invoice", label: "Invoice financing" },
  { id: "forfalify-loan", label: "Loan application" },
  { id: "forfalify-signing", label: "Co-merchant signing" },
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


function ScaledSection({ children, height }: { children: React.ReactNode; height: number }) {
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
    <div ref={containerRef} className="relative w-full overflow-hidden" style={{ height: effectiveHeight * scale }}>
      <div ref={contentRef} style={{ width: DESIGN_WIDTH, zoom: scale }}>
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
        className="min-w-0 font-['Instrument_Sans:Medium',sans-serif] font-medium text-[rgba(16,22,31,0.8)] text-[18px] leading-[32px] whitespace-normal sm:whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <Link to="/" className="no-underline text-[rgba(16,22,31,0.8)] hover:text-black">Case Studies</Link>
        <span>/Forfalify</span>
      </p>
    </div>
  );
}

export default function ForfalifyPage() {
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
            className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-white text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.45] max-w-[1226px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Designing trust into high-stakes trade finance for two completely different users
          </h1>
        </div>

        {/* project meta */}
        <div className="border-t border-b border-white/20 w-full py-10 sm:py-[50px]">
          <div className="px-5 sm:px-8 lg:px-[120px] grid grid-cols-2 sm:flex sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-0 text-white">
            {[
              { label: "Company", value: "Forfality" },
              { label: "Timeline", value: "1 month" },
              { label: "My Role", value: "Founding designer" },
              { label: "Industry", value: "Fintech" },
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
          <div className="relative w-full rounded-[16px] overflow-hidden" style={{ aspectRatio: "1273/820.177" }}>
            <img
              alt="Forfalify platform mockup"
              className="absolute inset-0 w-full h-full object-cover"
              src={imgMockup}
            />
          </div>
          </div>
        </div>

        {activeTab === "feed" ? (
          <>
            <div className="px-5 sm:px-8 lg:px-[120px]">
              <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
            <ForfalifyFeed />
          </>
        ) : isMobile ? (
          <div className="relative w-full overflow-hidden">
            <ForfalifyMobile activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        ) : (
        <div className="desktop-case-study-content contents">
          <div className="px-5 sm:px-8 lg:px-[120px]">
            <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          <div className="relative px-5 sm:px-8 lg:grid lg:grid-cols-[236px_minmax(0,1fr)] lg:items-start lg:gap-6 lg:pl-[120px] lg:pr-5">
            <CaseStudySidebar sections={FORFALIFY_SECTIONS} />
            <div className="flex min-w-0 flex-col gap-[80px]">
              {/* overview + problem + user cards */}
              <section className="scroll-mt-24" id="forfalify-overview">
                <ScaledSection height={1050}>
                  <OverviewSection />
                </ScaledSection>
              </section>

              {/* design system and mood decisions */}
              <section className="scroll-mt-24" id="forfalify-design-system">
                <ScaledSection height={1659}>
                  <DesignSystemSection />
                </ScaledSection>
              </section>

              {/* key flow decisions */}
              <section className="scroll-mt-24" id="forfalify-key-flows">
                <ScaledSection height={8386}>
                  <KeyFlowSection />
                </ScaledSection>
              </section>

              {/* investor decision — information hierarchy */}
              <section className="-mt-[48px] scroll-mt-24" id="forfalify-investor">
                <ScaledSection height={2035}>
                  <InvestorDecisionsSection />
                </ScaledSection>
              </section>

              {/* merchant flow — getting invoice financed */}
              <section className="scroll-mt-24" id="forfalify-invoice">
                <ScaledSection height={1776}>
                  <InvoiceFlowSection />
                </ScaledSection>
              </section>

              {/* merchant loan application — pool search to funding */}
              <section className="scroll-mt-24" id="forfalify-loan">
                <ScaledSection height={1512}>
                  <MerchantLoanSection />
                </ScaledSection>
              </section>

              {/* co-merchant signing flow */}
              <section className="scroll-mt-24" id="forfalify-signing">
                <ScaledSection height={1648}>
                  <CoMerchantSigningSection />
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
