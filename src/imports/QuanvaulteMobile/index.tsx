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

interface QuanvaulteMobileProps {
  activeTab?: ProjectTab;
  onTabChange?: (tab: ProjectTab) => void;
}

export default function QuanvaulteMobile({
  activeTab = "casestudy",
  onTabChange,
}: QuanvaulteMobileProps) {
  return (
    <div className="quanvaulte-mobile-design relative w-full bg-black px-5 pt-[20px] pb-[80px]" data-node-id="305:9" data-name="iPhone 13 & 14 - 56">
      <div className="mb-[30px] z-10" data-node-id="305:10">
        <ProjectTabs
          activeTab={activeTab}
          onTabChange={(tab) => onTabChange?.(tab)}
        />
      </div>

      <div className="flex flex-col gap-[40px] w-full">
        {/* Section 1: Overview */}
        <section className="flex flex-col gap-[16px] items-start w-full" data-node-id="305:17">
          <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] w-fit" data-node-id="305:18">
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] text-[#060606] text-[15px] whitespace-nowrap" data-node-id="305:19" style={{ fontVariationSettings: '"wdth" 100' }}>
              Overview
            </p>
          </div>
          <div className="font-['Instrument_Sans:Medium'] font-medium text-white w-full" data-node-id="305:20" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="text-[15px] leading-[24px] m-0">
              Quanvaulte is an EdTech platform that makes learning tech fun and engaging for kids aged 8–16 through interactive lessons, gamification, and community. I designed the student experience alongside parent and school dashboards, helping learners stay motivated while giving parents and educators visibility into progress and performance.
            </p>
          </div>
        </section>

        {/* Section 2: The problem + Norton survey banner */}
        <section className="flex flex-col gap-[20px] items-start w-full" data-node-id="305:21">
          <div className="flex flex-col gap-[16px] items-start w-full">
            <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] w-fit" data-node-id="305:22">
              <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] text-[#060606] text-[15px] whitespace-nowrap" data-node-id="305:23" style={{ fontVariationSettings: '"wdth" 100' }}>
                The problem
              </p>
            </div>
            <div className="font-['Instrument_Sans:Medium'] font-medium text-white w-full" data-node-id="305:24" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="mb-0 text-[15px]">
                <span className="leading-[24px]">{`Learning technical skills like cybersecurity feels like an extension of the school day for kids, not something they want to do. Existing platforms make it worse: W3Schools-style resources are text-heavy and read like documentation, while video-first platforms like Coursera are built for adults, not children. Nowhere is there a genuinely fun, video-based way for an `}</span>
                <span className="leading-[24px] text-[#d629cc]">8–16 year old</span>
                <span className="leading-[24px]">{` to learn something as dense as cybersecurity.`}</span>
              </p>
            </div>
          </div>
          {/* Norton Family Banner */}
          <div className="bg-[#fcce00] p-[16px] rounded-[4px] w-full" data-node-id="305:215">
            <p className="font-['Instrument_Sans:Medium'] font-medium leading-[24px] text-[15px] text-black m-0" data-node-id="305:217" style={{ fontVariationSettings: '"wdth" 100' }}>
              A Norton Family survey found over 70% of kids aged 8–12 use the internet daily, yet fewer than 15% understand the basics of online safety — a real gap between exposure and readiness for exactly the age range Quanvaulte serves.
            </p>
          </div>
        </section>

        {/* Section 3: Research and discovery */}
        <section className="flex flex-col gap-[16px] items-start w-full" data-node-id="305:25">
          <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] w-fit">
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] text-[#060606] text-[15px] whitespace-nowrap" data-node-id="305:26" style={{ fontVariationSettings: '"wdth" 100' }}>
              Research and discovery
            </p>
          </div>
          <div className="font-['Instrument_Sans:Medium'] font-medium leading-[1.6] text-white w-full" data-node-id="305:27" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="font-['Instrument_Sans:Medium'] font-medium leading-[1.6] mb-0 text-[15px]">Before designing a single screen, I conducted surveys and spoke directly with children aged 8–16, the actual users of the platform. I wanted to understand how they learn, what keeps them engaged, and what makes them lose interest. Their feedback helped shape my design decisions from the start.</p>
            
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] mb-0 mt-[24px] text-[#fcce00] text-[15px]">My research approach</p>
            
            <p className="leading-[1.6] mb-0 mt-[12px] text-[15px]">
              I conducted qualitative research sessions with children aged 8–16 at Topfaith and Excel schools in Uyo, exploring how they learn, what makes them lose interest, and what motivates them to return.
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
        </section>

        {/* Section 4: Design system decision + Table */}
        <section className="flex flex-col gap-[16px] items-start w-full">
          <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] w-fit" data-node-id="305:28">
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] text-[#060606] text-[15px] whitespace-nowrap" data-node-id="305:29" style={{ fontVariationSettings: '"wdth" 100' }}>
              Design system decision
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-[4px] bg-[#332a00]" data-node-id="305:30">
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
        </section>

        {/* Section 5: Choice of illustration + Ubong & Otobong card */}
        <section className="flex flex-col gap-[20px] items-start w-full">
          <div className="flex flex-col gap-[14px] items-start w-full">
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-[24px] text-[#fcce00] text-[15px]" data-node-id="305:45" style={{ fontVariationSettings: '"wdth" 100' }}>
              Choice of illustration over images and why?
            </p>
            <div className="font-['Instrument_Sans:Medium'] font-medium text-[15px] text-white flex flex-col gap-[12px]" data-node-id="305:46" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[24px] mb-0">I introduced two recurring illustrated characters across the student experience, from onboarding and lesson completions to quiz results, streaks, and empty states.</p>
              <p className="leading-[24px] mb-0">Inspired by Duolingo, the goal was to make the characters more than decoration. For children aged 8–12, familiar faces can make learning feel more personal and create continuity between sessions.</p>
            </div>
          </div>
          <div className="relative bg-[#fcce00] h-[263px] w-full rounded-[4px] overflow-hidden flex flex-col items-center justify-center gap-[10px]" data-node-id="305:47">
            <div className="h-[185.25px] relative shrink-0 w-[304px]" data-node-id="305:49" data-name="Gemini_Generated_Image_8pkx998pkx998pkx-removebg-preview 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImage8Pkx998Pkx998PkxRemovebgPreview1} />
            </div>
            <p className="font-['Instrument_Sans:Bold'] font-bold text-[20px] text-black whitespace-nowrap" data-node-id="305:50" style={{ fontVariationSettings: '"wdth" 100' }}>
              Hi, meet Ubong and Otobong
            </p>
          </div>
        </section>

        {/* Section 6: Choice of icons + 3D icons card */}
        <section className="flex flex-col gap-[20px] items-start w-full">
          <div className="flex flex-col gap-[14px] items-start w-full" data-node-id="305:51">
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] text-[#fcce00] text-[15px] whitespace-pre-wrap" data-node-id="305:52" style={{ fontVariationSettings: '"wdth" 100' }}>{`Choice of  icons`}</p>
            <div className="font-['Instrument_Sans:Medium'] font-medium text-[15px] text-white flex flex-col gap-[12px]" data-node-id="305:53" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[24px] mb-0">{`I chose 3D illustration-style icons to make the platform playful and engaging for children aged 8–16 without feeling childish.`}</p>
              <p className="leading-[24px] mb-0">{`Their familiar shapes make icons easier to recognise, while their depth and tactile feel complement the illustrated characters, creating a consistent visual experience.`}</p>
            </div>
          </div>
          <div className="relative bg-[#fcce00] h-[276px] w-full rounded-[4px] overflow-hidden flex flex-col items-center justify-center gap-[12px]" data-node-id="305:54">
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
            <p className="font-['Instrument_Sans:Bold'] font-bold text-[20px] text-black whitespace-nowrap" data-node-id="305:63" style={{ fontVariationSettings: '"wdth" 100' }}>
              Icon feels i went with
            </p>
          </div>
        </section>

        {/* Section 7: Choice of button + banner */}
        <section className="flex flex-col gap-[14px] items-start w-full" data-node-id="305:64">
          <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] text-[#fcce00] text-[15px] whitespace-pre-wrap" data-node-id="305:65" style={{ fontVariationSettings: '"wdth" 100' }}>{`Choice of  button`}</p>
          <p className="font-['Instrument_Sans:Medium'] font-medium leading-[24px] text-white w-full m-0" data-node-id="305:66" style={{ fontVariationSettings: '"wdth" 100' }}>
            I used the button with the shadow to bring in the fun feel to the platform and also cause it give the attention of press me, which is what i want for the CTA, i also made the primary blue, secondary and button and the 3rd as the white
          </p>
          <div className="aspect-[343/142] overflow-hidden relative rounded-[4px] w-full">
            <img alt="Primary, secondary, and tertiary button choices" className="absolute inset-0 object-cover pointer-events-none size-full" src={imgButtonChoice} />
          </div>
        </section>

        {/* Section 8: Features decision + Leaderboard/Badges/Streak banner */}
        <section className="flex flex-col gap-[20px] items-start w-full">
          <div className="flex flex-col gap-[16px] items-start w-full" data-node-id="305:67">
            <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] w-fit" data-node-id="305:68">
              <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] text-[#060606] text-[15px] whitespace-nowrap" data-node-id="305:69" style={{ fontVariationSettings: '"wdth" 100' }}>
                Features decision
              </p>
            </div>
            <div className="flex flex-col gap-[16px] w-full text-white" data-node-id="305:70" style={{ fontVariationSettings: '"wdth" 100' }}>
              <div>
                <p className="font-['Instrument_Sans:Bold'] font-bold text-[15px] leading-[1.45] text-[#d629cc] m-0">
                  The leaderboard
                </p>
                <p className="font-['Instrument_Sans:Medium'] font-medium text-[14px] leading-[1.6] text-white mt-[4px] mb-0">
                  Research revealed that children enjoyed competing with their friends, so I introduced a leaderboard to encourage friendly competition and motivate them to keep learning.
                </p>
              </div>

              <div>
                <p className="font-['Instrument_Sans:Bold'] font-bold text-[15px] leading-[1.45] text-[#d629cc] m-0">
                  XP points
                </p>
                <p className="font-['Instrument_Sans:Medium'] font-medium text-[14px] leading-[1.6] text-white mt-[4px] mb-0">
                  I introduced XP points to reward learning activities and give children a clear sense of progress as they completed lessons and quizzes.
                </p>
              </div>

              <div>
                <p className="font-['Instrument_Sans:Bold'] font-bold text-[15px] leading-[1.45] text-[#d629cc] m-0">
                  Badges
                </p>
                <p className="font-['Instrument_Sans:Medium'] font-medium text-[14px] leading-[1.6] text-white mt-[4px] mb-0">
                  Badges gave children visible rewards to collect and look back on, recognising their achievements and encouraging them to reach new milestones.
                </p>
              </div>

              <div>
                <p className="font-['Instrument_Sans:Bold'] font-bold text-[15px] leading-[1.45] text-[#d629cc] m-0">
                  Community
                </p>
                <p className="font-['Instrument_Sans:Medium'] font-medium text-[14px] leading-[1.6] text-white mt-[4px] mb-0">
                  Since children expressed a preference for learning alongside people they knew, I designed a community experience that made social learning a core part of the platform.
                </p>
              </div>

              <div>
                <p className="font-['Instrument_Sans:Bold'] font-bold text-[15px] leading-[1.45] text-[#d629cc] m-0">
                  Streaks
                </p>
                <p className="font-['Instrument_Sans:Medium'] font-medium text-[14px] leading-[1.6] text-white mt-[4px] mb-0">
                  I introduced streaks to encourage consistency, rewarding children for returning and completing learning activities regularly to maintain their progress.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full rounded-[4px] overflow-hidden bg-[#fcce00]" data-node-id="305:71">
            <img
              alt="Feature cards introduced from research"
              className="w-full h-auto block"
              src={imgFeatureCards}
            />
          </div>
        </section>

        {/* Section 9: Video comprehension + Still watching banner */}
        <section className="flex flex-col gap-[20px] items-start w-full">
          <div className="font-['Instrument_Sans:Medium'] font-medium text-[15px] text-white w-full flex flex-col gap-[12px]" data-node-id="305:210" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">I designed a video comprehension check that pauses lessons after inactivity and presents a multiple-choice question based on the content. Correct answers earn XP and resume the video.</p>
            <p className="leading-[24px] mb-0">The feature tackles passive watching without disrupting video-based learning, rewarding understanding rather than time spent while keeping the experience fun and engaging.</p>
          </div>
          <div className="relative h-[139px] overflow-clip rounded-[4px] w-full bg-[#fcce00]" data-node-id="305:211">
            <div className="absolute bg-[#fcce00] h-[142px] left-0 top-0 w-full" data-node-id="305:212" />
            <p className="font-['Instrument_Sans:Bold'] font-bold leading-[1.45] right-[14px] text-[11px] text-black top-[62px] absolute whitespace-nowrap" data-node-id="305:213" style={{ fontVariationSettings: '"wdth" 100' }}>
              Still watching?
            </p>
            <div className="absolute h-[205px] left-[-15.32px] top-[-8px] w-[273.779px]" data-node-id="305:214" data-name="Student (1) 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStudent11} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}