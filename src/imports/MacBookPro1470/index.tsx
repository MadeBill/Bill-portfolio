
const assetPathPrefix = "/assets";
const imgFrame10000046881 = `${assetPathPrefix}/c87d8.png`;
const imgMacBookPro14112 = `${assetPathPrefix}/20940.png`;
const imgMacBookPro14751 = `${assetPathPrefix}/0a3f0.png`;

export default function MacBookPro1470() {
  return (
    <div className="bg-black relative w-full pt-0 pl-[116px]" data-name="MacBook Pro 14' - 70">
      <div className="content-stretch flex flex-col items-start w-[1332px]">
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
          <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-white text-[22px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            03 Co-Merchant Signing Flow
          </p>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[16px] items-start relative shrink-0 text-[18px] w-full">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#e1be3f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Step 1 — Invited Landing Screen
            </p>
            <div className="leading-[38px] min-w-full relative shrink-0 text-[#ffffff99] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p>{`I designed a personalised welcome screen showing who invited the co-merchant and the invoice details. A four-step guide outlines account creation, KYC, business verification, and signing, setting clear expectations from the start.`}</p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[16px] items-start leading-[38px] relative shrink-0 text-[18px] w-full">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#e1be3f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Step 2 — Dashboard with Pending Signing Request
            </p>
            <p className="min-w-full relative shrink-0 text-[#ffffff99] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
              I placed the KYC prompt upfront to clarify that verification is required before signing. Pending requests show key invoice details, while a red “32 days due” chip highlights deadlines and helps co-merchants prioritise action.
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[16px] items-start relative shrink-0 text-[18px] w-full">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#e1be3f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Step 3 — Review Before You Sign
            </p>
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
              <div className="leading-[38px] min-w-full relative shrink-0 text-[#ffffff99] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p>{`I designed the signing page to make co-merchants’ financial obligations clear before they commit. Key details, including the invoice amount, buyer, repayment date, and loan duration, appear upfront, followed by a yellow warning explaining their shared repayment responsibility. A mandatory confirmation ensures they acknowledge the terms before signing`}</p>
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
