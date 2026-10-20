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
    <div className="hidden">
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Overview
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        The problem
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        The investor
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame6 />
      <p className="[word-break:break-word] font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Deploys capital. Expects structured returns
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <circle cx="16" cy="16" fill="white" id="Ellipse 24" r="16" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[18px] text-black w-[455px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Needs to understand exactly where their money is and what it's doing at any point in time`}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <circle cx="16" cy="16" fill="white" id="Ellipse 24" r="16" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[18px] text-black w-[455px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Needs to choose between pooled exposure and custom deal-specific allocation
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <circle cx="16" cy="16" fill="white" id="Ellipse 24" r="16" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[18px] text-black w-[455px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Needs epoch-based reporting — clear visibility of cycle start, end, and return
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <circle cx="16" cy="16" fill="white" id="Ellipse 24" r="16" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[18px] text-black w-[455px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Needs to trust the platform before they trust a single merchant
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[507px]">
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[51px] items-start left-[32px] top-[20px] w-[526px]">
      <Frame10 />
      <Frame16 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[714px] relative shrink-0 w-[602px]">
      <div className="absolute bg-[#37fc00] h-[714px] left-0 top-0 w-[602px]" />
      <Frame17 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        The merchant
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame9 />
      <p className="[word-break:break-word] font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.45] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Needs capital. Operates under time pressure.
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <circle cx="16" cy="16" fill="white" id="Ellipse 24" r="16" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[18px] text-black w-[455px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Needs fast, clear access to available financing — not a complex financial dashboard
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <circle cx="16" cy="16" fill="white" id="Ellipse 24" r="16" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[18px] text-black w-[455px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Needs to understand what they're committing to before they apply`}</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <circle cx="16" cy="16" fill="white" id="Ellipse 24" r="16" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[18px] text-black w-[455px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Needs status visibility — where is my application, when does it fund
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <circle cx="16" cy="16" fill="white" id="Ellipse 24" r="16" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[18px] text-black w-[455px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Needs to feel the platform is on their side, not interrogating them .Needs a process simple enough to complete without a financial advisor
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[507px]">
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[51px] items-start left-[32px] top-[20px] w-[526px]">
      <Frame11 />
      <Frame19 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[714px] relative shrink-0 w-[602px]">
      <div className="absolute bg-[#d600fc] h-[714px] left-0 top-0 w-[602px]" />
      <Frame18 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 49">
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[122px] top-0 w-[1274px]">
        {/* Overview block */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <Frame4 />
          <div className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[38px] relative shrink-0 text-[18px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="mb-[20px]">Small and mid-sized merchants often struggle to access invoices finance due to complex processes and limited banking relationships. Forfaitify connects these merchants with investors seeking asset-backed, insurance-protected investment opportunities.</p>
            <p>As the founding product designer, I designed both portals, covering the merchant application flow, investment pools, epoch mechanics, notifications, and security.</p>
          </div>
        </div>

        {/* The problem block */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <Frame5 />
          <div className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[38px] relative shrink-0 text-[18px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="mb-0">Two users. Opposite relationships with risk.</p>
            <p>The defining challenge on Forfaitify was not visual — it was structural. The platform serves two user types whose relationship to the product is almost entirely opposed.</p>
          </div>
        </div>

        {/* The investor & The merchant cards */}
        <div className="content-stretch flex gap-[34px] items-start relative shrink-0">
          <Frame7 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}
