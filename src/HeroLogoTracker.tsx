import { useEffect, useRef, useState, type ReactNode } from "react";

interface LogoStep {
  id: string;
  image: string;
  title: string;
  content?: ReactNode;
  tiltLeft: number;
  tiltRight: number;
}

const LOGO_STEPS: LogoStep[] = [
  {
    id: "quanvaulte",
    image: "/assets/logos/logo-quanvaulte.png",
    title: "Launched on 14 - 10 2026 with 3 schools onboarded",
    content: (
      <>
        Launched on 14 - 10 2026 with{" "}
        <span className="text-[#d629cc]">3 schools</span> onboarded
      </>
    ),
    tiltLeft: -6,
    tiltRight: 4,
  },
  {
    id: "hospital",
    image: "/assets/logos/logo-hospital.png",
    title: "20 active hospitals currently using it",
    content: (
      <>
        <span className="text-[#60a5fa]">20 active hospitals</span> currently using it
      </>
    ),
    tiltLeft: 5,
    tiltRight: -5,
  },
  {
    id: "taxi",
    image: "/assets/logos/logo-taxi.png",
    title: "Over 4k users",
    content: (
      <>
        Over <span className="text-[#fb923c]">4k users</span>
      </>
    ),
    tiltLeft: -4,
    tiltRight: 6,
  },
  {
    id: "ndloo",
    image: "/assets/logos/logo-ndloo.png",
    title: "Over 15k users, later acquired",
    content: (
      <>
        Over <span className="text-[#fb923c]">15k users</span>, later{" "}
        <span className="text-[#4ade80]">acquired</span>
      </>
    ),
    tiltLeft: 6,
    tiltRight: -4,
  },
  {
    id: "sdportals",
    image: "/assets/logos/logo-sdportals.png",
    title: "Currently at testing phase",
    tiltLeft: -3,
    tiltRight: 3,
  },
  {
    id: "webprebuilt",
    image: "/assets/logos/logo-webprebuilt.png",
    title: "Currently in development phase",
    tiltLeft: 5,
    tiltRight: -6,
  },
  {
    id: "devphase",
    image: "/assets/logos/logo-devphase.png",
    title: "Currently in development phase",
    tiltLeft: -5,
    tiltRight: 4,
  },
  {
    id: "ambassador",
    image: "/assets/logos/logo-ambassador.png",
    title: "Ambassador program",
    tiltLeft: 4,
    tiltRight: -2,
  },
];

const TOTAL_CARDS = LOGO_STEPS.length;
const STEP_DURATION = 4000; // ms to read each card text (4.0s)
const ROLLBACK_WAIT = 4500; // ms to pause after last card before rolling back (4.5s)
const TRANSITION_DURATION = 1400; // ms for a card to scroll across (1.4s)
const ROLLBACK_DURATION = 1200; // ms for a card to roll back (1.2s)
const ROLLBACK_STAGGER = 85; // ms stagger between each card during rollback

