export type ProjectTab = "feed" | "casestudy";

interface ProjectTabsProps {
  activeTab: ProjectTab;
  onTabChange: (tab: ProjectTab) => void;
  className?: string;
}

export default function ProjectTabs({
  activeTab,
  onTabChange,
  className = "",
}: ProjectTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Project view switcher"
      className={`inline-flex w-fit self-start items-center gap-[12.248px] rounded-[7.349px] border-[0.612px] border-[#e0e0e0] bg-[#f4f4f4] px-[5.512px] py-[3.674px] sm:gap-[20px] sm:rounded-[12px] sm:border sm:px-[9px] sm:py-[6px] ${className}`}
    >
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === "feed"}
        onClick={() => onTabChange("feed")}
        className={`flex cursor-pointer items-center justify-center rounded-[2.45px] p-[9.798px] transition-colors duration-200 outline-none border-0 select-none sm:rounded-[4px] sm:px-[16px] sm:py-[8px] ${
          activeTab === "feed"
            ? "bg-[#d629cc] text-white"
            : "bg-transparent text-black hover:bg-black/5"
        }`}
      >
        <span
          className="font-['Instrument_Sans:Medium',sans-serif] text-[12.248px] font-medium leading-[19.597px] whitespace-nowrap sm:text-[20px] sm:leading-[32px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Feed
        </span>
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={activeTab === "casestudy"}
        onClick={() => onTabChange("casestudy")}
        className={`flex cursor-pointer items-center justify-center rounded-[2.45px] p-[9.798px] transition-colors duration-200 outline-none border-0 select-none sm:rounded-[4px] sm:px-[16px] sm:py-[8px] ${
          activeTab === "casestudy"
            ? "bg-[#d629cc] text-white"
            : "bg-transparent text-black hover:bg-black/5"
        }`}
      >
        <span
          className="font-['Instrument_Sans:Medium',sans-serif] text-[12.248px] font-medium leading-[19.597px] whitespace-nowrap sm:text-[20px] sm:leading-[32px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Case study
        </span>
      </button>
    </div>
  );
}
