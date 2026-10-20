function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[4px] shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[20px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Feed
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#d629cc] content-stretch flex items-center justify-center p-[16px] relative rounded-[4px] shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Case study
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] h-[46px] items-center relative shrink-0 w-[234px]">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#f4f4f4] border border-[#e0e0e0] border-solid content-stretch flex flex-col items-start left-[122px] px-[9px] py-[6px] rounded-[12px] top-[72px] w-[258px]">
      <Frame2 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 43">
      <Frame3 />
    </div>
  );
}