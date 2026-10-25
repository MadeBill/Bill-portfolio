import svgPaths from "../imports/svg-y0d4q8gz14";
import cvPdf from "@/imports/BillAniekan_Cv.pdf";

function Logo() {
  return (
    <div className="h-[42px] relative shrink-0 w-[48px] sm:w-[58px] sm:h-[42.376px]">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" height="46.9594" preserveAspectRatio="none" viewBox="0 0 64.1769 46.9594" width="64.1769">
          <g id="Frame 10">
            <g id="Group 1">
              <path d={svgPaths.p2be9a500} fill="white" id="Vector 1" />
              <path d={svgPaths.p3a75cff0} fill="url(#paint0_linear_0_8)" id="Vector 2" />
              <path d={svgPaths.p15a7f170} fill="white" id="Vector 3" />
            </g>
            <path d={svgPaths.p15249380} fill="#D629CC" id="Vector 4" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_8" x1="25.9269" x2="25.9269" y1="3.36541" y2="44.1739">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#D0D0D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px] sm:h-[21px] sm:w-[18px]">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 18.3941 21" width="18.3941">
          <g>
            <path d={svgPaths.p3e0a1500} fill="#D629CC" />
            <path d={svgPaths.p126a4900} fill="#D629CC" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="bg-black w-full px-4 sm:px-8 lg:px-[120px] py-4 sm:py-6 flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href={cvPdf}
          download="BillAniekan_Cv.pdf"
          className="bg-white flex gap-2 items-center px-3 py-2 sm:px-[12px] sm:py-[12px] rounded-[8px] no-underline cursor-pointer"
        >
          <span
            className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold text-[#d629cc] text-[12px] sm:text-[14.165px] whitespace-nowrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Download Cv
          </span>
          <DownloadIcon />
        </a>
        <a
          href="mailto:Aniekanbill1@gmail.com"
          className="bg-[#d629cc] flex gap-2 items-center px-3 py-2 sm:px-[12px] sm:py-[12px] rounded-[8px] no-underline cursor-pointer"
        >
          <span
            className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold text-white text-[12px] sm:text-[14.165px] whitespace-nowrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Contact me
          </span>
          <div className="h-[16px] w-[19px] sm:h-[20px] sm:w-[23px] shrink-0 relative">
            <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 23 20" width="23">
              <path clipRule="evenodd" d={svgPaths.p4506e00} fill="white" fillRule="evenodd" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
