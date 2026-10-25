import { useState } from "react";

const assetPath = "/assets";

const assets = {
  portrait: `${assetPath}/ef1a8.png`,
  deskPortrait: `${assetPath}/7b7cf.png`,
  sidePortrait: `${assetPath}/67df3.png`,
  arsenal: `${assetPath}/1b429.png`,
  chess: `${assetPath}/4ea3f.png`,
  economics: `${assetPath}/a235d.png`,
  hiphop: `${assetPath}/dacee.png`,
  engineering: `${assetPath}/1cf99.png`,
  scribble: `${assetPath}/2adf3.png`,
  albanny: `${assetPath}/424f9.png`,
  ndloo: `${assetPath}/c9ebf.png`,
  quanvaulte: `${assetPath}/29aa1.png`,
  forfalify: `${assetPath}/0f472.png`,
  webprebuilt: `${assetPath}/bc302.png`,
  saintdavies: `${assetPath}/77bc0.png`,
  tekspecs: `${assetPath}/3117c.png`,
  cowrywise: `${assetPath}/aa9b8.png`,
};

const fontWidth = { fontVariationSettings: '"wdth" 100' };

type StickerProps = {
  className: string;
  image: string;
  imageClassName?: string;
  label: string;
  tone: string;
};

function Sticker({ className, image, imageClassName = "", label, tone }: StickerProps) {
  return (
    <div
      className={`absolute flex items-center gap-[clamp(3px,0.7vw,10px)] p-[clamp(5px,0.7vw,10px)] ${tone} ${className}`}
    >
      <span
        className="whitespace-nowrap font-['Instrument_Sans:Bold'] text-[clamp(10px,1.8vw,27px)] font-bold leading-[1.05] text-black"
        style={fontWidth}
      >
        {label}
      </span>
      <img
        alt=""
        aria-hidden="true"
        className={`h-[clamp(21px,3.4vw,51px)] w-[clamp(18px,2.8vw,42px)] shrink-0 object-cover ${imageClassName}`}
        src={image}
      />
    </div>
  );
}

const favoritesData = [
  {
    id: "toystory",
    label: "I love cartoons so much",
    image: "/assets/about/toystory.png",
    alt: "Toy Story characters",
    positionClass: "left-[34%] top-[1%] w-[38%]",
    restingZ: "z-[1]",
  },
  {
    id: "jersey",
    label: "My favorite club",
    image: "/assets/about/jersey.png",
    alt: "Arsenal football club jersey",
    positionClass: "left-[0%] top-[1%] w-[40%]",
    restingZ: "z-[2]",
  },
  {
    id: "music",
    label: "My favorite rapper",
    image: "/assets/about/music.png",
    alt: "The Fall-Off J. Cole Spotify card",
    positionClass: "left-[57%] top-[0%] w-[43%]",
    restingZ: "z-[2]",
  },
  {
    id: "chess",
    label: "My favorite game",
    image: "/assets/about/chess.png",
    alt: "Chess knight piece",
    positionClass: "left-[37.5%] top-[33%] w-[31%]",
    restingZ: "z-[3]",
  },
];

