import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./components/layout/Loader";
import Cursor from "./components/layout/Cursor";
import TrailerModal from "./components/layout/TrailerModal";
import JoinMovement from "./components/sections/JoinMovement";
import AmbiencePlayer from "./components/layout/AmbiencePlayer";

import Hero from "./components/hero/Hero";
import Activities from "./components/sections/Activities";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
import Footer from "./components/sections/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [trailerOpen, setTrailerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Cursor />

      <AnimatePresence mode="wait">
        {!loaded && (
          <Loader onFinish={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      {loaded && (
        <>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero onOpenTrailer={() => setTrailerOpen(true)} />

            <Activities onOpenTrailer={() => setTrailerOpen(true)} />

            <About />

            <JoinMovement />

            <Gallery />

            <Footer />
          </motion.main>

          <TrailerModal
            isOpen={trailerOpen}
            onClose={() => setTrailerOpen(false)}
          />
        </>
      )}
      <AmbiencePlayer />
    </div>
  );
}

export default App;