import { motion } from "framer-motion";
import { FaPlay, FaCircle } from "react-icons/fa";

export default function Documentary() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-36 text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-700/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[6px] text-red-500"
        >
          Current Project
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-6xl font-black"
        >
          MMA Documentary
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl text-xl text-gray-400"
        >
          A cinematic documentary exploring how martial arts shape lives,
          build resilience and create positive social change.
        </motion.p>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Poster */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center"
          >

            <div className="absolute inset-0 bg-red-700/10" />

            <div className="text-center z-10">

              <h3 className="text-4xl font-black">

                DOCUMENTARY

              </h3>

              <p className="mt-4 text-gray-400">

                Poster Placeholder

              </p>

            </div>

          </motion.div>

          {/* Details */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex items-center gap-3 rounded-full bg-green-500/20 px-5 py-3 text-green-400">

              <FaCircle className="text-xs animate-pulse" />

              ACTIVE

            </span>

            <h3 className="mt-10 text-4xl font-black">

              Production Status

            </h3>

            <div className="mt-8 h-4 overflow-hidden rounded-full bg-zinc-800">

              <div className="h-full w-[48%] rounded-full bg-red-600"></div>

            </div>

            <p className="mt-3 text-gray-400">

              48% Complete

            </p>

            {/* Timeline */}

            <div className="mt-12 space-y-6">

              <div className="flex justify-between border-b border-white/10 pb-3">

                <span>Research</span>

                <span>✓</span>

              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">

                <span>Planning</span>

                <span>✓</span>

              </div>

              <div className="flex justify-between border-b border-white/10 pb-3 text-red-500">

                <span>Filming</span>

                <span>●</span>

              </div>

              <div className="flex justify-between border-b border-white/10 pb-3 text-gray-500">

                <span>Editing</span>

                <span>○</span>

              </div>

              <div className="flex justify-between border-b border-white/10 pb-3 text-gray-500">

                <span>Release</span>

                <span>○</span>

              </div>

            </div>

            <button className="mt-12 flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold transition hover:bg-red-700">

              <FaPlay />

              Watch Trailer

            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}