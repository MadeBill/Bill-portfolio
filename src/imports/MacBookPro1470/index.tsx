
const assetPathPrefix = "/assets";
const imgFrame10000046881 = `${assetPathPrefix}/c87d8.png`;
const imgMacBookPro14112 = `${assetPathPrefix}/20940.png`;
const imgMacBookPro14751 = `${assetPathPrefix}/0a3f0.png`;

export default function MacBookPro1470() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 70">
      <div className="absolute content-stretch flex flex-col items-start left-[116px] top-0 w-[1332px]">
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
          <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#39ff14] text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            03 Co-Merchant Signing Flow
          </p>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[12px] items-start relative shrink-0 text-[18px] w-full">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#e1be3f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Step 1 — Invited Landing Screen
            </p>
            <div className="leading-[1px] min-w-full relative shrink-0 text-white w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[38px] mb-0">I designed a personalised welcome screen that tells co-merchants who invited them, why they're here, and the invoice details upfront. A four-step guide explains what comes next: account creation, KYC verification, business verification, and signing.</p>
              <p className="leading-[38px]">The goal was to remove confusion from the start, so co-merchants understand what to expect before proceeding.</p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[12px] items-start leading-[38px] relative shrink-0 text-[18px] w-full">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#e1be3f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Step 2 — Dashboard with Pending Signing Request
            </p>
            <p className="min-w-full relative shrink-0 text-white w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>{`After creating their account the co-merchant lands on their dashboard. The KYC prompt sits at the top — a necessary gate before signing can proceed, surfaced immediately so there is no confusion about why the invoice is not yet signable. Below it, the pending invoice signing requests appear as cards — merchant name, industry, rating, maturity date, minimum deposit, and close date. The urgency chip showing "32 days due" in red creates appropriate time awareness without being aggressive. The co-merchant can see at a glance what is waiting for them and how long they have.`}</p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[12px] items-start relative shrink-0 text-[18px] w-full">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#e1be3f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Step 3 — Review Before You Sign
            </p>
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
              <div className="leading-[1px] min-w-full relative shrink-0 text-white w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[38px] mb-0">I designed the signing page to make the co-merchant's financial obligations clear before they commit. Key details, including the invoice amount, buyer, repayment date, and loan duration, appear upfront, followed by a yellow warning explaining their shared repayment responsibility.</p>
                <p className="leading-[38px]">Before signing, they must confirm that they've read and understood the terms. This follows the same approach across Forfaitify: making important information clear and ensuring consent is given, not assumed.</p>
              </div>
              <div className="content-stretch flex gap-[8.19px] items-center relative shrink-0" data-node-id="446:81">
                <div className="h-[332.88px] relative shrink-0 w-[248.52px]" data-node-id="446:82" data-name="Frame 1000004688 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10000046881} />
                </div>
                <div className="h-[335.307px] relative shrink-0 w-[516.278px]" data-node-id="446:83" data-name="MacBook Pro 14_ - 1 (1) 2">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro14112} />
                </div>
                <div className="h-[333.145px] relative shrink-0 w-[523.69px]" data-node-id="446:84" data-name="MacBook Pro 14_ - 75 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro14751} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
