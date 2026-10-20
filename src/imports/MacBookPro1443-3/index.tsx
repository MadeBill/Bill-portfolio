export default function MacBookPro() {
  return (
    <div className="bg-black relative w-[1440px] pb-[40px]" data-name="MacBook Pro 14' - 43">
      {/* "Research and discovery" badge */}
      <div className="bg-white inline-flex items-center justify-center ml-[122px] px-[10px] py-[4px] w-fit">
        <p
          className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[32px] whitespace-nowrap"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Research and discovery
        </p>
      </div>

      <div className="ml-[122px] mt-[20px] w-[1274px]">
        {/* Intro paragraph */}
        <p
          className="font-['Instrument_Sans:Medium',sans-serif] font-medium text-[18px] leading-[1.6] text-white"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Before designing a single screen, I conducted surveys and spoke directly with children aged 8–16, the actual users of the platform. I wanted to understand how they learn, what keeps them engaged, and what makes them lose interest. Their feedback helped shape my design decisions from the start.
        </p>

        {/* My research approach */}
        <h3
          className="mt-[40px] font-['Instrument_Sans:Bold',sans-serif] font-bold text-[20px] leading-[1.45] text-[#fcce00]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          My research approach
        </h3>

        <p
          className="mt-[16px] font-['Instrument_Sans:Medium',sans-serif] font-medium text-[18px] leading-[1.6] text-white"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          I designed a two-part research approach. First,{" "}
          <strong className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-white">
            a survey sent to parents of school-age children
          </strong>{" "}
          in Topfaith(Uyo) and Excel (Uyo), focused on their expectations around progress visibility and trust. Second — and more valuable — direct qualitative sessions with children in the target age range: short guided conversations where I asked about how they currently learn, what makes them quit something, and what makes them want to come back.
        </p>

        {/* What they told me — and what I did with it */}
        <h3
          className="mt-[40px] font-['Instrument_Sans:Bold',sans-serif] font-bold text-[20px] leading-[1.45] text-[#fcce00]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          What they told me — and what I did with it
        </h3>

        {/* Findings items */}
        <div className="mt-[24px] flex flex-col gap-[24px]">
          {/* Finding 1 */}
          <div className="flex flex-col gap-[6px]">
            <h4
              className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[20px] leading-[1.45] text-white"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Video makes learning easier to follow
            </h4>
            <p
              className="font-['Instrument_Sans:Medium',sans-serif] font-medium text-[18px] leading-[1.6] text-[#cfcbcb]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              The children preferred watching someone explain or demonstrate something over reading long texts. So I made video the primary learning format, with text for summaries, captions, and definitions.
            </p>
          </div>

          {/* Finding 2 */}
          <div className="flex flex-col gap-[6px]">
            <h4
              className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[20px] leading-[1.45] text-white"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Learning is more fun together
            </h4>
            <p
              className="font-['Instrument_Sans:Medium',sans-serif] font-medium text-[18px] leading-[1.6] text-[#cfcbcb]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              The children felt learning was more enjoyable with friends, and competition made it even more motivating. This shaped the community feature, live classrooms, group-based learning, and optional class leaderboards.
            </p>
          </div>

          {/* Finding 3 */}
          <div className="flex flex-col gap-[6px]">
            <h4
              className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[20px] leading-[1.45] text-white"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Rewards keep them motivated
            </h4>
            <p
              className="font-['Instrument_Sans:Medium',sans-serif] font-medium text-[18px] leading-[1.6] text-[#cfcbcb]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Completing a lesson without recognition felt incomplete to the children. This informed the use of XP, badges, and new challenges to make progress feel rewarding and encourage them to keep learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