function FavoritesCollage() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="relative mx-auto aspect-[700/450] w-full max-w-[700px] select-none">
      {favoritesData.map((item) => {
        const isActive = activeItem === item.id;
        return (
          <div
            key={item.id}
            tabIndex={0}
            role="button"
            aria-label={`${item.alt}: ${item.label}`}
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
            onFocus={() => setActiveItem(item.id)}
            onBlur={() => setActiveItem(null)}
            onClick={() => setActiveItem(isActive ? null : item.id)}
            className={`group absolute ${item.positionClass} ${
              isActive ? "z-[30]" : `${item.restingZ} hover:z-[30]`
            } transition-all duration-300 ease-out cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white`}
          >
            {/* The Image with lift effect */}
            <div
              className={`w-full transition-all duration-300 ease-out ${
                isActive
                  ? "scale-105 -translate-y-1.5 drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                  : "drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] group-hover:scale-105 group-hover:-translate-y-1.5 group-hover:drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-auto block select-none pointer-events-none"
                draggable={false}
              />
            </div>

            {/* Badge overlay on hover / active */}
            <div
              className={`pointer-events-none absolute inset-0 flex items-center justify-center p-2 transition-all duration-300 ease-out ${
                isActive
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
              }`}
            >
              <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/90 px-3 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.85)] backdrop-blur-md sm:px-4 sm:py-2">
                <span
                  className="font-['Instrument_Sans:Bold',sans-serif] text-[11px] font-bold text-white whitespace-nowrap sm:text-[14px] lg:text-[15px]"
                  style={fontWidth}
                >
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function IntroCollage() {
  return (
    <div
      className="mx-auto grid w-full max-w-[1512px] gap-8 px-4 pt-6 sm:px-8 lg:grid-cols-[52%_48%] lg:px-10 lg:pt-10"
      data-node-id="226:128"
    >
      <div className="relative aspect-[760/450]">
        <div className="absolute left-[2%] top-[8%] h-[78%] w-[36%] -rotate-[5.8deg] border-[clamp(4px,0.45vw,7px)] border-white bg-white">
          <img
            alt="Bill Aniekan outdoors"
            className="h-full w-full object-cover"
            src={assets.sidePortrait}
          />
        </div>
        <div className="absolute left-[20%] top-[4%] z-10 h-[82%] w-[38%] -rotate-[0.83deg] border-[clamp(4px,0.45vw,7px)] border-white bg-white">
          <img
            alt="Bill Aniekan standing beside a building"
            className="h-full w-full object-cover"
            src={assets.deskPortrait}
          />
        </div>
        <div className="absolute left-[51%] top-[6%] h-[76%] w-[35%] rotate-[8.35deg] border-[clamp(5px,0.6vw,9px)] border-white bg-white">
          <img
            alt="Bill Aniekan in a patterned shirt"
            className="h-full w-full object-cover"
            src={assets.portrait}
          />
        </div>
      </div>

      <FavoritesCollage />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="w-fit bg-white px-[10px] py-1 font-['Instrument_Sans:Bold'] text-[clamp(18px,1.6vw,24px)] font-bold leading-[1.45] text-[#060606]"
      style={fontWidth}
    >
      {children}
    </h2>
  );
}

type ThoughtVariant = 1 | 2 | 3 | 4;

function ThoughtScribble({ variant }: { variant: ThoughtVariant }) {
  if (variant === 1) {
    return (
      <svg
        className="pointer-events-none absolute inset-0 size-full overflow-visible drop-shadow-[0_2px_8px_rgba(255,255,255,0.06)]"
        viewBox="0 0 320 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M 45,62 C 42,28 88,14 165,13 C 242,12 298,30 295,65 C 292,96 238,111 158,112 C 78,113 25,95 24,60 C 23,26 80,10 170,11 C 245,12 300,28 302,60 C 304,88 250,110 162,111 C 92,112 32,96 35,66"
          stroke="rgba(255, 255, 255, 0.88)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          filter="url(#chalk-filter)"
        />
        <path
          d="M 50,56 C 52,32 94,18 162,17 C 230,16 288,32 286,60 C 284,86 234,106 156,107 C 86,108 42,92 45,64"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
  if (variant === 2) {
    return (
      <svg
        className="pointer-events-none absolute inset-0 size-full overflow-visible drop-shadow-[0_2px_8px_rgba(255,255,255,0.06)]"
        viewBox="0 0 320 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M 170,12 C 248,13 296,30 295,62 C 294,94 240,110 155,111 C 70,112 24,94 25,58 C 26,24 82,10 172,11 C 255,12 301,31 300,64 C 299,95 245,112 150,112 C 65,112 20,92 22,56 C 24,30 70,16 148,15"
          stroke="rgba(255, 255, 255, 0.88)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          filter="url(#chalk-filter)"
        />
        <path
          d="M 38,62 C 40,36 88,20 162,19 C 236,18 288,34 286,62 C 284,88 236,106 160,107 C 90,108 36,90 38,62"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
  if (variant === 3) {
    return (
      <svg
        className="pointer-events-none absolute inset-0 size-full overflow-visible drop-shadow-[0_2px_8px_rgba(255,255,255,0.06)]"
        viewBox="0 0 400 150"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M 50,75 C 46,35 105,16 205,14 C 305,12 372,34 370,76 C 368,116 300,138 198,140 C 96,142 30,120 28,74 C 26,30 98,12 210,13 C 315,14 378,36 376,78 C 374,118 308,141 195,141 C 88,141 24,118 26,72 C 28,40 76,22 165,18"
          stroke="rgba(255, 255, 255, 0.9)"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          filter="url(#chalk-filter)"
        />
        <path
          d="M 58,74 C 60,42 115,22 205,21 C 295,20 360,40 358,75 C 356,110 295,134 202,135 C 112,136 56,114 58,74"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
  return (
    <svg
      className="pointer-events-none absolute inset-0 size-full overflow-visible drop-shadow-[0_2px_8px_rgba(255,255,255,0.06)]"
      viewBox="0 0 340 120"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M 35,60 C 33,26 84,12 172,12 C 260,12 316,28 318,60 C 320,90 264,110 170,111 C 76,112 22,94 24,58 C 26,24 88,10 178,11 C 265,12 322,30 320,64 C 318,94 260,112 168,112 C 82,112 26,92 28,60 C 30,36 78,18 152,16"
        stroke="rgba(255, 255, 255, 0.88)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        filter="url(#chalk-filter)"
      />
      <path
        d="M 44,58 C 46,32 94,18 174,17 C 254,16 308,32 306,58 C 304,84 252,106 172,107 C 98,108 42,90 44,58"
        stroke="rgba(255, 255, 255, 0.45)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Thought({
  children,
  className = "",
  variant = 1,
  textClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: ThoughtVariant;
  textClassName?: string;
}) {
  return (
    <div
      className={`group relative flex items-center justify-center transition-all duration-300 hover:scale-[1.03] select-none ${className}`}
    >
      <ThoughtScribble variant={variant} />
      <p
        className={`relative z-10 max-w-[85%] text-center font-['Instrument_Sans:Bold'] font-bold text-white transition-colors duration-300 ${textClassName}`}
        style={fontWidth}
      >
        {children}
      </p>
    </div>
  );
}

type LogoKind =
  | "albanny"
  | "ndloo"
  | "quanvaulte"
  | "forfalify"
  | "webprebuilt"
  | "saintdavies"
  | "tekspecs"
  | "cowrywise";

const logoTone: Record<LogoKind, string> = {
  albanny: "bg-white",
  ndloo: "bg-[#ff5900]",
  quanvaulte: "bg-[#2c43eb]",
  forfalify: "bg-white",
  webprebuilt: "bg-[#0047ab]",
  saintdavies: "bg-white",
  tekspecs: "bg-white",
  cowrywise: "bg-white",
};

function CompanyLogo({ kind }: { kind: LogoKind }) {
  const standardClasses: Partial<Record<LogoKind, string>> = {
    albanny: "h-[80%] w-[70%] object-cover object-left",
    ndloo: "w-[96%] object-contain",
    quanvaulte: "h-[76%] w-[76%] object-contain",
    webprebuilt: "h-[70%] w-[70%] object-contain",
    saintdavies: "h-[72%] w-[92%] object-contain",
    cowrywise: "h-[64%] w-[64%] object-contain object-bottom",
  };

  return (
    <div
      className={`relative flex size-[clamp(52px,5vw,72px)] shrink-0 items-center justify-center overflow-hidden rounded-[10px] ${logoTone[kind]}`}
    >
      {kind === "forfalify" ? (
        <div className="relative h-[62.5%] w-1/2 overflow-hidden">
          <img
            alt=""
            aria-hidden="true"
            className="absolute left-[-117.75%] top-[-34.19%] h-[218.71%] w-[337.43%] max-w-none"
            src={assets.forfalify}
          />
        </div>
      ) : kind === "tekspecs" ? (
        <div className="relative h-[76%] w-[81%] overflow-hidden">
          <img
            alt=""
            aria-hidden="true"
            className="absolute left-[-348.45%] top-0 h-full w-[448.45%] max-w-none"
            src={assets.tekspecs}
          />
        </div>
      ) : (
        <img
          alt=""
          aria-hidden="true"
          className={standardClasses[kind]}
          src={assets[kind]}
        />
      )}
    </div>
  );
}

type Experience = {
  company: string;
  dates: string;
  logo: LogoKind;
};

const workColumns: Experience[][] = [
  [
    { company: "Albanny Technology", dates: "March 2024 - Jan 2025", logo: "albanny" },
    { company: "Ndloo", dates: "February 2025- April 2026", logo: "ndloo" },
    { company: "Quanvaulte", dates: "October 2025 - July 2026", logo: "quanvaulte" },
    { company: "Forfalify", dates: "October 2025 - July 2026", logo: "forfalify" },
  ],
  [
    { company: "Webprebuilt", dates: "April 2026 - July 2026", logo: "webprebuilt" },
    {
      company: "Saintdavies",
      dates: "2024 – 2025, resumed January 2026 – Present",
      logo: "saintdavies",
    },
    { company: "Tekspecs", dates: "August 2025 - September 2025", logo: "tekspecs" },
  ],
];

function ExperienceRow({ company, dates, logo }: Experience) {
  return (
    <div className="flex min-w-0 items-center gap-[clamp(18px,2.7vw,40px)]">
      <CompanyLogo kind={logo} />
      <div
        className="min-w-0 font-['Instrument_Sans:Medium'] text-[clamp(17px,1.85vw,28px)] leading-[1.45]"
        style={fontWidth}
      >
        <h3 className="font-['Instrument_Sans:Bold'] font-bold text-white">{company}</h3>
        <p className="font-medium text-[#c7c7c7]">{dates}</p>
      </div>
    </div>
  );
}

export default function AboutMeSection() {
  return (
    <section
      className="w-full overflow-hidden bg-black pb-[clamp(64px,8vw,120px)] text-white"
      data-node-id="226:128"
    >
      <IntroCollage />

      <div className="mx-auto mt-[clamp(48px,5vw,76px)] max-w-[1272px] space-y-[clamp(40px,5vw,63px)] px-4 sm:px-8">
        <section data-node-id="226:160">
          <SectionLabel>About</SectionLabel>
          <div
            className="mt-5 space-y-[1.45em] font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] text-[#ffffff99]"
            style={fontWidth}
          >
            <p>
              I&apos;m Bill Aniekan, a product designer with 4+ years of experience working across
              fintech, SaaS, edtech, healthcare, and consumer products. I care about the intersection
              of user experience and business growth, turning complex problems into products that are
              intuitive, useful, and built to scale.
            </p>
            <p>
              I started at <span className="font-['Instrument_Sans:Bold'] font-bold text-white">Albanny Technologies</span>, designing across multiple industries, before joining
              Ndloo as a founding designer and leading the product design team through its{" "}
              <span className="text-[#37fc00]">acquisition</span>. Since then, I&apos;ve worked on
              products like <span className="font-['Instrument_Sans:Bold'] font-bold text-white">Paxi, Forfaitify, Webprebuilt, and Quanvaulte</span>, taking ideas from early
              concepts to launch while also exploring AI-powered design and development tools.
            </p>
            <p>
              I believe good product design goes beyond polished screens. It&apos;s about solving
              real user problems in ways that improve the experience, drive customer retention, unlock
              revenue opportunities, and ultimately grow the business.
            </p>
          </div>
        </section>

        <section data-node-id="226:174">
          <SectionLabel>Beyond the screen</SectionLabel>
          <p
            className="mt-5 font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] text-[#ffffff99]"
            style={fontWidth}
          >
            I&apos;m a generalist at heart, curious about how things work and always exploring new
            ideas. Outside product design, I&apos;m into <span className="font-['Instrument_Sans:Bold'] font-bold text-white">music, economics chess, and Arsenal</span>. Lately,
            I&apos;ve been diving deeper into AI, technology, and engineering, usually down a rabbit
            hole trying to learn something new.
          </p>
        </section>
      </div>

      {/* Chalk / pencil texture filter for thought scribbles */}
      <svg className="absolute size-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="chalk-filter" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="mx-auto mt-[40px] flex max-w-[760px] flex-wrap items-center justify-center gap-5 px-4 lg:hidden">
        <Thought
          className="w-[240px] h-[98px] -rotate-[2.5deg]"
          textClassName="text-[16px] sm:text-[18px] leading-[1.25]"
          variant={1}
        >
          🧠 Overthinks
        </Thought>

        <Thought
          className="w-[240px] h-[98px] rotate-[2deg]"
          textClassName="text-[16px] sm:text-[18px] leading-[1.25]"
          variant={2}
        >
          Always curious
        </Thought>

        <Thought
          className="w-[320px] sm:w-[380px] h-[120px] -rotate-[1.5deg]"
          textClassName="text-[15px] sm:text-[17px] leading-[1.3]"
          variant={3}
        >
          Music is basically<br />background noise for life
        </Thought>

        <Thought
          className="w-[260px] h-[98px] rotate-[2deg]"
          textClassName="text-[16px] sm:text-[18px] leading-[1.25]"
          variant={4}
        >
          Probably on Figma rn
        </Thought>
      </div>

      <div className="relative mx-auto mt-[40px] hidden h-[200px] w-full max-w-[1257px] px-4 lg:block">
        <Thought
          className="absolute left-[2%] top-[15px] w-[230px] h-[90px] -rotate-[3deg]"
          textClassName="text-[18px] lg:text-[20px] leading-[1.2]"
          variant={1}
        >
          🧠 Overthinks
        </Thought>

        <Thought
          className="absolute left-[26%] top-[65px] w-[230px] h-[90px] rotate-[2deg]"
          textClassName="text-[18px] lg:text-[20px] leading-[1.2]"
          variant={2}
        >
          Always curious
        </Thought>

        <Thought
          className="absolute left-[50%] top-[10px] w-[330px] h-[105px] -rotate-[1.5deg]"
          textClassName="text-[15px] lg:text-[17px] leading-[1.28]"
          variant={3}
        >
          Music is basically<br />background noise for life
        </Thought>

        <Thought
          className="absolute left-[75%] top-[60px] w-[260px] h-[90px] rotate-[2.5deg]"
          textClassName="text-[18px] lg:text-[20px] leading-[1.2]"
          variant={4}
        >
          Probably on Figma rn
        </Thought>
      </div>

      <div
        className="mx-auto mt-[clamp(90px,10vw,160px)] max-w-[1342px] space-y-[clamp(48px,4vw,64px)] px-4 sm:px-8"
        data-node-id="226:178"
      >
        <section>
          <SectionLabel>Work Experience</SectionLabel>
          <div className="mt-7 grid gap-x-[clamp(60px,12vw,218px)] gap-y-12 lg:grid-cols-2">
            {workColumns.map((column, columnIndex) => (
              <div className="space-y-[clamp(36px,4.2vw,64px)]" key={columnIndex}>
                {column.map((experience) => (
                  <ExperienceRow key={experience.company} {...experience} />
                ))}
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>Volunteering</SectionLabel>
          <div className="mt-7 max-w-[520px]">
            <ExperienceRow
              company="Cowrywise"
              dates="March 2024 - Jan 2025"
              logo="cowrywise"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
