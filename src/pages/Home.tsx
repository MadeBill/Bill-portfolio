import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import WorksTabSection from "../WorksTabSection";
import Footer from "../Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-full flex flex-col">
      <Navbar />
      <HeroSection />
      <WorksTabSection />
      <Footer />
    </div>
  );
}
