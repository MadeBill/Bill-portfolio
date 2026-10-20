import { useParams, Link } from "react-router";

import img0 from "@/imports/MacBookPro1442-2/550e4c49f36bc137c89fe2cfdda6bf8d04f0f3f8.png";
import img1 from "@/imports/MacBookPro1442-2/04b37248cde58238ccea97b820f32395e0e2c63e.png";
import img2 from "@/imports/MacBookPro1442-2/f57a7b3b4cb1860a2ddd02d879b249d9a709f3c0.png";
import img3 from "@/imports/MacBookPro1442-2/72792a2b6b7610415fe940ffe9c92dc5b7ebb573.png";
import img4 from "@/imports/MacBookPro1442-2/2196e36878d10db136701001f5f5e8f6852cdedd.png";
import img5 from "@/imports/MacBookPro1442-2/fdfc9c38ea1e058f380854a88eb42aa0f15835b1.png";

const works = [
  { id: "1", title: "Quanvaulte", category: "Edtech", img: img0 },
  { id: "2", title: "Forfalify", category: "Fintech", img: img1 },
  { id: "3", title: "Webprebuilt", category: "SaaS", img: img2 },
  { id: "4", title: "Evolefy", category: "Mental Health", img: img3 },
  { id: "5", title: "Owambe", category: "Fashion", img: img4 },
  { id: "6", title: "BillEase", category: "Mental Health", img: img5 },
];

export default function WorkDetail() {
  const { id } = useParams();
  const work = works.find((w) => w.id === id);

  if (!work) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-white text-[24px]">Work not found.</p>
      </div>
    );
  }

  const currentIndex = works.findIndex((w) => w.id === id);
  const prev = works[currentIndex - 1];
  const next = works[currentIndex + 1];

  return (
    <div className="case-study-page bg-black min-h-screen flex flex-col overflow-x-hidden">
      {/* top bar */}
      <div className="px-5 sm:px-8 lg:px-[120px] py-5 flex items-center justify-between border-b border-white/10">
        <Link
          to="/"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors no-underline"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className="font-['Instrument_Sans:Medium',sans-serif] font-medium text-[15px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Back to portfolio
          </span>
        </Link>
        <span
          className="font-['Instrument_Sans:Medium',sans-serif] font-medium text-white/30 text-[15px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {currentIndex + 1} / {works.length}
        </span>
      </div>

      {/* content */}
      <div className="flex-1 px-5 sm:px-8 lg:px-[120px] py-10 sm:py-16 max-w-[1270px] mx-auto w-full">
        {/* meta */}
        <p
          className="font-['Instrument_Sans:Medium',sans-serif] font-medium text-[#d629cc] text-[15px] uppercase tracking-widest mb-3"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {work.category}
        </p>
        <h1
          className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-white text-[32px] sm:text-[52px] lg:text-[64px] leading-[1] uppercase mb-8 sm:mb-12"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {work.title}
        </h1>

        {/* full image */}
        <div className="w-full rounded-[16px] overflow-hidden">
          <img
            src={work.img}
            alt={work.title}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* prev / next */}
      <div className="px-5 sm:px-8 lg:px-[120px] py-8 border-t border-white/10 flex items-center justify-between gap-4">
        {prev ? (
          <Link
            to={`/works/${prev.id}`}
            className="flex items-center gap-3 group no-underline"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p className="text-white/40 text-[15px] font-['Instrument_Sans:Medium',sans-serif]" style={{ fontVariationSettings: '"wdth" 100' }}>Previous</p>
              <p className="text-white text-[15px] font-['Instrument_Sans:Bold',sans-serif] group-hover:text-[#d629cc] transition-colors" style={{ fontVariationSettings: '"wdth" 100' }}>{prev.title}</p>
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            to={`/works/${next.id}`}
            className="flex items-center gap-3 group no-underline text-right"
          >
            <div>
              <p className="text-white/40 text-[15px] font-['Instrument_Sans:Medium',sans-serif]" style={{ fontVariationSettings: '"wdth" 100' }}>Next</p>
              <p className="text-white text-[15px] font-['Instrument_Sans:Bold',sans-serif] group-hover:text-[#d629cc] transition-colors" style={{ fontVariationSettings: '"wdth" 100' }}>{next.title}</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 4L14 10L8 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
