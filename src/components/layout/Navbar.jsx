import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Activities", href: "#activities" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-1/2 z-50 flex w-[92%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-xl"
    >
      {/* Logo */}

      <a
        href="#home"
        className="text-2xl font-bold tracking-wider text-white"
      >
        MMA<span className="text-red-500">4</span>Change
      </a>

      {/* Navigation */}

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

      {/* Theme Toggle */}

      <button
        onClick={() => setIsLight(!isLight)}
        aria-label="Toggle theme"
        className="relative flex h-9 w-[68px] items-center rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-md transition-all duration-300 hover:border-red-500/50"
      >
        {/* Sliding circle */}

        <motion.div
          animate={{
            x: isLight ? 29 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-lg"
        >
          {isLight ? "☀️" : "🌙"}
        </motion.div>

        {/* Background icons */}

        <span className="absolute left-2 text-xs opacity-70">
          🌙
        </span>

        <span className="absolute right-2 text-xs opacity-70">
          ☀️
        </span>
      </button>
    </motion.nav>
  );
}