import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pt-32 md:pt-40">

      <div className="mx-auto max-w-6xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-sm uppercase tracking-[8px] text-red-400"
        >
          Martial Arts • Community • Positive Change
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="leading-none font-black tracking-tight
          text-5xl
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
          xl:text-[7rem]"
        >
          MMA<span className="text-red-500">4</span>Change
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-2xl"
        >
          Every fighter has a story.
          <br />
          Every story has the power to change a life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14"
        >
          <a
            href="#activities"
            className="inline-flex items-center rounded-full bg-red-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
          >
            Explore Our Mission
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 grid grid-cols-3 gap-6 border-t border-white/10 pt-8"
        >
          <div>
            <h2 className="text-4xl font-black text-red-500">01</h2>
            <p className="mt-2 text-gray-400">Mission</p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-red-500">2026</h2>
            <p className="mt-2 text-gray-400">Founded</p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-red-500">∞</h2>
            <p className="mt-2 text-gray-400">Impact</p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-20 flex justify-center"
        >
          <FaArrowDown className="text-2xl text-gray-400" />
        </motion.div>

      </div>

    </div>
  );
}