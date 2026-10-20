import svgPaths from "@/imports/MacBookPro1442-3/svg-ybq0105ka3";

function QuoteIcon({ color }: { color: string }) {
  return (
    <div className="absolute bottom-[24px] right-[24px] w-[120px] h-[63px] pointer-events-none">
      <svg className="block size-full" fill="none" viewBox="0 0 239.695 126" preserveAspectRatio="none">
        <path d={svgPaths.p3f3a0b00} fill={color} />
        <path d={svgPaths.p2cd37a00} fill={color} />
      </svg>
    </div>
  );
}

function TestimonialCard({ quoteColor }: { quoteColor: string }) {
  return (
    <div className="relative bg-white rounded-[12px] p-[32px] flex flex-col gap-[74px] min-h-[280px]">
      <p
        className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#3c3c3c] text-[18px] sm:text-[22px] lg:text-[24px] leading-[1.4]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Bill is Amazing blah blah blah blahBill is Amazing blah blah blah blahBill is Amazing
        blah blah blah blah Bill is Amazing blah blah blah blahBill is Amazing blah blah blah
        blah
      </p>
      <div className="flex items-center gap-[17px]">
        <div className="shrink-0 w-[52px] h-[52px] rounded-full bg-[#D9D9D9]" />
        <div className="flex flex-col gap-[6px]">
          <p
            className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#3c3c3c] text-[20px] leading-[32px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Etorjah Okon
          </p>
          <p
            className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#3c3c3c] text-[14px] leading-[32px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Developer, Dev Spent
          </p>
        </div>
      </div>
      <QuoteIcon color={quoteColor} />
    </div>
  );
}

export default function TestimonialsWrapper() {
  return (
    <div className="bg-black w-full px-4 sm:px-8 lg:px-[120px] py-10 sm:py-16">
      <div className="max-w-[1270px] mx-auto">
        {/* heading */}
        <p
          className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-white text-[22px] sm:text-[32px] lg:text-[40px] leading-tight uppercase mb-8 sm:mb-10"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Beyond the works, what working with me feels like
        </p>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 sm:mb-16">
          <TestimonialCard quoteColor="#00FC76" />
          <TestimonialCard quoteColor="#FCCE00" />
        </div>

        {/* footer */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p
            className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-white text-[16px] sm:text-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            © 2026 Bill Aniekan
          </p>
          <div className="bg-[#d629cc] flex gap-[12px] items-center px-[12px] py-[12px] rounded-[8px] cursor-pointer">
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
          </div>
        </div>
      </div>
    </div>
  );
}
