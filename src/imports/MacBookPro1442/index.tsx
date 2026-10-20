import svgPaths from "./svg-y0d4q8gz14";

function Frame1() {
  return (
    <div className="absolute h-[42.376px] left-0 top-0 w-[58px]">
      <div className="absolute inset-[-4.24%_-4.33%_-6.57%_-6.32%]">
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

function Frame2() {
  return (
    <div className="h-[42.376px] relative shrink-0 w-[58px]">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[18px]">
      <div className="absolute inset-[0_0_0_-2.19%]">
        <svg className="block size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 18.3941 21" width="18.3941">
          <g id="Frame 427321325">
            <path d={svgPaths.p3e0a1500} fill="#D629CC" id="Vector" />
            <path d={svgPaths.p126a4900} fill="#D629CC" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex gap-[12.394px] items-center p-[12px] relative rounded-[8px] shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d629cc] text-[14.165px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Download Cv
      </p>
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#d629cc] content-stretch flex gap-[12.394px] items-center p-[12px] relative rounded-[8px] shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14.165px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Contact me
      </p>
      <div className="h-[20px] relative shrink-0 w-[23px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 23 20" width="23">
          <path clipRule="evenodd" d={svgPaths.p4506e00} fill="white" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start justify-between left-[calc(50%-0.11px)] top-[49px] w-[1269.788px]">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 42">
      <Frame6 />
    </div>
  );
}