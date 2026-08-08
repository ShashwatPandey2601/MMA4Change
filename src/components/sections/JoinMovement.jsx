import { motion } from "framer-motion";
import { FiUsers, FiShield, FiHeart, FiArrowRight } from "react-icons/fi";

import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

export default function JoinMovement() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const cards = [
    {
      icon: <FiShield size={34} />,
      title: "Schools",
      description:
        "Invite MMA4Change to your school and introduce students to confidence, discipline and practical self-defence.",
    },
    {
      icon: <FiUsers size={34} />,
      title: "Academies",
      description:
        "Partner with us to inspire more people through martial arts, education and community outreach.",
    },
    {
      icon: <FiHeart size={34} />,
      title: "Supporters",
      description:
        "Whether you're an athlete, filmmaker, volunteer or simply believe in our mission, we'd love to hear from you.",
    },
  ];

  return (
    <Section id="join">
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-[#0d0d0d] to-[#050505] px-8 py-20 light-join-card">

        {/* Animated Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 blur-[180px]"
          style={{ opacity: 0.08 }}
        />

        <SectionHeading
          eyebrow="Join the Movement"
          title="Be Part of Something Bigger"
          description="Whether you're a school, academy, athlete or supporter, there's a place for you in the MMA4Change journey."
          align="center"
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">

          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
              }}
              whileHover={{
                y: -10,
              }}
            >
              <GlassCard className="flex h-full flex-col border-white/10 p-8 transition-all duration-300 hover:border-red-500">

                <div className="text-red-500">
                  {card.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-5 flex-1 leading-8 text-gray-400">
                  {card.description}
                </p>

                <button
                  onClick={scrollToContact}
                  className="mt-8 flex items-center gap-2 font-semibold text-red-500 transition-all duration-300 hover:gap-4"
                >
                  Get in Touch

                  <FiArrowRight />
                </button>

              </GlassCard>
            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative mt-20 text-center"
        >

          <p className="mx-auto max-w-3xl text-3xl font-light leading-relaxed text-gray-300 italic">
            "Every punch thrown in the gym is more than training.
            <br />
            It's confidence gained, discipline built and lives changed."
          </p>

        </motion.div>

      </div>
    </Section>
  );
}