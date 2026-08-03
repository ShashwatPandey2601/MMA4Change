import { motion } from "framer-motion";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-24 text-white"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-red-600 blur-[180px]"
      />

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <h2 className="text-5xl font-black tracking-tight">
            MMA<span className="text-red-500">4</span>Change
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            More than fighting.
            <br />
            Building confidence, discipline and change.
          </p>
        </motion.div>

        {/* Contact Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {[
            {
              icon: <FiInstagram />,
              title: "Instagram",
              value: "@mma.4.change",
              href: "https://instagram.com/mma.4.change",
            },
            {
              icon: <FiMail />,
              title: "Email",
              value: "shashwat@mma4change.com",
              href: "mailto:shashwat@mma4change.com",
            },
            {
              icon: <FiPhone />,
              title: "Phone",
              value: "+91 8630168140",
              href: "tel:+918630168140",
            },
          ].map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.title === "Instagram" ? "_blank" : undefined}
              rel={item.title === "Instagram" ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-red-500 hover:bg-white/10"
            >
              <div className="text-3xl text-red-500">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 break-all text-gray-400">
                {item.value}
              </p>
            </motion.a>
          ))}

        </div>

        <div className="mt-20 h-px w-full bg-white/10" />

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-center md:flex-row">

          <p className="text-sm text-gray-500">
            © 2026 MMA4Change. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with ❤️ in India
          </p>

        </div>

      </div>
    </footer>
  );
}