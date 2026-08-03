import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            setVisible(false);

            setTimeout(() => {
              onFinish();
            }, 700);

          }, 500);

          return 100;
        }

        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-[8px] text-white"
          >
            MMA4Change
          </motion.h1>

          <p className="mt-4 text-gray-400 uppercase tracking-[4px]">
            Loading Experience
          </p>

          <div className="mt-12 h-2 w-72 overflow-hidden rounded-full bg-zinc-800">
            <motion.div
              className="h-full bg-red-600"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <p className="mt-4 text-red-400 font-semibold">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}