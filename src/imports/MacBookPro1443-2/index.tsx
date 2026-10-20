function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[122px] px-[10px] py-[4px] top-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Overview
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[122px] px-[10px] py-[4px] top-[283px]">
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        The problem
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[100px] left-[117px] top-[618px] w-[1279px]">
      <div className="absolute bg-[#fcce00] h-[100px] left-0 top-0 w-[1279px]" />
      <p className="[word-break:break-word] absolute font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.45] left-[21px] text-[18px] text-black top-[24px] w-[1227px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        A Norton Family survey found over 70% of kids aged 8–12 use the internet daily, yet fewer than 15% understand the basics of online safety — a real gap between exposure and readiness for exactly the age range Quanvaulte serves.
      </p>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 43">
      <Frame />
      <div className="[word-break:break-word] absolute font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1px] left-[122px] text-[18px] text-white top-[57px] w-[1274px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="mb-0">
          <span className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[38px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Quanvaulte is an EdTech platform designed to make learning technology fun, engaging, and accessible for kids aged 8–16.
          </span>
          <span className="leading-[38px]">{` The platform combines interactive learning with community, gamification, points, leaderboards, and illustrated learning experiences to keep young learners motivated as they build their tech skills.`}</span>
        </p>
        <p>
          <span className="leading-[38px]">{`Alongside the student experience, I also worked on `}</span>
          <span className="[word-break:break-word] font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[38px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            parent and school
          </span>
          <span className="leading-[38px]">{` dashboards that give parents and educators visibility into students’ learning activity, performance, progress, and overall engagement on the platform.`}</span>
        </p>
      </div>
      <Frame1 />
      <div className="[word-break:break-word] absolute font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1px] left-[122px] text-[18px] text-white top-[340px] w-[1274px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="mb-0">
          <span className="leading-[38px]">{`Learning technical skills like cybersecurity feels like an extension of the school day for kids, not something they want to do. Existing platforms make it worse: W3Schools-style resources are text-heavy and read like documentation, while video-first platforms like Coursera are built for adults, not children. Nowhere is there a genuinely fun, video-based way for an `}</span>
          <span className="leading-[38px] text-[#d629cc]">8–16 year old</span>
          <span className="leading-[38px]">{` to learn something as dense as cybersecurity.`}</span>
        </p>
        <p className="leading-[38px] mb-0">​</p>
        <p className="leading-[38px]">{`On top of that, parents and schools have no visibility into how a child is actually doing — there's no way to track progress or performance, so the people responsible for a child's learning are left guessing.`}</p>
      </div>
      <Frame2 />
    </div>
  );
}
