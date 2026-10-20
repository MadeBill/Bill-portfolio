import { useState, useEffect } from "react";
import { Link } from "react-router";
import DesignProcess from "@/imports/MacBookPro1442-4/index";
import AboutMeSection from "./AboutMeSection";
import FeedSection from "./FeedSection";
import BuildingOverlay from "./BuildingOverlay";

import imgFrame10000045781 from "@/imports/MacBookPro1442-2/550e4c49f36bc137c89fe2cfdda6bf8d04f0f3f8.png";
import imgFrame10000045811 from "@/imports/MacBookPro1442-2/04b37248cde58238ccea97b820f32395e0e2c63e.png";
import imgFrame10000045821 from "@/imports/MacBookPro1442-2/f57a7b3b4cb1860a2ddd02d879b249d9a709f3c0.png";
import imgFrame10000045831 from "@/imports/MacBookPro1442-2/72792a2b6b7610415fe940ffe9c92dc5b7ebb573.png";
import imgFrame10000045841 from "@/imports/MacBookPro1442-2/2196e36878d10db136701001f5f5e8f6852cdedd.png";
import imgFrame10000045851 from "@/imports/MacBookPro1442-2/fdfc9c38ea1e058f380854a88eb42aa0f15835b1.png";

const workCards = [
  { image: imgFrame10000045781, to: "/works/quanvaulte" },
  { image: imgFrame10000045811, to: "/works/forfalify" },
  { image: imgFrame10000045821, to: "/works/webprebuilt" },
  { image: imgFrame10000045841, to: "/works/owambe" },
  { image: imgFrame10000045831, to: "/works/4" },
  { image: imgFrame10000045851, to: "/works/6" },
];

function WorksGrid() {
  return (
    <div className="px-4 sm:px-8 lg:px-[120px] py-6 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-[1270px] mx-auto">
        {workCards.map(({ image, to }, i) => (
          to === "/works/4" || to === "/works/6" ? (
            <button
              key={to}
              type="button"
              aria-label={`${to === "/works/4" ? "Evolefy" : "BillEase"} — Bill is currently building it`}
              className="building-card group relative block aspect-[2492/2402] w-full cursor-pointer overflow-hidden rounded-[12px] border-0 bg-transparent p-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d629cc]"
            >
              <img src={image} alt={to === "/works/4" ? "Evolefy" : "BillEase"} className="absolute inset-0 h-full w-full object-cover" />
              <BuildingOverlay />
            </button>
          ) : (
          <Link
            key={to}
            to={to}
            className="relative block w-full rounded-[12px] overflow-hidden group no-underline"
            style={{ aspectRatio: "2492/2402" }}
          >
            <img
              src={image}
              alt={`Work ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#d629cc] text-white font-['Instrument_Sans:SemiBold',sans-serif] font-semibold text-[14px] px-5 py-3 rounded-[8px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                View project
              </span>
            </div>
          </Link>
          )
        ))}
      </div>
    </div>
  );
}

function DesignProcessSection() {
  const DESIGN_W = 1440;
  const CONTENT_H = 1100;
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / DESIGN_W));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (scale < 640 / DESIGN_W) {
    return (
      <div className="flex w-full flex-col gap-[24px]">
        <p className="px-4 font-['Instrument_Sans:Regular',sans-serif] text-[12px] font-normal leading-[24px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
          {"I don't follow a rigid framework, "}
          <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: '"wdth" 100' }}>
            my process adapts to the problem
          </span>
          , moving from understanding to shipping through collaboration
        </p>
        <div className="w-full overflow-hidden" style={{ height: (CONTENT_H - 212) * scale }}>
          <div style={{ transform: `translateY(${-212 * scale}px)` }}>
            <div style={{ width: DESIGN_W, height: CONTENT_H, zoom: scale }}>
              <DesignProcess />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden" style={{ height: CONTENT_H * scale }}>
      <div style={{ width: DESIGN_W, height: CONTENT_H, zoom: scale }}>
        <DesignProcess />
      </div>
    </div>
  );
}

type Tab = "feed" | "works" | "process" | "about";

const TABS: { id: Tab; label: string }[] = [
  { id: "works", label: "My Works" },
  { id: "feed", label: "My Feed" },
  { id: "process", label: "My design process" },
  { id: "about", label: "About me" },
];

function TabBar({ active, onSelect }: { active: Tab; onSelect: (t: Tab) => void }) {
  return (
    <div className="sticky top-0 z-50 bg-black py-4 px-4 sm:px-8 lg:px-[120px]">
      <div className="bg-[#f4f4f4] border border-[#e0e0e0] border-solid inline-flex px-[6px] py-[5px] rounded-[12px] overflow-x-auto max-w-full">
        <div className="flex items-center gap-[2px] sm:gap-[4px]">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onSelect(tab.id)}
              className={`flex items-center justify-center px-3 sm:px-[16px] h-[38px] sm:h-[46px] rounded-[4px] cursor-pointer border-none outline-none transition-colors duration-200 whitespace-nowrap ${
                active === tab.id ? "bg-[#d629cc]" : "bg-transparent hover:bg-black/10"
              }`}
            >
              <span
                className="font-['Instrument_Sans:Medium',sans-serif] font-medium text-[14px] sm:text-[18px] lg:text-[20px]"
                style={{
                  fontVariationSettings: '"wdth" 100',
                  color: active === tab.id ? "white" : "black",
                }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WorksTabSection() {
  const [active, setActive] = useState<Tab>("works");

  return (
    <div className="bg-black w-full">
      <TabBar active={active} onSelect={setActive} />
      {active === "works" && <WorksGrid />}
      {active === "feed" && <FeedSection />}
      {active === "process" && <DesignProcessSection />}
      {active === "about" && <AboutMeSection />}
    </div>
  );
}
