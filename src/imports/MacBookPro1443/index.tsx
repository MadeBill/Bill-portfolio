function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[176px]">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Company
      </p>
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[32px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Quanvaulte
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[143px]">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Timeline `}</p>
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[32px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        2 months
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[286px]">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        My Role
      </p>
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[32px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Founding designer
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[109px]">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Industry `}</p>
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[32px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Edtech
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex gap-[186px] items-center leading-[1.45] left-[120px] text-white top-[40px]">
      <Frame3 />
      <Frame2 />
      <Frame1 />
      <Frame />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 43">
      <Frame4 />
    </div>
  );
}