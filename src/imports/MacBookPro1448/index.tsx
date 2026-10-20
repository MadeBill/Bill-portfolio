import svgPaths from "./svg-uks37l471o";
import imgMacBookPro14451 from "./a3bd46f0ae58337537ef6aa50fc2f366bc02bea3.png";

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
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[120px] top-[136px] w-[1226px]">
      <Frame1 />
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[64px] text-white w-[1226px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Designing trust into high-stakes trade finance for two completely different users
      </p>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 48">
      <Frame />
      <div className="-translate-x-1/2 absolute h-[820.177px] left-[calc(50%+0.5px)] top-[519px] w-[1273px]" data-name="MacBook Pro 14_ - 45 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro14451} />
      </div>
    </div>
  );
}