export default function HeroLogoTracker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(560);
  const [activeStep, setActiveStep] = useState(0); // 0 to 7
  const [isRollingBack, setIsRollingBack] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0);
  const [textFading, setTextFading] = useState(false);

  // Measure container width responsively
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    observer.observe(el);
    setContainerWidth(el.clientWidth || 560);
    return () => observer.disconnect();
  }, []);

  // Update text with a subtle crossfade when activeStep changes
  useEffect(() => {
    if (isRollingBack) {
      setTextFading(true);
      return;
    }

    setTextFading(true);
    const timeout = setTimeout(() => {
      setDisplayedTextIndex(activeStep);
      setTextFading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [activeStep, isRollingBack]);

  // Main animation timer loop
  useEffect(() => {
    if (isPaused) return;

    let timer: NodeJS.Timeout;

    if (isRollingBack) {
      // During rollback, wait for all cards to roll back, then restart forward
      const rollbackTotalDuration = ROLLBACK_DURATION + TOTAL_CARDS * ROLLBACK_STAGGER + 300;
      timer = setTimeout(() => {
        setIsRollingBack(false);
        setActiveStep(0);
        setDisplayedTextIndex(0);
        setTextFading(false);
      }, rollbackTotalDuration);
    } else {
      if (activeStep < TOTAL_CARDS - 1) {
        // Move to next card
        timer = setTimeout(() => {
          setActiveStep((prev) => prev + 1);
        }, STEP_DURATION);
      } else {
        // All completed: pause on the last card, then start rolling back!
        timer = setTimeout(() => {
          setIsRollingBack(true);
        }, ROLLBACK_WAIT);
      }
    }

    return () => clearTimeout(timer);
  }, [activeStep, isRollingBack, isPaused]);

  // Dimensions & layout math
  const cardSize = containerWidth < 480 ? 36 : containerWidth < 640 ? 40 : 44;
  const leftBaseX = containerWidth < 480 ? 10 : 16;
  const rightBaseX = containerWidth - cardSize - (containerWidth < 480 ? 10 : 16);
  const stackOffset = containerWidth < 480 ? 5 : 7;

  // Text of current step
  const currentStepData = LOGO_STEPS[displayedTextIndex] || LOGO_STEPS[0];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="group relative flex h-[68px] w-full select-none items-center justify-between overflow-hidden rounded-[16px] border border-white/15 bg-[#080808] px-3 shadow-lg transition-all duration-300 hover:border-white/25 sm:h-[76px] sm:px-4"
    >
      {/* Background ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02]" />

      {/* Center text container */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center px-[90px] text-center sm:px-[120px]"
      >
        <p
          className="font-['Instrument_Sans:Bold',sans-serif] text-[12px] font-bold leading-[1.35] text-white transition-all duration-300 sm:text-[14px] md:text-[15px]"
          style={{
            fontVariationSettings: '"wdth" 100',
            opacity: textFading || isRollingBack ? 0 : 1,
            transform: textFading || isRollingBack ? "translateY(6px)" : "translateY(0)",
          }}
        >
          {currentStepData.content || currentStepData.title}
        </p>
      </div>

      {/* Render all 8 logos with animated positions & rolling rotations */}
      {LOGO_STEPS.map((step, index) => {
        // Is this card on the right side?
        // When not rolling back: cards with index <= activeStep are on the right
        // When rolling back: all cards are returning to the left
        const isRight = !isRollingBack && index <= activeStep;

        // Position coordinates
        let posX: number;
        let rotation: number;
        let transitionDelay = "0ms";

        if (isRight) {
          // Stacked on the right
          posX = rightBaseX - (activeStep - index) * stackOffset;
          // When moving forward, it rolls across with a full 360 rotation + final tilt
          rotation = 360 + step.tiltRight;
        } else {
          // Stacked on the left
          posX = leftBaseX + index * stackOffset;
          rotation = step.tiltLeft;

          // If currently rolling back, stagger each card's roll back to left
          if (isRollingBack) {
            transitionDelay = `${(TOTAL_CARDS - 1 - index) * ROLLBACK_STAGGER}ms`;
            rotation = -360 + step.tiltLeft;
          }
        }

        // Z-index:
        // On left stack: earlier cards on top or natural deck order (higher index on top)
        // On right stack: newly arrived card on top
        const zIndex = isRight ? 20 + index : 10 + index;

        return (
          <div
            key={step.id}
            className="absolute will-change-transform"
            style={{
              top: `calc(50% - ${cardSize / 2}px)`,
              left: `${posX}px`,
              width: `${cardSize}px`,
              height: `${cardSize}px`,
              zIndex,
              transform: `rotate(${rotation}deg)`,
              transformOrigin: "center center",
              transition: isRollingBack
                ? `left ${ROLLBACK_DURATION}ms cubic-bezier(0.25, 1, 0.5, 1) ${transitionDelay}, transform ${ROLLBACK_DURATION}ms cubic-bezier(0.25, 1, 0.5, 1) ${transitionDelay}`
                : `left ${TRANSITION_DURATION}ms cubic-bezier(0.34, 1.15, 0.64, 1), transform ${TRANSITION_DURATION}ms cubic-bezier(0.34, 1.15, 0.64, 1)`,
            }}
          >
            <div className="relative size-full overflow-hidden rounded-[8px] bg-[#121212] shadow-md ring-1 ring-white/10 transition-transform duration-300 hover:scale-105 sm:rounded-[10px]">
              <img
                src={step.image}
                alt={step.id}
                className="size-full object-cover select-none pointer-events-none"
                loading="eager"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
