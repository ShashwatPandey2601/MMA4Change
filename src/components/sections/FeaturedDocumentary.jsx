import { useState } from "react";
import { FiPlay, FiCheckCircle } from "react-icons/fi";

import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import TrailerModal from "../layout/TrailerModal";

export default function FeaturedDocumentary() {
  const [openTrailer, setOpenTrailer] = useState(false);

  const stages = [
    { title: "Research", done: true },
    { title: "Planning", done: true },
    { title: "Community Outreach", active: true },
    { title: "Workshops" },
    { title: "Expansion" },
  ];

  return (
    <>
      <Section id="documentary">
        <SectionHeading
          eyebrow="Our First Initiative"
          title="Building a Movement"
          description="MMA4Change is dedicated to making martial arts more accessible while promoting self-defence, confidence, discipline and positive social impact. Our documentary is the first step in sharing this vision."
          align="center"
        />

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Poster */}

          <GlassCard className="group overflow-hidden p-0">

            <button
              onClick={() => setOpenTrailer(true)}
              className="relative block w-full overflow-hidden"
            >
              <div className="relative aspect-[4/5]">

                <img
                  src="/images/documentary/poster.png"
                  alt="MMA4Change"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">

                  <div className="rounded-full bg-red-600 p-6 shadow-2xl">
                    <FiPlay className="text-4xl text-white" />
                  </div>

                </div>

                <div className="absolute bottom-8 left-8">

                  <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest">
                    ● First Project
                  </span>

                </div>

              </div>

            </button>

          </GlassCard>

          {/* Content */}

          <GlassCard className="flex flex-col justify-between p-10">

            <div>

              <h3 className="text-3xl font-bold">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                MMA4Change is more than a documentary. We aim to spread awareness
                about martial arts as a tool for self-defence, confidence,
                discipline and personal growth. By sharing inspiring stories and
                engaging with communities, we hope to encourage more people to
                discover the positive impact of combat sports.
              </p>

              <div className="mt-10 space-y-5">

                {stages.map((stage) => (

                  <div
                    key={stage.title}
                    className="flex items-center justify-between border-b border-white/10 pb-4"
                  >

                    <span>{stage.title}</span>

                    {stage.done && (
                      <FiCheckCircle className="text-emerald-400 text-xl" />
                    )}

                    {stage.active && (
                      <span className="rounded-full bg-red-600 px-3 py-1 text-xs uppercase tracking-widest">
                        Active
                      </span>
                    )}

                    {!stage.done && !stage.active && (
                      <span className="text-gray-500">
                        Upcoming
                      </span>
                    )}

                  </div>

                ))}

              </div>

            </div>

            <Button
              className="mt-10 w-full"
              onClick={() => setOpenTrailer(true)}
            >
              <FiPlay className="mr-2" />
              Watch Our Journey
            </Button>

          </GlassCard>

        </div>
      </Section>

      <TrailerModal
        isOpen={openTrailer}
        onClose={() => setOpenTrailer(false)}
      />
    </>
  );
}