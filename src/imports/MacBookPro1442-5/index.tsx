import svgPaths from "./svg-h9j9r3qsbv";
import imgMacBookPro141721 from "./73f23721ac648e6159f73ce7ff1f54e8d58f54fc.png";

function Frame1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center px-[25px] py-[4px] relative rounded-[6px] shrink-0 w-[291px]">
      <div className="h-[13.288px] relative shrink-0 w-[17.64px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.2879" preserveAspectRatio="none" viewBox="0 0 17.6396 13.2879" width="17.6396">
          <path clipRule="evenodd" d={svgPaths.p10e170f0} fill="#10161F" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1px] min-w-px relative text-[1px] text-[rgba(16,22,31,0.8)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[32px] text-[18px]">Case Studies</span>
        <span className="leading-[32px] text-[18px]">/Quanvaulte</span>
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[120px] top-[69px] w-[1226px]">
      <Frame1 />
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1px] relative shrink-0 text-[64px] text-white w-[1231px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[1.45]">{`Quanvaulte - Designed platform for `}</span>
        <span className="leading-[1.45] text-[#d629cc]">{`kids `}</span>
        <span className="leading-[1.45]">to learn</span>
        <span className="leading-[1.45] text-[#fcce00]">{` tech skills the fun way`}</span>
        <span className="leading-[1.45]">{` and be monitored by`}</span>
        <span className="leading-[1.45] text-[#15fc00]">{` parents or schools`}</span>
      </p>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 42">
      <Frame />
      <div className="absolute h-[915.757px] left-[120px] top-[432.51px] w-[1223px]" data-name="MacBook Pro 14_ - 172 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro141721} />
      </div>
    </div>
  );
}