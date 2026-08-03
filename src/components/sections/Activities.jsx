import { motion } from "framer-motion";
import {
  FiFilm,
  FiShield,
  FiUsers,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi";

import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

export default function Activities({ onOpenTrailer }) {
  const activities = [
    {
      title: "Self-Defence Workshops",
      icon: <FiShield />,
      description:
        "Practical workshops designed to build confidence, awareness and essential self-defence skills.",
    },
    {
      title: "Community Outreach",
      icon: <FiUsers />,
      description:
        "Partnering with gyms, athletes and communities to create lasting impact through martial arts.",
    },
    {
      title: "School Awareness",
      icon: <FiBookOpen />,
      description:
        "Helping students discover discipline, resilience and confidence through martial arts.",
    },
  ];

  return (
    <Section id="activities">
      <SectionHeading
        eyebrow="Activities"
        title="Creating Change Through Martial Arts"
        description="The documentary is only the beginning. MMA4Change is a growing initiative using martial arts to build confidence, self-defence and stronger communities."
        align="center"
      />

      {/* Featured Documentary */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9 }}
        className="mt-16"
      >
        <GlassCard
          onClick={onOpenTrailer}
          className="group cursor-pointer overflow-hidden border-white/10 p-0 transition-all duration-500 hover:-translate-y-2 hover:border-red-500"
        >
          <div className="grid lg:grid-cols-2">

            {/* Poster */}

            <div className="relative overflow-hidden">

              <img
                src="/images/documentary/poster.png"
                alt="Documentary Poster"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <span className="absolute bottom-6 left-6 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest shadow-lg shadow-red-600/30">
                ● Currently Filming
              </span>

            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-10">

              <div className="flex items-center gap-3 text-red-500">

                <FiFilm size={28} />

                <span className="font-semibold uppercase tracking-[5px]">
                  Documentary Project
                </span>

              </div>

              <h2 className="mt-6 text-4xl font-black">
                Our First Initiative
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                Our documentary follows athletes, coaches and communities to
                explore how martial arts build confidence, resilience,
                discipline and meaningful social impact.
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenTrailer();
                }}
                className="mt-10 flex w-fit items-center gap-3 rounded-full bg-red-600 px-7 py-4 font-semibold transition-all duration-300 hover:gap-5 hover:bg-red-700"
              >
                Watch Trailer

                <FiArrowRight />
              </button>

            </div>

          </div>
        </GlassCard>
      </motion.div>

      {/* Other Activities */}

      <div className="mt-10 grid gap-8 md:grid-cols-3">

        {activities.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              delay: index * 0.12,
              duration: 0.7,
            }}
            whileHover={{
              y: -10,
            }}
          >
            <GlassCard className="h-full border-white/10 p-8 transition-all duration-300 hover:border-red-500">

              <div className="text-3xl text-red-500">
                {activity.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {activity.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {activity.description}
              </p>

              <span className="mt-8 inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-gray-300">
                Coming Soon
              </span>

            </GlassCard>
          </motion.div>
        ))}

      </div>
    </Section>
  );
}