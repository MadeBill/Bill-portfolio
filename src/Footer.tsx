import svgPaths from "@/imports/MacBookPro1442-3/svg-ybq0105ka3";

export default function Footer() {
  return (
    <div className="bg-black w-full px-4 sm:px-8 lg:px-[120px] py-10 sm:py-16">
      <div className="max-w-[1270px] mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p
            className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-white text-[16px] sm:text-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            © 2026 Bill Aniekan
          </p>
          <a
            href="mailto:Aniekanbill1@gmail.com"
            className="bg-[#d629cc] flex gap-[12px] items-center px-[12px] py-[12px] rounded-[8px] cursor-pointer no-underline"
          >
            <span
              className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold text-white text-[14.165px] whitespace-nowrap"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Contact me
            </span>
            <div className="h-[20px] w-[23px] relative shrink-0">
              <svg className="absolute block inset-0 size-full" fill="none" height="20" viewBox="0 0 23 20" width="23">
                <path clipRule="evenodd" d={svgPaths.p4506e00} fill="white" fillRule="evenodd" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
