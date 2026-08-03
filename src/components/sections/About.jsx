import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="The Story Behind MMA4Change"
        description="More than a documentary. A movement built around martial arts, self-defence and positive change."
        align="center"
      />

      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* Portrait */}

        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          whileHover={{ y: -8 }}
        >
          <GlassCard className="overflow-hidden p-0 border-white/10 hover:border-red-500 transition-all duration-500">

            <img
              src="/images/profile/shashwat.jpg"
              alt="Shashwat Pandey"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </GlassCard>
        </motion.div>

        {/* Biography */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-3 text-sm uppercase tracking-[8px] text-red-500"
          >
            Founder
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold text-white"
          >
            Shashwat Pandey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-lg leading-9 text-gray-300"
          >
            Hi, I'm <span className="font-semibold text-white">Shashwat</span>, founder of{" "}
            <span className="font-semibold text-red-500">MMA4Change</span>.

            <br />
            <br />

            What began as a documentary has grown into a larger mission—to make
            martial arts more accessible while inspiring confidence,
            self-defence, discipline and stronger communities.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg leading-9 text-gray-400"
          >
            Through storytelling, education and community initiatives, I hope
            to show that martial arts are about far more than competition.
            They empower people, build character and create opportunities for
            positive change.

            <br />
            <br />

            The documentary is only the first chapter of that journey.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 border-l-4 border-red-600 pl-6 italic text-2xl text-white"
          >
            "More than fighting. Building confidence, discipline and change."
          </motion.blockquote>

          <div className="mt-12 grid grid-cols-2 gap-6">

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{ duration: 0.25 }}
            >
              <GlassCard className="p-6 text-center hover:border-red-500 transition-all duration-300">

                <h3 className="text-3xl font-bold text-red-500">
                  2026
                </h3>

                <p className="mt-2 text-gray-400">
                  Initiative Started
                </p>

              </GlassCard>
            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{ duration: 0.25 }}
            >
              <GlassCard className="p-6 text-center hover:border-red-500 transition-all duration-300">

                <h3 className="text-3xl">
                  🥋
                </h3>

                <p className="mt-2 text-gray-400">
                  Growing Community
                </p>

              </GlassCard>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </Section>
  );
}