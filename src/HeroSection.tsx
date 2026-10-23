import { useState, useEffect } from "react";
import HeroLogoTracker from "./HeroLogoTracker";
import img0 from "@/imports/image.png";
import img1 from "@/imports/image-1.png";
import img2 from "@/imports/image-2.png";
import img3 from "@/imports/image-3.png";
import img4 from "@/imports/image-4.png";
import img5 from "@/imports/image-5.png";

const slides = [img0, img1, img2, img3, img4, img5];
const heroAvatar = "/assets/hero/88b77.png";

function AvatarBadge() {
  return (
    <div className="relative size-[58px] shrink-0 sm:size-[72px]">
      <img
        src={heroAvatar}
        alt="Bill, Aniekan Ekan"
        className="absolute inset-0 w-full h-full rounded-full object-cover"
      />
    </div>
  );
}

function ImageSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 lg:shrink-0 lg:w-[520px]" style={{ aspectRatio: "1/1" }}>
      <div className="absolute inset-0 rounded-[16px] sm:rounded-[20px] overflow-hidden">
        <img
          src={slides[current]}
          alt={`Project screenshot ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: fading ? 0 : 1, transition: "opacity 0.4s ease" }}
        />
      </div>
      <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 flex gap-[6px] z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "20px" : "8px",
              height: "8px",
              background: i === current ? "#d629cc" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="w-full bg-black px-4 py-10 sm:px-8 sm:py-16 lg:px-[120px] lg:pb-[80px] lg:pt-[37px]">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[60px] max-w-[1270px] mx-auto">
        {/* left: bio */}
        <div className="w-full lg:flex-1 lg:max-w-[620px]">
          {/* name block */}
          <div
            className="mb-6 flex items-start gap-4 sm:mb-[28px] sm:gap-[28px]"
            data-node-id="261:11"
          >
            <AvatarBadge />
            <div className="flex min-w-0 flex-col items-start gap-2 sm:w-[402px] sm:shrink-0 sm:gap-[12px]">
              <h1
                className="font-['Instrument_Sans:Bold',sans-serif] text-[28px] font-bold leading-[32px] tracking-tight text-white uppercase sm:text-[36px] lg:text-[40px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Bill, Aniekan Ekan
              </h1>
              <p
                className="font-['Instrument_Sans:Medium',sans-serif] text-[14px] font-medium leading-[32px] text-white/80 sm:text-[18px] lg:text-[20px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Product designer - design engineer
              </p>
            </div>
          </div>
          {/* bio paragraphs */}
          <div
            className="font-['Instrument_Sans:Medium',sans-serif] font-medium text-white text-[14px] sm:text-[15px] leading-[1.75] space-y-[16px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p>
              {"I'm a Product Designer with "}
              <strong className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-white">
                4+ years of experience
              </strong>
              {" across fintech, SaaS, edtech, gaming, and consumer apps. I design products users enjoy that solve problems, improve engagement, and drive business growth and revenue."}
            </p>
            <p>
              {"At Ndloo, I led product development from concept to launch. The product was later acquired while having "}
              <strong className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#ffff00]">
                30k+ users.
              </strong>
            </p>
            <p>
              {"My work also includes Paxi ("}
              <strong className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#5c7cfa]">
                6K+ users
              </strong>
              {"), Tekspec ("}
              <strong className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#ffff00]">
                20+ hospitals
              </strong>
              {", launched Feb 2026), and Quanvaulte ("}
              <strong className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[#ff00ff]">
                3+ schools
              </strong>
              {", launched Oct 2026)."}
            </p>
          </div>
          <div className="mt-8 sm:mt-10">
            <HeroLogoTracker />
          </div>
        </div>
        {/* right: slideshow */}
        <div className="w-full lg:shrink-0 lg:w-[520px]">
          <ImageSlideshow />
        </div>
      </div>
    </div>
  );
}
