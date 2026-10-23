import imgMacBookPro1446 from "./0d6f6b1902f0a0885860fb6456df1d6e6a8acac3.png";

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1px] relative shrink-0 text-[18px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] mb-[16px] text-[#fcce00] text-[18px]">First — the numbers that drive the decision</p>
        <p className="leading-[38px] mb-[32px]">{`Invoice value, return rate, loan range, repayment duration, and epoch date lead the page in the largest type. These are the figures the investor evaluates before anything else. If the terms don't work for them, nothing below matters.`}</p>
        <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] mb-[16px] text-[#fcce00] text-[18px]">Second — the timeline</p>
        <p className="leading-[38px] mb-[32px]">{`The epoch timeline shows each invoice’s stage, from funding to maturity, helping investors understand their position in the cycle and how long remains until repayment at a glance.`}</p>
        <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] mb-[16px] text-[#fcce00] text-[18px]">Third — co-merchant signatures</p>
        <p className="leading-[38px] mb-[32px]">{`I made co-merchant signatures visible so investors could verify which parties had reviewed and signed an invoice, improving transparency and building trust in the deal.`}</p>
        <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] mb-[16px] text-[#fcce00] text-[18px]">Last — recent transactions</p>
        <p className="leading-[38px]">{`I placed transaction history in a table at the bottom of the page, keeping audit details accessible without distracting from key investment information and actions.`}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1274px]">
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1318px]">
      <div className="aspect-[2268/2091] relative shrink-0 w-full" data-name="MacBook Pro 14_ - 4 6">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMacBookPro1446} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame4 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-black relative w-full pt-0 pl-[116px]" data-name="MacBook Pro 14' - 67">
      <div className="content-stretch flex flex-col items-start w-[1332px]">
        <Frame2 />
      </div>
    </div>
  );
}
