import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "Activities", href: "#activities" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between px-8 py-4">

        <a
          href="#home"
          className="text-2xl font-bold tracking-wider text-white"
        >
          MMA<span className="text-red-500">4</span>Change
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-300 transition hover:text-red-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </motion.nav>
  );
}