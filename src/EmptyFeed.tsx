interface EmptyFeedProps {
  projectName?: string;
  onSwitchToCaseStudy?: () => void;
}

export default function EmptyFeed({
  projectName,
  onSwitchToCaseStudy,
}: EmptyFeedProps) {
  return (
    <div className="w-full px-5 py-12 sm:px-8 sm:py-20 lg:px-[120px]">
      <div className="mx-auto flex max-w-[820px] flex-col items-center justify-center rounded-[20px] border border-white/10 bg-[#121212]/90 px-6 py-16 text-center shadow-2xl sm:px-12 sm:py-24">
        {/* Subtle accent icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#d629cc]/30 bg-[#d629cc]/10 text-[#d629cc] sm:h-20 sm:w-20">
          <svg
            className="h-8 w-8 sm:h-10 sm:w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </div>

        <span
          className="rounded-full bg-[#d629cc]/15 px-3 py-1 font-['Instrument_Sans:Medium',sans-serif] text-[12px] font-medium tracking-wider text-[#d629cc] uppercase sm:text-[13px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {projectName ? `${projectName} Feed` : "Project Feed"}
        </span>

        <h3
          className="mt-4 font-['Instrument_Sans:Bold',sans-serif] text-[24px] font-bold leading-tight text-white sm:text-[32px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          No feed updates yet
        </h3>

        <p
          className="mt-3 max-w-[480px] font-['Instrument_Sans:Medium',sans-serif] text-[15px] font-medium leading-[26px] text-white/60 sm:text-[17px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {"There are no feed posts or behind-the-scenes updates for this project yet. Check back soon!"}
        </p>

        {onSwitchToCaseStudy && (
          <button
            type="button"
            onClick={onSwitchToCaseStudy}
            className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-[8px] border-0 bg-[#d629cc] px-6 py-3 font-['Instrument_Sans:SemiBold',sans-serif] text-[14px] font-semibold text-white shadow-lg shadow-[#d629cc]/25 transition-colors duration-200 hover:bg-[#b822af] sm:text-[15px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <span>Switch to Case study</span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
