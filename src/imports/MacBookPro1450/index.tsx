import imgImage7 from "./064c201886d5e32891b72442f6a38e9ab707ecb9.png";
import imgImage8 from "./b7e6c276b555db65eef25a424ea5bbae2f523f56.png";
import imgImage6 from "./aa2e744d83a616ded77e2a639642f3bfe6bc5d97.png";
import imgTypographyBannerDesktop from "./typography-banner-desktop.png";

function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[119px] px-[10px] py-[4px] top-[72px]">
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Decision from research for design system and mood `}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[16px] items-start leading-[38px] relative shrink-0 text-[18px] w-[1274px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-white text-[22px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Illustration — Newspaper & Engraving Style`}</p>
      <div className="relative shrink-0 text-white w-full space-y-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>{`Trade finance has a long history rooted in paper invoices, stamped documents, and financial records. I used three vintage-style illustrations to reflect that heritage, combining aged textures, engraved details, and physical currency.`}</p>
        <p>{`The contrast with the clean digital interface reinforces Forfaitify’s core idea: traditional trust, reimagined through technology.`}</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[234px] relative shrink-0 w-full">
      <div className="absolute bg-[#fcce00] h-[234px] left-0 top-0 w-[1329px]" />
      <div className="absolute h-[181.594px] left-[159px] top-[19px] w-[162.969px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <div className="absolute h-[181.594px] left-[1098px] top-[19px] w-[162.969px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <div className="absolute h-[227.928px] left-[562px] top-[3px] w-[204.551px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame9 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-white text-[22px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Color — Blue
      </p>
      <div className="bg-[#2c43eb] h-[44px] relative rounded-[8px] shrink-0 w-[45px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1274px]">
      <Frame4 />
      <p className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[38px] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        I used blue selectively to communicate trust, stability, and confidence, especially in a product where investors commit capital.
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[16px] items-start leading-[38px] relative shrink-0 text-[18px] w-[1274px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-white text-[22px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Typography — Plus Jakarta Sans & Inter`}</p>
      <p className="relative shrink-0 text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        I used Plus Jakarta Sans for headings and UI elements because of its clean, confident look, and Inter for body text to keep information easy to read, especially on data-heavy screens. One helps users scan quickly, while the other makes longer content easier to follow.
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[234px] relative shrink-0 w-[1329px] max-w-full" data-name="Typography Banner">
      <img
        alt="Typography — Plus Jakarta Sans & Inter"
        className="block h-[234px] w-[1329px] object-cover pointer-events-none"
        src={imgTypographyBannerDesktop}
      />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[16px] items-start leading-[38px] relative shrink-0 text-[18px] w-[1274px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-white text-[22px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Icons — Inline
      </p>
      <p className="relative shrink-0 text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Simple inline icons get out of the way of the data. On a financial dashboard, iconography that competes for attention is iconography that has failed its job.
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[16px] items-start leading-[38px] relative shrink-0 text-[18px] w-[1274px]">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold relative shrink-0 text-white text-[22px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Spacing — 8px base, fintech standard
      </p>
      <p className="relative shrink-0 text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`The fintech spacing convention exists because it has been validated at scale across millions of users making financial decisions. Reinventing it would have been design for its own sake, not for the user's benefit.`}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[119px] top-[129px] w-[1329px]">
      <Frame11 />
      <Frame3 />
      <Frame5 />
      <Frame7 />
      <Frame10 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 50">
      <Frame />
      <Frame12 />
    </div>
  );
}
