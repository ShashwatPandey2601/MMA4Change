import { motion } from "framer-motion";

export default function HeroEffects() {
  return (
    <>
      {/* Moving Red Glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-64 top-10 h-[700px] w-[700px] rounded-full bg-red-600/15 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-250px] right-[-250px] h-[650px] w-[650px] rounded-full bg-red-700/20 blur-[180px]"
      />

      {/* Film Grain */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
          backgroundSize: "250px",
        }}
      />

      {/* Dark Vignette */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.82)_100%)]" />
    </>
  );
}