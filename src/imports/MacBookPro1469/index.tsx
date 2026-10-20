import imgMacBookPro144151 from "./a01f7.png";
import imgMacBookPro14731 from "./adc43.png";
import imgMacBookPro14741 from "./0e6d1.png";

export default function MacBookPro1469() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 69">
      <div className="absolute content-stretch flex flex-col items-start left-[116px] top-0 w-[1332px]">
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
          <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#39ff14] text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            02 Merchant Loan Application — Pool Search to Funding
          </p>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[12px] items-start leading-[38px] relative shrink-0 text-[18px] w-full">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#e1be3f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Screen 1 — Pool Detail & Apply`}</p>
            <p className="min-w-full relative shrink-0 text-white w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
              The merchant lands on the pool detail page showing everything relevant to their decision — pool name, countries served, loan range, available capital, APY, and a full description of what the pool finances. The loan tier table sits below, breaking down the available terms by duration, rate, and range. The merchant is not comparing dozens of pools here — they have already browsed and selected the one that fits their invoice. This page is confirmation, not discovery. The Apply for Loan button sits prominently once they are satisfied with the terms.
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[12px] items-start leading-[38px] relative shrink-0 text-[18px] w-full">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#e1be3f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Screen 2 — Select Loan Tier
            </p>
            <p className="min-w-full relative shrink-0 text-white w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
              After clicking Apply, a modal presents the available loan tiers as selectable cards — not a table, not a dropdown. Each tier card shows duration, interest rate, and loan range side by side. The card format is the correct choice here because the merchant is making a single selection between a small number of options, not comparing across many attributes. Seeing three cards simultaneously lets the merchant evaluate the trade-off — shorter duration, higher rate versus longer duration, lower rate — without having to read a table row by row. One tap to select, one tap to continue.
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[12px] items-start leading-[38px] relative shrink-0 text-[18px] w-full">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#e1be3f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Screen 3 — Review Loan Application
            </p>
            <p className="min-w-full relative shrink-0 text-white w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Before the application is submitted, the merchant sees a full summary — invoice amount, selected tier, interest rate, repayment duration, and total repayment figure. The same two-confirmation logic as the investor flow applies here. The merchant entered their preferences across two screens. The review screen assembles those choices into one complete picture before anything is committed. A confirm checkbox sits above the Submit button — the merchant actively acknowledges the terms rather than clicking through passively.
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[12px] items-start leading-[38px] relative shrink-0 text-[18px] w-full">
            <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#e1be3f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Screen 4 — Loan Application Successful
            </p>
            <p className="min-w-full relative shrink-0 text-white w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>{`The success modal confirms the application has been submitted and is pending investor funding. A secondary checkbox — "Share this pool with friends" — appears at the bottom. This is a quiet but considered growth mechanic. A merchant who has just successfully applied is at their highest point of satisfaction with the platform. That is exactly the right moment to ask them to share it — not during onboarding, not in an email campaign, but at the peak of the experience when the product has just delivered on its promise.`}</p>
          </div>
          <div className="content-stretch flex gap-[8.19px] items-center relative shrink-0 w-full">
            <div className="h-[427.478px] relative shrink-0 w-[395.238px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro144151} />
            </div>
            <div className="h-[427.478px] relative shrink-0 w-[450.311px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro14731} />
            </div>
            <div className="h-[427.478px] relative shrink-0 w-[450.311px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro14741} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
