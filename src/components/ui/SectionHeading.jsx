import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`mb-16 ${
        align === "center" ? "text-center mx-auto" : ""
      }`}
    >
      {eyebrow && (
        <p className="mb-4 text-sm uppercase tracking-[8px] text-red-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-5xl md:text-7xl leading-none font-bold text-white">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-2xl text-lg leading-8 text-gray-400 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}