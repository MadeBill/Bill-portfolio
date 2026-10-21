import ProjectTabs, { type ProjectTab } from "@/ProjectTabs";

const assetPathPrefix = "/assets/quanvaulte-mobile";
const imgGeminiGeneratedImage8Pkx998Pkx998PkxRemovebgPreview1 = `${assetPathPrefix}/ceb8a.png`;
const imgWhisk3Eae3855Faa0794B6704Fe52Ec9Aa901Dr1 = `${assetPathPrefix}/91474.png`;
const imgWhisk74A0002Dec0Ef92A3F44A37444546328DrRemovebgPreview3 = `${assetPathPrefix}/d2b30.png`;
const imgImage5 = `${assetPathPrefix}/f338d.png`;
const imgImage6 = `${assetPathPrefix}/3343b.png`;
const imgWhisk3D585De733B3469B38E4C0C93B903E2Bdr1 = `${assetPathPrefix}/991b3.png`;
const imgWhiskE4D787Afd1A41F593Fa4Ead0D3A5958BdrRemovebgPreview1 = `${assetPathPrefix}/be0d8.png`;
const imgImage112 = `${assetPathPrefix}/01b77.png`;
const imgImage111 = `${assetPathPrefix}/7e5b5.png`;
const imgImage109 = `${assetPathPrefix}/58563.png`;
const imgImage110 = `${assetPathPrefix}/7b896.png`;
const imgImageRemovebgPreview91 = `${assetPathPrefix}/25ce8.png`;
const imgImage113 = `${assetPathPrefix}/aa53b.png`;
const imgImage114 = `${assetPathPrefix}/e0cf3.png`;
const imgStudent11 = `${assetPathPrefix}/f577b.png`;
const imgButtonChoice = `${assetPathPrefix}/button-choice.png`;
const imgFeatureCards = `${assetPathPrefix}/feature-cards.png`;
const imgEllipse4 = `${assetPathPrefix}/df190.svg`;
const imgEllipse5 = `${assetPathPrefix}/6c0ed.svg`;
const imgEllipse6 = `${assetPathPrefix}/f5bda.svg`;
const imgEllipse7 = `${assetPathPrefix}/97776.svg`;
const imgRectangle70 = `${assetPathPrefix}/cb529.svg`;
const imgRectangle71 = `${assetPathPrefix}/f3e34.svg`;
const imgVector = `${assetPathPrefix}/f3396.svg`;
const imgVector1 = `${assetPathPrefix}/52e82.svg`;
const imgGroup = `${assetPathPrefix}/5cabc.svg`;
const imgGroup1 = `${assetPathPrefix}/37e55.svg`;

interface QuanvaulteMobileProps {
  activeTab?: ProjectTab;
  onTabChange?: (tab: ProjectTab) => void;
}

