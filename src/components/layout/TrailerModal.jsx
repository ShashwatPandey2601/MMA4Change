import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiPlay } from "react-icons/fi";

export default function TrailerModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b]"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 transition hover:bg-red-600"
            >
              <FiX size={22} />
            </button>

            <div className="aspect-video flex flex-col items-center justify-center bg-gradient-to-br from-[#0d0d0d] to-black text-center">

              <FiPlay className="mb-6 text-6xl text-red-500" />

              <h2 className="text-4xl font-black">
                Trailer Coming Soon
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                We're currently filming MMA4Change.
                <br />
                The official trailer will premiere here once production is complete.
              </p>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}