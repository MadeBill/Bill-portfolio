import { useState } from "react";
import { Link } from "react-router";
import WebprebuiltOverviewSection from "@/imports/WebprebuiltOverviewSection/index";
import WebprebuiltResearchSection from "@/imports/WebprebuiltResearchSection/index";
import WebprebuiltWorkspaceSection from "@/imports/WebprebuiltWorkspaceSection/index";
import WebprebuiltContentEditorSection from "@/imports/WebprebuiltContentEditorSection/index";
import WebprebuiltDashboardTypesSection from "@/imports/WebprebuiltDashboardTypesSection/index";
import Navbar from "../Navbar";
import ProjectDetails from "../ProjectDetails";
import CaseStudySidebar from "../CaseStudySidebar";
import ProjectTabs, { type ProjectTab } from "../ProjectTabs";
import WebprebuiltFeed from "../WebprebuiltFeed";

const WEBPREBUILT_SECTIONS = [
  { id: "webprebuilt-overview", label: "Overview" },
  { id: "webprebuilt-problem", label: "The problem" },
  { id: "webprebuilt-research", label: "Research and Discovery" },
  { id: "webprebuilt-workspace", label: "The Workspace" },
  { id: "webprebuilt-content-editor", label: "Content Editor" },
  { id: "webprebuilt-dashboard-types", label: "Dashboard Types" },
];

export default function WebprebuiltPage() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("casestudy");

  return (
    <main className="case-study-page min-h-screen overflow-x-hidden bg-black">
      <Navbar />
      <div className="flex flex-col gap-[40px]">
        {/* breadcrumb */}
        <div className="px-5 sm:px-8 lg:px-[120px]">
          <Link
            className="flex w-fit items-center gap-[10px] rounded-[6px] bg-white px-[25px] py-[4px] no-underline"
            to="/"
          >
            <img alt="" className="h-[13.288px] w-[17.64px]" src="/assets/b7aab.svg" />
            <p
              className="case-study-breadcrumb font-['Instrument_Sans:Medium',sans-serif] text-[15px] font-medium leading-[32px] text-black sm:text-[18px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <span className="text-black">Case Studies</span>
              <span className="text-black">/Webprebuilt</span>
            </p>
          </Link>
        </div>

        {/* title */}
        <div className="px-5 sm:px-8 lg:px-[120px]">
          <h1
            className="max-w-[1226px] font-['Instrument_Sans:Bold',sans-serif] text-[32px] font-bold leading-[1.45] text-white sm:text-[48px] lg:text-[64px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            WEBPREBUILT - A Nigerian SME&apos;s website in 2–3 days, not 2 months
          </h1>
        </div>

        {/* project details */}
        <ProjectDetails company="Webprebuilt" timeline="1 month" industry="SaaS" />

        {/* mockup header image */}
        <div className="px-5 sm:px-8 lg:px-[120px]">
          <div className="mx-auto max-w-[1160px]">
            <div className="relative w-full overflow-hidden rounded-[16px]" style={{ aspectRatio: "5092/3796" }}>
              <img
                alt="Webprebuilt platform mockup"
                className="absolute inset-0 h-full w-full object-cover"
                src="/assets/webprebuilt-header.png"
              />
            </div>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="px-5 sm:px-8 lg:px-[120px]">
          <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {activeTab === "feed" ? (
          <WebprebuiltFeed />
        ) : (
          <div className="-mt-[20px] sm:mt-0 lg:grid lg:grid-cols-[236px_minmax(0,1fr)] lg:items-start lg:gap-6 lg:pl-[120px] lg:pr-5">
            <CaseStudySidebar className="px-5 sm:px-8 lg:px-[21px]" sections={WEBPREBUILT_SECTIONS} />
            <div className="flex min-w-0 flex-col gap-[120px] lg:[&>section]:px-0">
              <WebprebuiltOverviewSection />
              <WebprebuiltResearchSection />
              <WebprebuiltWorkspaceSection />
              <WebprebuiltContentEditorSection />
              <WebprebuiltDashboardTypesSection />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
