import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-red-600 text-white shadow-lg shadow-red-600/30 hover:bg-red-700 hover:scale-105",

    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10 hover:scale-105",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}