import { motion } from "framer-motion";

export default function Section({
  children,
  className = "",
  id = "",
  dark = true,
}) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-[#050505]" : "bg-[#0d0d0d]"} py-32 md:py-40 px-6 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="mx-auto max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
}