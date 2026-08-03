import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.015,
            }
          : {}
      }
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.35)]
        ${className}
      `}
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-red-600/15 blur-3xl" />
      </div>

      {/* Top Border Glow */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}