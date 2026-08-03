import { motion } from "framer-motion";

export default function TiltCard({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      whileHover={{
        rotateX: 4,
        rotateY: -4,
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}