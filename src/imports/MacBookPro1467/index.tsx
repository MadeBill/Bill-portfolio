import imgMacBookPro1446 from "./0d6f6b1902f0a0885860fb6456df1d6e6a8acac3.png";

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1px] relative shrink-0 text-[18px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] mb-0 text-[#fcce00] text-[18px]">First — the numbers that drive the decision</p>
        <p className="leading-[38px] mb-0">{`Invoice value, return rate, loan range, repayment duration, and epoch date lead the page in the largest type. These are the figures the investor evaluates before anything else. If the terms don't work for them, nothing below matters.`}</p>
        <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] mb-0 text-[#fcce00] text-[18px]">Second — the timeline</p>
        <p className="leading-[38px] mb-0">Below the headline figures sits the epoch timeline — showing exactly where this invoice sits in its cycle, from funding open to maturity. The investor sees not just dates but position. How far into the cycle is this invoice? How much time remains before repayment? The timeline answers both without the investor doing mental arithmetic.</p>
        <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] mb-0 text-[#fcce00] text-[18px]">Third — co-merchant signatures</p>
        <p className="leading-[38px] mb-0">Before investing in an invoice, users need confidence in the deal itself. I made co-merchant signatures visible, allowing investors to see which parties had already reviewed and signed the invoice.</p>
        <p className="leading-[38px] mb-0">This adds transparency and helps build trust by showing that other parties involved in the transaction have also committed to the deal.</p>
        <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] mb-0 text-[#fcce00] text-[18px]">Last — recent transactions</p>
        <p className="leading-[38px]">{`Transaction history closes the page in table format. Audit information belongs at the bottom — it answers what has happened, not what is about to. It is reachable for the investor who needs it and invisible to the one who doesn't.`}</p>
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

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1963px] items-start left-[116px] top-[72px] w-[1332px]">
      <Frame2 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 67">
      <Frame5 />
    </div>
  );
}
