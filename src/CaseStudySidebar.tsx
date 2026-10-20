import { useEffect, useState } from "react";

export type CaseStudySection = {
  id: string;
  label: string;
};

export default function CaseStudySidebar({
  className = "",
  sections,
}: {
  className?: string;
  sections: CaseStudySection[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.34;
      let current = sections[0]?.id ?? "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= marker) {
          current = section.id;
        }
      }

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections]);

  const navigateTo = (id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside
      aria-label="Case study sections"
      className={`sticky top-0 z-40 w-full self-start bg-black px-0 py-4 lg:top-6 lg:w-[236px] lg:px-[21px] lg:py-[24px] ${className}`}
      data-node-id="229:408"
    >
      <nav className="flex gap-5 overflow-x-auto lg:flex-col lg:gap-6 lg:overflow-visible">
        {sections.map((section) => {
          const isActive = section.id === activeId;

          return (
            <button
              aria-current={isActive ? "location" : undefined}
              className={`shrink-0 cursor-pointer border-0 bg-transparent p-0 text-left text-[16px] leading-[1.45] whitespace-nowrap transition-colors lg:w-full lg:text-[18px] lg:leading-[32px] lg:whitespace-normal ${
                isActive
                  ? "font-['Instrument_Sans:Bold'] font-bold text-white"
                  : "font-['Instrument_Sans:Medium'] font-medium text-[#e6e6e6] hover:text-white"
              }`}
              key={section.id}
              onClick={() => navigateTo(section.id)}
              style={{ fontVariationSettings: '"wdth" 100' }}
              type="button"
            >
              {section.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
