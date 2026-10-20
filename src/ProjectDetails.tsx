type ProjectDetailsProps = {
  company: string;
  timeline: string;
  industry: string;
};

export default function ProjectDetails({ company, timeline, industry }: ProjectDetailsProps) {
  return (
    <div className="w-full border-y border-white/20 bg-black py-10 sm:py-[50px]">
      <div className="grid grid-cols-2 gap-8 px-5 text-white sm:flex sm:justify-between sm:gap-4 sm:px-8 lg:px-[120px]">
        {[
          { label: "Company", value: company },
          { label: "Timeline", value: timeline },
          { label: "My Role", value: "Founding designer" },
          { label: "Industry", value: industry },
        ].map(({ label, value }) => (
          <div key={label} className="flex min-w-0 flex-col gap-[8px]">
            <p className="font-['Instrument_Sans:SemiBold'] text-[15px] font-semibold leading-[1.5] sm:text-[20px] sm:leading-[30px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              {label}
            </p>
            <p className="font-['Instrument_Sans:Bold'] text-[15px] font-bold leading-[1.5] sm:text-[32px] sm:leading-[48px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
