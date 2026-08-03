import Navbar from "../layout/Navbar";
import HeroVideo from "./HeroVideo";
import HeroContent from "./HeroContent";
import HeroEffects from "./HeroEffects";
import MouseGlow from "./MouseGlow";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <HeroVideo />

      <HeroEffects />

      <MouseGlow />

      <Navbar />

      <HeroContent />
    </section>
  );
}