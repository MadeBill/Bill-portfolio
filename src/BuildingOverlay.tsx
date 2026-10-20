const assetPathPrefix = "/assets";

export default function BuildingOverlay() {
  return (
    <div className="building-overlay absolute inset-0 flex items-center justify-center bg-[#fbeafa]">
      <div className="flex aspect-[358/337] w-[58%] flex-col items-center justify-center px-[5%] pb-[2.4%] pt-[6.4%]">
        <div className="relative aspect-square w-[78%]" aria-hidden="true">
          <img className="h-full w-full object-contain" src={`${assetPathPrefix}/c2597.png`} alt="" />
          <span className="building-block building-block--carried" />
          <span className="building-block building-block--placed building-block--first" />
          <span className="building-block building-block--placed building-block--second" />
          <span className="building-block building-block--placed building-block--third" />
        </div>
        <div className="mt-[6.5%] flex w-full items-center justify-center">
          <span className="w-full text-center font-['Instrument_Sans:Bold'] text-[clamp(10px,1.6vw,20px)] font-bold leading-normal whitespace-nowrap text-black" style={{ fontVariationSettings: '"wdth" 100' }}>
            Bill is currently building it
          </span>
        </div>
      </div>
    </div>
  );
}
