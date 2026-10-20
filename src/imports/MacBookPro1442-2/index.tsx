import imgFrame10000045781 from "./550e4c49f36bc137c89fe2cfdda6bf8d04f0f3f8.png";
import imgFrame10000045811 from "./04b37248cde58238ccea97b820f32395e0e2c63e.png";
import imgFrame10000045821 from "./f57a7b3b4cb1860a2ddd02d879b249d9a709f3c0.png";
import imgFrame10000045831 from "./72792a2b6b7610415fe940ffe9c92dc5b7ebb573.png";
import imgFrame10000045841 from "./2196e36878d10db136701001f5f5e8f6852cdedd.png";
import imgFrame10000045851 from "./fdfc9c38ea1e058f380854a88eb42aa0f15835b1.png";

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[4px] shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[20px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        My Feed
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#d629cc] content-stretch flex items-center justify-center p-[16px] relative rounded-[4px] shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        My Works
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[4px] shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[20px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        My design process
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[4px] shrink-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[20px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        About me
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full">
      <Frame1 />
      <Frame />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#f4f4f4] border border-[#e0e0e0] border-solid content-stretch flex flex-col items-start left-[120px] px-[9px] py-[6px] rounded-[12px] top-[59px] w-[591px]">
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute gap-x-[20px] gap-y-[40px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] h-[1881px] left-[120px] top-[171px] w-[1266px]">
      <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Frame 1000004578 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10000045781} />
      </div>
      <div className="aspect-[2492/2402] col-2 justify-self-stretch relative row-1 shrink-0" data-name="Frame 1000004581 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10000045811} />
      </div>
      <div className="aspect-[2492/2402] col-1 justify-self-stretch relative row-2 shrink-0" data-name="Frame 1000004582 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10000045821} />
      </div>
      <div className="aspect-[2492/2402] col-2 justify-self-stretch relative row-2 shrink-0" data-name="Frame 1000004583 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10000045831} />
      </div>
      <div className="aspect-[2492/2402] col-1 justify-self-stretch relative row-3 shrink-0" data-name="Frame 1000004584 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10000045841} />
      </div>
      <div className="aspect-[2492/2402] col-2 justify-self-stretch relative row-3 shrink-0" data-name="Frame 1000004585 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame10000045851} />
      </div>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 42">
      <Frame5 />
      <Frame6 />
    </div>
  );
}