export default function QuanvaulteMobile({
  activeTab = "casestudy",
  onTabChange,
}: QuanvaulteMobileProps) {
  return (
    <div className="quanvaulte-mobile-design relative size-full bg-black" data-node-id="305:9" data-name="iPhone 13 & 14 - 56">
      <div className="absolute left-[18px] top-[20.56px] z-10" data-node-id="305:10">
        <ProjectTabs
          activeTab={activeTab}
          onTabChange={(tab) => onTabChange?.(tab)}
        />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[18px] top-[91px] w-[352px]" data-node-id="305:16">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="305:17">
          <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-node-id="305:18">
            <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[15px] whitespace-nowrap" data-node-id="305:19" style={{ fontVariationSettings: '"wdth" 100' }}>
              Overview
            </p>
          </div>
          <div className="[word-break:break-word] font-['Instrument_Sans:Medium'] font-medium leading-[1px] min-w-full relative shrink-0 text-[1px] text-white w-[min-content]" data-node-id="305:20" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="mb-0 text-[15px]">
              <span className="[word-break:break-word] font-['Instrument_Sans:Medium'] font-medium leading-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                Quanvaulte is an EdTech platform designed to make learning technology fun, engaging, and accessible for kids aged 8–16.
              </span>
              <span className="leading-[24px]">{` The platform combines interactive learning with community, gamification, points, leaderboards, and illustrated learning experiences to keep young learners motivated as they build their tech skills.`}</span>
            </p>
            <p className="text-[15px]">
              <span className="leading-[24px]">{`Alongside the student experience, I also worked on `}</span>
              <span className="[word-break:break-word] font-['Instrument_Sans:Medium'] font-medium leading-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                parent and school
              </span>
              <span className="leading-[24px]">{` dashboards that give parents and educators visibility into students’ learning activity, performance, progress, and overall engagement on the platform.`}</span>
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="305:21">
          <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-node-id="305:22">
            <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[15px] whitespace-nowrap" data-node-id="305:23" style={{ fontVariationSettings: '"wdth" 100' }}>
              The problem
            </p>
          </div>
          <div className="[word-break:break-word] font-['Instrument_Sans:Medium'] font-medium leading-[1px] min-w-full relative shrink-0 text-[1px] text-white w-[min-content] whitespace-pre-wrap" data-node-id="305:24" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="mb-0 text-[15px]">
              <span className="leading-[24px]">{`Learning technical skills like cybersecurity feels like an extension of the school day for kids, not something they want to do. Existing platforms make it worse: W3Schools-style resources are text-heavy and read like documentation, while video-first platforms like Coursera are built for adults, not children. Nowhere is there a genuinely fun, video-based way for an `}</span>
              <span className="leading-[24px] text-[#d629cc]">8–16 year old</span>
              <span className="leading-[24px]">{` to learn something as dense as cybersecurity.`}</span>
            </p>
            <p className="leading-[24px] mb-0 text-[15px]">​</p>
            <p className="leading-[24px] text-[15px]">{`On top of that, parents and schools have no visibility into how a child is actually doing — there's no way to track progress or performance, so the people responsible for a child's learning are left guessing.`}</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[20px] px-[10px] py-[4px] top-[1059px]" data-node-id="305:25">
        <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[15px] whitespace-nowrap" data-node-id="305:26" style={{ fontVariationSettings: '"wdth" 100' }}>
          Research and discovery
        </p>
      </div>
      <div className="[word-break:break-word] absolute font-['Instrument_Sans:Medium'] font-medium h-auto leading-[1.6] left-[23px] text-white top-[1105px] w-[347px]" data-node-id="305:27" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="font-['Instrument_Sans:Medium'] font-medium leading-[1.6] mb-0 text-[15px]">Before designing a single screen, I conducted surveys and spoke directly with children aged 8–16, the actual users of the platform. I wanted to understand how they learn, what keeps them engaged, and what makes them lose interest. Their feedback helped shape my design decisions from the start.</p>
        
        <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] mb-0 mt-[24px] text-[#fcce00] text-[15px]">My research approach</p>
        
        <p className="leading-[1.6] mb-0 mt-[12px] text-[15px]">
          I designed a two-part research approach. First,{" "}
          <strong className="font-['Instrument_Sans:Bold'] font-bold text-white">
            a survey sent to parents of school-age children
          </strong>{" "}
          in Topfaith(Uyo) and Excel (Uyo), focused on their expectations around progress visibility and trust. Second — and more valuable — direct qualitative sessions with children in the target age range: short guided conversations where I asked about how they currently learn, what makes them quit something, and what makes them want to come back.
        </p>

        <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] mb-0 mt-[24px] text-[#fcce00] text-[15px]">What they told me — and what I did with it</p>

        <div className="mt-[16px] flex flex-col gap-[16px]">
          <div>
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] mb-0 text-white text-[15px]">Video makes learning easier to follow</p>
            <p className="leading-[1.6] mb-0 mt-[4px] text-[#cfcbcb] text-[14px]">The children preferred watching someone explain or demonstrate something over reading long texts. So I made video the primary learning format, with text for summaries, captions, and definitions.</p>
          </div>

          <div>
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] mb-0 text-white text-[15px]">Learning is more fun together</p>
            <p className="leading-[1.6] mb-0 mt-[4px] text-[#cfcbcb] text-[14px]">The children felt learning was more enjoyable with friends, and competition made it even more motivating. This shaped the community feature, live classrooms, group-based learning, and optional class leaderboards.</p>
          </div>

          <div>
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] mb-0 text-white text-[15px]">Rewards keep them motivated</p>
            <p className="leading-[1.6] mb-0 mt-[4px] text-[#cfcbcb] text-[14px]">Completing a lesson without recognition felt incomplete to the children. This informed the use of XP, badges, and new challenges to make progress feel rewarding and encourage them to keep learning.</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[23px] px-[10px] py-[4px] top-[2120px]" data-node-id="305:28">
        <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[15px] whitespace-nowrap" data-node-id="305:29" style={{ fontVariationSettings: '"wdth" 100' }}>
          Design system decision
        </p>
      </div>
      <div className="absolute min-h-[740px] left-[23px] top-[2166px] w-[349px] overflow-hidden rounded-[4px]" data-node-id="305:30">
        <div className="absolute inset-0 bg-[#332a00]" data-node-id="305:31" />
        <div className="relative bg-[#fcce00] h-[54px] w-full px-[14px] flex items-center justify-between" data-node-id="305:32">
          <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] text-[#060606] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Design system
          </p>
          <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] text-[#060606] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Reason for choice color
          </p>
        </div>
        <div className="relative px-[14px] pt-[20px] pb-[28px] flex flex-col gap-[28px] w-full text-white">
          <div className="flex gap-[14px] items-start w-full">
            <p className="w-[72px] shrink-0 font-['Instrument_Sans:SemiBold'] font-semibold text-[13px] text-white leading-[1.45]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Color
            </p>
            <div className="flex-1 min-w-0 font-['Inter:Medium'] font-medium text-[12.5px] leading-[1.55] text-white space-y-[10px]">
              <p className="m-0 break-words">{`Blue carries authority, stability, and focus. Yellow carries joy, warmth, optimism, and attention. Together they cover both ends of the emotional register a children's platform needs — "this is serious and structured" (blue) and "this is fun and rewarding" (yellow). Neither color alone does that job.`}</p>
              <p className="m-0 break-words">I use other colors with same use hue and light for different courses( Each course have their color) to bring fun feels</p>
            </div>
          </div>
          <div className="flex gap-[14px] items-start w-full">
            <p className="w-[72px] shrink-0 font-['Instrument_Sans:SemiBold'] font-semibold text-[13px] text-white leading-[1.45]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Typography
            </p>
            <p className="flex-1 min-w-0 font-['Inter:Medium'] font-medium text-[12.5px] leading-[1.55] text-white break-words m-0">
              Baloo was chosen because it is the best option rounded typeface that a child finds welcoming and feels fun for the users
            </p>
          </div>
          <div className="flex gap-[14px] items-start w-full">
            <p className="w-[72px] shrink-0 font-['Instrument_Sans:SemiBold'] font-semibold text-[13px] text-white leading-[1.45]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Spaces
            </p>
            <div className="flex-1 min-w-0 font-['Inter:Medium'] font-medium text-[12.5px] leading-[1.55] text-white space-y-[8px]">
              <p className="font-semibold m-0 break-words">{`Why I chose larger spacing for a children's platform`}</p>
              <p className="m-0 break-words">{`Children aged 8–12 don't process interfaces the same way adults do. Adults are more familiar with common UI patterns, while children are still learning how to navigate them.`}</p>
              <p className="m-0 break-words">Tight spacing can make elements feel cluttered and harder to understand. Larger spacing makes it easier to see what belongs together, what to focus on, and what to do next.</p>
              <p className="m-0 break-words">For me, the goal was to reduce cognitive load and make the experience feel clear, intuitive, and easy for children to use.</p>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Instrument_Sans:Bold'] font-bold h-[19px] leading-[24px] left-[20px] text-[#fcce00] text-[15px] top-[3200px] w-[660px]" data-node-id="305:45" style={{ fontVariationSettings: '"wdth" 100' }}>
        Choice of illustration over images and why?
      </p>
      <div className="[word-break:break-word] absolute font-['Instrument_Sans:Medium'] font-medium leading-[1px] left-[20px] text-[15px] text-white top-[3233px] w-[337px]" data-node-id="305:46" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px] mb-0">I introduced two recurring illustrated characters across the student experience, from onboarding and lesson completions to quiz results, streaks, and empty states.</p>
        <p className="leading-[24px]">Inspired by Duolingo, the goal was to make the characters more than decoration. For children aged 8–12, familiar faces can make learning feel more personal and create continuity between sessions.</p>
      </div>
      <div className="absolute bg-[#fcce00] h-[263px] left-[19px] top-[3460px] w-[351px]" data-node-id="305:47" />
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start justify-center left-[49px] top-[3475px]" data-node-id="305:48">
        <div className="h-[185.25px] relative shrink-0 w-[304px]" data-node-id="305:49" data-name="Gemini_Generated_Image_8pkx998pkx998pkx-removebg-preview 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImage8Pkx998Pkx998PkxRemovebgPreview1} />
        </div>
        <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[51px] relative shrink-0 text-[20px] text-black whitespace-nowrap" data-node-id="305:50" style={{ fontVariationSettings: '"wdth" 100' }}>
          Hi, meet Ubong and Otobong
        </p>
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[14px] items-start left-[20px] text-[15px] top-[3764px] w-[660px]" data-node-id="305:51">
        <p className="font-['Instrument_Sans:Bold'] font-bold h-[14px] leading-[1.45] min-w-full relative shrink-0 text-[#fcce00] w-[min-content] whitespace-pre-wrap" data-node-id="305:52" style={{ fontVariationSettings: '"wdth" 100' }}>{`Choice of  icons`}</p>
        <div className="font-['Instrument_Sans:Medium'] font-medium leading-[1px] relative shrink-0 text-white w-[350px]" data-node-id="305:53" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[24px] mb-0">{`I chose 3D illustration-style icons to make the platform playful and engaging for children aged 8–16 without feeling childish.`}</p>
          <p className="leading-[24px]">{`Their familiar shapes make icons easier to recognise, while their depth and tactile feel complement the illustrated characters, creating a consistent visual experience.`}</p>
        </div>
      </div>
      <div className="absolute h-[276px] left-[20px] top-[3966px] w-[348px]" data-node-id="305:54">
        <div className="absolute bg-[#fcce00] h-[276px] left-0 top-0 w-[348px]" data-node-id="305:55" />
        <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-[17px] top-[18px]" data-node-id="305:56">
          <div className="h-[180.016px] relative shrink-0 w-[306.137px]" data-node-id="305:57">
            <div className="absolute h-[51.486px] left-0 top-[15.22px] w-[56.326px]" data-node-id="305:58" data-name="Whisk_3eae3855faa0794b6704fe52ec9aa901dr 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhisk3Eae3855Faa0794B6704Fe52Ec9Aa901Dr1} />
            </div>
            <div className="absolute h-[71.172px] left-[138.8px] top-[64.48px] w-[63.6px]" data-node-id="305:59" data-name="Whisk_74a0002dec0ef92a3f44a37444546328dr-removebg-preview 3">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhisk74A0002Dec0Ef92A3F44A37444546328DrRemovebgPreview3} />
            </div>
            <div className="absolute h-[38.213px] left-[40.3px] top-[115.52px] w-[66.013px]" data-node-id="305:60" data-name="image 5">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
            </div>
            <div className="absolute h-[37.632px] left-[223.87px] top-[142.38px] w-[82.263px]" data-node-id="305:61" data-name="image 6">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
            </div>
            <div className="absolute h-[64.358px] left-[205.07px] top-0 w-[51.286px]" data-node-id="305:62" data-name="Whisk_3d585de733b3469b38e4c0c93b903e2bdr 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhisk3D585De733B3469B38E4C0C93B903E2Bdr1} />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[51px] relative shrink-0 text-[20px] text-black whitespace-nowrap" data-node-id="305:63" style={{ fontVariationSettings: '"wdth" 100' }}>
            Icon feels i went with
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[14px] items-start left-[20px] text-[15px] top-[4282px] w-[348px]" data-node-id="305:64">
        <p className="font-['Instrument_Sans:Bold'] font-bold h-[19px] leading-[1.45] relative shrink-0 text-[#fcce00] w-full whitespace-pre-wrap" data-node-id="305:65" style={{ fontVariationSettings: '"wdth" 100' }}>{`Choice of  button`}</p>
        <p className="font-['Instrument_Sans:Medium'] font-medium leading-[24px] relative shrink-0 text-white w-full" data-node-id="305:66" style={{ fontVariationSettings: '"wdth" 100' }}>
          I used the button with the shadow to bring in the fun feel to the platform and also cause it give the attention of press me, which is what i want for the CTA, i also made the primary blue, secondary and button and the 3rd as the white
        </p>
        <div className="aspect-[343/142] mt-[6px] overflow-hidden relative shrink-0 w-full">
          <img alt="Primary, secondary, and tertiary button choices" className="absolute inset-0 object-cover pointer-events-none size-full" src={imgButtonChoice} />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[20px] top-[4615px] w-[354px]" data-node-id="305:67">
        <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-node-id="305:68">
          <p className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[15px] whitespace-nowrap" data-node-id="305:69" style={{ fontVariationSettings: '"wdth" 100' }}>
            Features decision
          </p>
        </div>
        <div className="[word-break:break-word] font-['Instrument_Sans:Medium'] font-medium leading-[1px] relative shrink-0 text-[1px] text-white w-[354px] whitespace-pre-wrap" data-node-id="305:70" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="mb-0 text-[15px]">
            <span className="leading-[24px]">{`Every feature in the student experience came from something I learned during research. `}</span>
            <span className="[word-break:break-word] font-['Instrument_Sans:Bold'] font-bold leading-[24px] text-[#d629cc]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Leaderboards
            </span>
            <span className="leading-[24px]">{` came from the children’s interest in competing with friends, while `}</span>
            <span className="[word-break:break-word] font-['Instrument_Sans:SemiBold'] font-semibold leading-[24px] text-[#d629cc]" style={{ fontVariationSettings: '"wdth" 100' }}>
              XP
            </span>
            <span className="leading-[24px]">{` and `}</span>
            <span className="[word-break:break-word] font-['Instrument_Sans:SemiBold'] font-semibold leading-[24px] text-[#d629cc]" style={{ fontVariationSettings: '"wdth" 100' }}>
              badges
            </span>
            <span className="leading-[24px]">{` were designed to make their progress feel rewarding. `}</span>
            <span className="[word-break:break-word] font-['Instrument_Sans:SemiBold'] font-semibold leading-[24px] text-[#d629cc]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Community
            </span>
            <span className="leading-[24px]">{` was built around their desire to learn together, not alone.`}</span>
          </p>
          <p className="leading-[24px] mb-0 text-[15px]">​</p>
          <p className="text-[15px]">
            <span className="leading-[24px]">{`I also introduced `}</span>
            <span className="[word-break:break-word] font-['Instrument_Sans:SemiBold'] font-semibold leading-[24px] text-[#d629cc]" style={{ fontVariationSettings: '"wdth" 100' }}>
              streaks
            </span>
            <span className="leading-[24px]">{` to encourage consistency and give students a reason to return and keep learning.`}</span>
          </p>
        </div>
      </div>
      <div className="absolute h-[146px] left-[20px] overflow-clip top-[4880px] w-[349px]" data-node-id="305:71">
        <img alt="Feature cards introduced from research" className="absolute inset-0 object-cover pointer-events-none size-full z-10" src={imgFeatureCards} />
        <div className="absolute bg-[#fcce00] h-[145.455px] left-0 top-0 w-[617.604px]" data-node-id="305:72" />
        <div className="absolute contents left-[130.58px] top-[7.9px]" data-node-id="305:73">
          <div className="absolute bg-[#fbf6da] h-[129.853px] left-[130.58px] rounded-[3.566px] top-[7.9px] w-[79.932px]" data-node-id="305:74">
            <div className="absolute content-stretch flex gap-[1.189px] items-center justify-center left-[5.35px] top-[5.65px]" data-node-id="305:75">
              <div className="h-[7.168px] relative shrink-0 w-[15.669px]" data-node-id="305:76" data-name="image 6">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
              </div>
              <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[5.644px] relative shrink-0 text-[#090d2f] text-[4.16px] text-center whitespace-nowrap" data-node-id="305:77">
                Leader board
              </p>
            </div>
          </div>
          <div className="absolute h-[28.526px] left-[141.88px] top-[45.34px] w-[58.538px]" data-node-id="305:78" data-name="Whisk_e4d787afd1a41f593fa4ead0d3a5958bdr-removebg-preview 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[243.75%] left-[-63.02%] max-w-none top-[-96.87%] w-[217.93%]" src={imgWhiskE4D787Afd1A41F593Fa4Ead0D3A5958BdrRemovebgPreview1} />
            </div>
          </div>
          <div className="absolute contents left-[138.9px] top-[26.86px]" data-node-id="305:79">
            <div className="absolute content-stretch flex flex-col gap-[1.486px] items-center justify-center left-[146.33px] top-[35.18px] w-[10.816px]" data-node-id="305:80">
              <div className="content-stretch flex flex-col gap-[1.189px] items-center justify-center relative shrink-0 w-full" data-node-id="305:81">
                <div className="overflow-clip relative rounded-[7.429px] shrink-0 size-[7.429px]" data-node-id="305:82">
                  <div className="absolute left-0 size-[7.429px] top-0" data-node-id="305:83">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} />
                  </div>
                  <div className="absolute h-[5.984px] left-[0.59px] top-[1.49px] w-[5.903px]" data-node-id="305:84" data-name="image 112">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage112} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[5.644px] min-w-full relative shrink-0 text-[#0c0c0c] text-[4.16px] text-center w-[min-content]" data-node-id="305:85">
                  Bill
                </p>
              </div>
              <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[1px] relative shrink-0 text-[#313131] text-[1px] text-center w-full" data-node-id="305:86">
                <span className="leading-[3.325px] text-[3.269px]">220</span>
                <span className="leading-[3.325px] text-[2.451px]">Qan</span>
              </p>
            </div>
            <div className="absolute h-[34.172px] left-[138.9px] top-[84.86px] w-[63.292px]" data-node-id="305:87">
              <div className="absolute h-[48.435px] left-[-0.3px] top-0 w-[64.184px]" data-node-id="305:88" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[1.486px] items-center left-[165.95px] top-[26.86px] w-[10.4px]" data-node-id="305:89">
              <div className="content-stretch flex flex-col gap-[1.189px] items-center justify-center relative shrink-0 w-[9.806px]" data-node-id="305:90">
                <div className="overflow-clip relative rounded-[9.331px] shrink-0 size-[9.212px]" data-node-id="305:91">
                  <div className="absolute left-0 size-[9.331px] top-[-0.24px]" data-node-id="305:92">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} />
                  </div>
                  <div className="absolute h-[7.14px] left-[1.49px] top-[2px] w-[7.043px]" data-node-id="305:93" data-name="image 111">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage111} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[5.644px] min-w-full relative shrink-0 text-[#0c0c0c] text-[4.16px] text-center w-[min-content]" data-node-id="305:94">
                  Bill
                </p>
              </div>
              <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[1px] min-w-full relative shrink-0 text-[#313131] text-[1px] text-center w-[min-content]" data-node-id="305:95">
                <span className="leading-[3.325px] text-[3.269px]">220</span>
                <span className="leading-[3.325px] text-[2.451px]">Qan</span>
              </p>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[1.486px] items-center left-[186.75px] top-[40.29px] w-[10.4px]" data-node-id="305:96">
              <div className="content-stretch flex flex-col gap-[1.189px] items-start relative shrink-0 w-[9.331px]" data-node-id="305:97">
                <div className="aspect-[25.000001907348633/25.000001907348633] border-[#dbdbdb] border-[0.373px] border-solid overflow-clip relative rounded-[9.331px] shrink-0 w-full" data-node-id="305:98">
                  <div className="absolute left-[-0.37px] size-[9.331px] top-[-0.37px]" data-node-id="305:99">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} />
                  </div>
                  <div className="absolute h-[7.63px] left-[0.75px] top-[1.12px] w-[7.527px]" data-node-id="305:100" data-name="image 109">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage109} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[5.644px] relative shrink-0 text-[#0c0c0c] text-[4.16px] text-center w-full" data-node-id="305:101">
                  Bill
                </p>
              </div>
              <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[1px] min-w-full relative shrink-0 text-[#313131] text-[1px] text-center w-[min-content]" data-node-id="305:102">
                <span className="leading-[3.325px] text-[3.269px]">220</span>
                <span className="leading-[3.325px] text-[2.451px]">Qan</span>
              </p>
            </div>
          </div>
          <div className="absolute bg-white content-stretch flex gap-[2.377px] h-[12.183px] items-center left-[135.64px] px-[3.566px] py-[2.377px] rounded-[2.377px] top-[84.86px] w-[71.018px]" data-node-id="305:103">
            <p className="[word-break:break-word] font-['Baloo:Regular'] leading-[3.325px] not-italic relative shrink-0 text-[#404040] text-[4.16px] text-center whitespace-nowrap" data-node-id="305:104">
              4
            </p>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[58.538px]" data-node-id="305:105">
              <div className="content-stretch flex gap-[1.189px] items-center relative shrink-0" data-node-id="305:106">
                <div className="overflow-clip relative rounded-[7.429px] shrink-0 size-[7.429px]" data-node-id="305:107">
                  <div className="absolute left-0 size-[7.429px] top-0" data-node-id="305:108">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
                  </div>
                  <div className="absolute h-[6.075px] left-[0.59px] top-[1.78px] w-[5.993px]" data-node-id="305:109" data-name="image 110">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage110} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[5.644px] relative shrink-0 text-[#404040] text-[4.16px] text-center w-[7.429px]" data-node-id="305:110">
                  Bill
                </p>
              </div>
              <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[1px] relative shrink-0 text-[1px] text-center text-white whitespace-nowrap" data-node-id="305:111">
                <span className="font-['Baloo_2:Bold'] font-bold leading-[3.325px] text-[#404040] text-[3.501px]">220</span>
                <span className="font-['Baloo_2:Bold'] font-bold leading-[3.325px] text-[#404040] text-[2.451px]">Qan</span>
              </p>
            </div>
          </div>
          <div className="absolute bg-[#2c43eb] content-stretch flex gap-[2.971px] h-[12.183px] items-center left-[135.64px] px-[3.566px] py-[2.377px] rounded-[2.377px] top-[102.99px] w-[71.018px]" data-node-id="305:112">
            <p className="[word-break:break-word] font-['Baloo:Regular'] leading-[3.325px] not-italic relative shrink-0 text-[4.16px] text-center text-white whitespace-nowrap" data-node-id="305:113">
              5
            </p>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[58.538px]" data-node-id="305:114">
              <div className="content-stretch flex gap-[1.189px] items-center relative shrink-0" data-node-id="305:115">
                <div className="overflow-clip relative rounded-[7.429px] shrink-0 size-[7.429px]" data-node-id="305:116">
                  <div className="absolute left-0 size-[7.429px] top-0" data-node-id="305:117">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} />
                  </div>
                  <div className="absolute h-[5.984px] left-[0.59px] top-[1.49px] w-[5.903px]" data-node-id="305:118" data-name="image 112">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage112} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[5.644px] relative shrink-0 text-[4.16px] text-center text-white w-[7.429px]" data-node-id="305:119">
                  Bill
                </p>
              </div>
              <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[1px] relative shrink-0 text-[1px] text-center text-white whitespace-nowrap" data-node-id="305:120">
                <span className="font-['Baloo_2:Bold'] font-bold leading-[3.325px] text-[3.501px]">220</span>
                <span className="font-['Baloo_2:Bold'] font-bold leading-[3.325px] text-[2.451px]">Qan</span>
              </p>
            </div>
          </div>
          <div className="absolute bg-white content-stretch flex gap-[2.971px] h-[12.183px] items-center left-[135.64px] px-[3.566px] py-[2.377px] rounded-[2.377px] top-[121.11px] w-[71.018px]" data-node-id="305:121">
            <p className="[word-break:break-word] font-['Baloo:Regular'] leading-[3.325px] not-italic relative shrink-0 text-[#404040] text-[4.16px] text-center whitespace-nowrap" data-node-id="305:122">
              6
            </p>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[58.538px]" data-node-id="305:123">
              <div className="content-stretch flex gap-[1.189px] items-center relative shrink-0" data-node-id="305:124">
                <div className="overflow-clip relative rounded-[7.429px] shrink-0 size-[7.429px]" data-node-id="305:125">
                  <div className="absolute left-0 size-[7.429px] top-0" data-node-id="305:126">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
                  </div>
                  <div className="absolute h-[6.075px] left-[0.89px] top-[1.19px] w-[5.993px]" data-node-id="305:127" data-name="image 109">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage109} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[5.644px] relative shrink-0 text-[#404040] text-[4.16px] text-center w-[7.429px]" data-node-id="305:128">
                  Bill
                </p>
              </div>
              <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[1px] relative shrink-0 text-[1px] text-center text-white whitespace-nowrap" data-node-id="305:129">
                <span className="font-['Baloo_2:Bold'] font-bold leading-[3.325px] text-[#404040] text-[3.501px]">220</span>
                <span className="font-['Baloo_2:Bold'] font-bold leading-[3.325px] text-[#404040] text-[2.451px]">Qan</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[24.17px] top-[7.43px]" data-node-id="305:130">
          <div className="absolute bg-[#fbf6da] h-[97.309px] left-[24.17px] rounded-[4.141px] top-[7.43px] w-[92.478px]" data-node-id="305:131" />
          <div className="absolute bg-[#fbf6da] content-stretch flex gap-[1.38px] h-[8.282px] items-center left-[31.04px] top-[12.96px] w-[39.225px]" data-node-id="305:132">
            <div className="h-[8.282px] relative shrink-0 w-[6.245px]" data-node-id="305:133" data-name="image-removebg-preview (9) 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRemovebgPreview91} />
            </div>
            <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[6.554px] relative shrink-0 text-[#2f2909] text-[4.831px] text-center w-[31.746px]" data-node-id="305:134">
              Unlock Badges
            </p>
          </div>
          <div className="absolute bg-[#fbf6da] content-stretch flex flex-col h-[30.711px] items-start left-[31.04px] top-[28.14px] w-[78.726px]" data-node-id="305:135">
            <div className="bg-[#efedfd] content-stretch flex flex-col h-[30.711px] items-start px-[4.831px] py-[2.761px] relative rounded-[6.901px] shrink-0 w-full" data-node-id="305:136">
              <div className="content-stretch flex flex-col gap-[3.796px] items-start relative shrink-0 w-[66.598px]" data-node-id="305:137">
                <div className="h-[16.563px] relative shrink-0 w-full" data-node-id="305:138">
                  <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4.141px] items-start leading-[6.554px] left-[22.77px] top-[3.11px] w-[40.718px]" data-node-id="305:139">
                    <p className="font-['Baloo:Regular'] not-italic relative shrink-0 text-[#d142f9] text-[5.521px] w-full whitespace-pre-wrap" data-node-id="305:140">{`First  step`}</p>
                    <p className="font-['Baloo_2:Medium'] font-medium relative shrink-0 text-[#737373] text-[4.831px] text-center w-full" data-node-id="305:141">
                      Complete 4 lessons
                    </p>
                  </div>
                  <div className="absolute contents left-0 top-[0.34px]" data-node-id="305:142">
                    <div className="absolute h-[14.212px] left-[0.41px] top-[0.34px] w-[15.466px]" data-node-id="305:143" data-name="image 109">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage113} />
                    </div>
                    <div className="absolute bg-white content-stretch flex h-[5.176px] items-center justify-center left-0 px-[0.69px] py-[1.035px] rounded-[6.901px] top-[10.93px] w-[15.873px]" data-node-id="305:144">
                      <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[1px] relative shrink-0 text-[#d142f9] text-[1px] text-center text-shadow-[0px_0.959px_0.959px_rgba(44,67,235,0.52)] whitespace-nowrap" data-node-id="305:145">
                        <span className="font-['Baloo_2:Bold'] font-bold leading-[4.554px] text-[4.796px]">220</span>
                        <span className="font-['Baloo_2:Bold'] font-bold leading-[4.554px] text-[3.357px]">Qan</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col h-[4.141px] items-start relative rounded-[6.901px] shrink-0 w-full" data-node-id="305:146">
                  <div className="h-[4.141px] relative shrink-0 w-[23.119px]" data-node-id="305:147">
                    <div className="absolute inset-[0_5.86%_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgRectangle70} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#fbf6da] content-stretch flex flex-col h-[30.711px] items-start left-[31.04px] top-[67.13px] w-[78.726px]" data-node-id="305:148">
            <div className="bg-[#fdcece] content-stretch flex flex-col h-[30.711px] items-start px-[4.831px] py-[2.761px] relative rounded-[6.901px] shrink-0 w-full" data-node-id="305:149">
              <div className="content-stretch flex flex-col gap-[3.796px] items-start relative shrink-0 w-[66.598px]" data-node-id="305:150">
                <div className="content-stretch flex gap-[6.901px] items-center relative shrink-0 w-full" data-node-id="305:151">
                  <div className="h-[15.877px] relative shrink-0 w-[19.38px]" data-node-id="305:152">
                    <div className="absolute h-[15.877px] left-0 top-0 w-[19.38px]" data-node-id="305:153" data-name="image 109">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage114} />
                    </div>
                    <div className="absolute bg-white content-stretch flex h-[6.513px] items-center justify-center left-0 px-[0.868px] py-[1.303px] rounded-[8.685px] top-[9.22px] w-[19.975px]" data-node-id="305:154">
                      <p className="[word-break:break-word] font-['Baloo_2:SemiBold'] font-semibold leading-[1px] relative shrink-0 text-[#eb2c2c] text-[1px] text-center text-shadow-[0px_1.207px_1.207px_rgba(249,66,66,0.05)] whitespace-nowrap" data-node-id="305:155">
                        <span className="font-['Baloo_2:Bold'] font-bold leading-[5.731px] text-[6.035px]">220</span>
                        <span className="font-['Baloo_2:Bold'] font-bold leading-[5.731px] text-[4.225px]">Qan</span>
                      </p>
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[4.141px] items-start leading-[6.554px] relative shrink-0 w-[40.718px]" data-node-id="305:156">
                    <p className="font-['Baloo:Regular'] not-italic relative shrink-0 text-[#eb2c2c] text-[5.521px] w-full" data-node-id="305:157">
                      Prince of Cyber
                    </p>
                    <p className="font-['Baloo_2:Medium'] font-medium relative shrink-0 text-[#737373] text-[4.831px] text-center w-full" data-node-id="305:158">
                      Complete 4 lessons
                    </p>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col h-[4.141px] items-start relative rounded-[6.901px] shrink-0 w-full" data-node-id="305:159">
                  <div className="h-[4.141px] relative shrink-0 w-[23.119px]" data-node-id="305:160">
                    <div className="absolute inset-[0_5.86%_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgRectangle71} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[132.19px] top-[7.9px]" data-node-id="305:161">
          <div className="absolute bg-[#2c2ceb] h-[129.717px] left-[224.46px] rounded-[3.895px] top-[7.9px] w-[105.955px]" data-node-id="305:162" />
          <p className="[word-break:break-word] absolute font-['Baloo_2:Bold'] font-bold leading-[normal] left-[264.58px] text-[58.431px] text-white top-[41.01px] whitespace-nowrap" data-node-id="305:163">
            1
          </p>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Baloo_2:Bold'] font-bold leading-[11.069px] left-[277.54px] text-[9.349px] text-center text-white top-[86.39px] whitespace-nowrap" data-node-id="305:164">
            Day streak
          </p>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Baloo:Regular'] leading-[11.069px] left-[277.47px] not-italic text-[3.895px] text-center text-white top-[98.27px] whitespace-nowrap" data-node-id="305:165">
            Congratulations on your fist streak, lets get it going
          </p>
          <div className="absolute contents left-[132.19px] top-[14.13px]" data-node-id="305:166">
            <div className="absolute h-[8.959px] left-[230.69px] rounded-[1.753px] top-[14.13px] w-[93.489px]" data-node-id="305:167" style={{ backgroundImage: "linear-gradient(171.2775051235987deg, rgb(0, 204, 255) 14.801%, rgb(21, 32, 166) 84.161%)" }} />
            <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[269.45px] not-italic text-[2.727px] text-white top-[17.05px] whitespace-nowrap" data-node-id="305:168">
              March 2025
            </p>
            <div className="-translate-y-1/2 absolute flex items-center justify-center left-[51.44%] right-[48.06%] top-[calc(50%-53.99px)]" data-node-id="305:169" style={{ containerType: "size" }}>
              <div className="flex-none h-[hypot(97.9068cqw,-2.2447cqh)] rotate-[-90.72deg] skew-x-[1.53deg] w-[hypot(-2.09323cqw,-97.7553cqh)]">
                <div className="content-stretch flex flex-col items-start relative w-full" data-name="Frame">
                  <div className="h-[1.706px] relative shrink-0 w-[2.911px]" data-node-id="305:170" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute flex items-center justify-center left-[37.88%] right-[61.63%] top-[calc(50%-54.02px)]" data-node-id="305:171" style={{ containerType: "size" }}>
              <div className="flex-none h-[hypot(-99.4066cqw,0.637676cqh)] rotate-[89.8deg] skew-x-[0.43deg] w-[hypot(0.593419cqw,99.3623cqh)]">
                <div className="content-stretch flex flex-col items-start relative w-full" data-name="Frame">
                  <div className="h-[1.706px] relative shrink-0 w-[2.911px]" data-node-id="305:172" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white h-[14.802px] left-[230.69px] rounded-[1.948px] top-[116.58px] w-[93.1px]" data-node-id="305:173" />
            <div className="absolute content-stretch flex gap-[3.895px] items-center left-[232.64px] top-[117.36px]" data-node-id="305:174">
              <div className="content-stretch flex flex-col gap-[1.948px] items-center relative shrink-0 w-[6.233px]" data-node-id="305:175">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#2c43eb] text-[1.948px] text-center w-[min-content]" data-node-id="305:176">
                  Wed
                </p>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[1px] place-items-start relative shrink-0" data-node-id="305:177" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[6.233px]" data-node-id="305:178" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[1.948px] items-center relative shrink-0 w-[6.233px]" data-node-id="305:180">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#2c43eb] text-[1.948px] text-center w-[min-content]" data-node-id="305:181">
                  Thu
                </p>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[1px] place-items-start relative shrink-0" data-node-id="305:182" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[6.233px]" data-node-id="305:183" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[1.948px] items-center relative shrink-0 w-[6.233px]" data-node-id="305:185">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#2c43eb] text-[1.948px] text-center w-[min-content]" data-node-id="305:186">
                  Fri
                </p>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[1px] place-items-start relative shrink-0" data-node-id="305:187" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[6.233px]" data-node-id="305:188" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-[77.489px] bg-[#d142f9] content-stretch flex flex-col gap-[1.948px] items-center justify-center py-[1.558px] relative rounded-[1.948px] shrink-0 w-[8.57px]" data-node-id="305:190">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[1.948px] text-center text-white w-[min-content]" data-node-id="305:191">
                  Sat
                </p>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[1px] place-items-start relative shrink-0" data-node-id="305:192" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[6.233px]" data-node-id="305:193" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Semi_Bold'] font-semibold gap-[1.948px] items-center leading-[normal] not-italic relative shrink-0 w-[6.233px]" data-node-id="305:195">
                <p className="relative shrink-0 text-[#2c43eb] text-[1.948px] text-center w-full" data-node-id="305:196">
                  Sun
                </p>
                <p className="relative shrink-0 text-[#404040] text-[4.674px] w-full" data-node-id="305:197">
                  09
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Semi_Bold'] font-semibold gap-[1.948px] items-center leading-[normal] not-italic relative shrink-0 w-[6.233px]" data-node-id="305:198">
                <p className="min-w-full relative shrink-0 text-[#2c43eb] text-[1.948px] text-center w-[min-content]" data-node-id="305:199">
                  Mon
                </p>
                <p className="relative shrink-0 text-[#404040] text-[4.674px] w-[5.454px]" data-node-id="305:200">
                  10
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Semi_Bold'] font-semibold gap-[1.948px] items-center leading-[normal] not-italic relative shrink-0 w-[6.233px]" data-node-id="305:201">
                <p className="min-w-full relative shrink-0 text-[#2c43eb] text-[1.948px] text-center w-[min-content]" data-node-id="305:202">
                  Tue
                </p>
                <p className="relative shrink-0 text-[#404040] text-[4.674px] w-[4.674px]" data-node-id="305:203">
                  11
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Semi_Bold'] font-semibold gap-[1.948px] items-center leading-[normal] not-italic relative shrink-0 w-[6.233px]" data-node-id="305:204">
                <p className="min-w-full relative shrink-0 text-[#2c43eb] text-[1.948px] text-center w-[min-content]" data-node-id="305:205">
                  Tue
                </p>
                <p className="relative shrink-0 text-[#404040] text-[4.674px] w-[4.674px]" data-node-id="305:206">
                  11
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Semi_Bold'] font-semibold gap-[1.948px] items-center leading-[normal] not-italic relative shrink-0 w-[6.233px]" data-node-id="305:207">
                <p className="min-w-full relative shrink-0 text-[#2c43eb] text-[1.948px] text-center w-[min-content]" data-node-id="305:208">
                  Tue
                </p>
                <p className="relative shrink-0 text-[#404040] text-[4.674px] w-[4.674px]" data-node-id="305:209">
                  11
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['Instrument_Sans:Medium'] font-medium leading-[1px] left-[20px] text-[15px] text-white top-[5056px] w-[350px]" data-node-id="305:210" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px] mb-0">I designed a video comprehension check that pauses lessons after inactivity and presents a multiple-choice question based on the content. Correct answers earn XP and resume the video.</p>
        <p className="leading-[24px]">The feature tackles passive watching without disrupting video-based learning, rewarding understanding rather than time spent while keeping the experience fun and engaging.</p>
      </div>
      <div className="absolute h-[139px] left-[19px] overflow-clip top-[5256px] w-[352px]" data-node-id="305:211">
        <div className="absolute bg-[#fcce00] h-[142px] left-0 top-0 w-[352px]" data-node-id="305:212" />
        <p className="[word-break:break-word] absolute font-['Instrument_Sans:Bold'] font-bold leading-[1.45] left-[270px] text-[11px] text-black top-[62px] w-[117.068px]" data-node-id="305:213" style={{ fontVariationSettings: '"wdth" 100' }}>
          Still watching?
        </p>
        <div className="absolute h-[205px] left-[-15.32px] top-[-8px] w-[273.779px]" data-node-id="305:214" data-name="Student (1) 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStudent11} />
        </div>
      </div>
      <div className="absolute h-[134px] left-[20px] top-[894px] w-[352px]" data-node-id="305:215">
        <div className="absolute bg-[#fcce00] h-[134px] left-0 top-0 w-[352px]" data-node-id="305:216" />
        <p className="[word-break:break-word] absolute font-['Instrument_Sans:Medium'] font-medium h-[121px] leading-[24px] left-[6px] text-[15px] text-black top-[10px] w-[329px]" data-node-id="305:217" style={{ fontVariationSettings: '"wdth" 100' }}>
          A Norton Family survey found over 70% of kids aged 8–12 use the internet daily, yet fewer than 15% understand the basics of online safety — a real gap between exposure and readiness for exactly the age range Quanvaulte serves.
        </p>
      </div>
    </div>
  );
}
