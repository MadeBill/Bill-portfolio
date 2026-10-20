function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[112px] px-[10px] py-[4px] top-0">
      <p className="[word-break:break-word] font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.45] relative shrink-0 text-[#060606] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Design system decision
      </p>
    </div>
  );
}

function DesignSystemTable() {
  return (
    <div className="absolute h-[620px] left-[112px] top-[57px] w-[1279px]" data-node-id="473:17">
      <div className="absolute bg-[#332a00] h-[620px] left-0 top-0 w-[1279px]" data-node-id="473:18" />
      <div className="absolute bg-[#fcce00] h-[54px] left-0 top-0 w-[1279px]" data-node-id="473:19" />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Instrument_Sans:Bold'] font-bold leading-[1.45] left-[60px] text-[#060606] text-[24px] top-[19px] whitespace-nowrap" data-node-id="473:20" style={{ fontVariationSettings: '"wdth" 100' }}>
        Design system
      </p>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[52px] items-start left-[60px] text-white top-[74px] w-[1155px]" data-node-id="473:21">
        <div className="content-stretch flex gap-[229px] items-start relative shrink-0" data-node-id="473:22">
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Instrument_Sans:SemiBold'] font-semibold leading-[1.45] relative shrink-0 text-[20px] whitespace-nowrap" data-node-id="473:23" style={{ fontVariationSettings: '"wdth" 100' }}>
            Color
          </p>
          <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[18px] w-[856px] whitespace-pre-wrap" data-node-id="473:24">
            <p className="leading-[1.45] mb-0">{`Blue carries authority, stability, and focus. Yellow carries joy, warmth, optimism, and attention. Together they cover both ends of the emotional register a children's platform needs — "this is serious and structured" (blue) and "this is fun and rewarding" (yellow). Neither color alone does that job.`}</p>
            <p className="leading-[1.45] mb-0">​</p>
            <p className="leading-[1.45]">I use other colors with same use hue and light for different courses( Each course have their color) to bring fun feels</p>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-between leading-[1.45] relative shrink-0 w-full" data-node-id="473:25">
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Instrument_Sans:SemiBold'] font-semibold relative shrink-0 text-[20px] whitespace-nowrap" data-node-id="473:26" style={{ fontVariationSettings: '"wdth" 100' }}>
            Typography
          </p>
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter:Medium'] font-medium not-italic relative shrink-0 text-[18px] w-[875px]" data-node-id="473:27">
            Baloo was chosen because it is the best option rounded typeface that a child finds welcoming and feels fun for the users
          </p>
        </div>
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="473:28">
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Instrument_Sans:SemiBold'] font-semibold leading-[1.45] relative shrink-0 text-[20px] whitespace-nowrap" data-node-id="473:29" style={{ fontVariationSettings: '"wdth" 100' }}>
            Spaces
          </p>
          <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[18px] w-[875px]" data-node-id="473:30">
            <p className="leading-[1.45] mb-0">{`Why I chose larger spacing for a children's platform`}</p>
            <p className="leading-[1.45] mb-0">{`Children aged 8–12 don't process interfaces the same way adults do. Adults are more familiar with common UI patterns, while children are still learning how to navigate them.`}</p>
            <p className="leading-[1.45] mb-0">Tight spacing can make elements feel cluttered and harder to understand. Larger spacing makes it easier to see what belongs together, what to focus on, and what to do next.</p>
            <p className="leading-[1.45]">For me, the goal was to reduce cognitive load and make the experience feel clear, intuitive, and easy for children to use.</p>
          </div>
        </div>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Instrument_Sans:Bold'] font-bold leading-[1.45] left-[340px] text-[#060606] text-[24px] top-[19px] whitespace-nowrap" data-node-id="473:31" style={{ fontVariationSettings: '"wdth" 100' }}>
        Reason for choice color
      </p>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 14' - 44">
      <Frame />
      <DesignSystemTable />
    </div>
  );
}
