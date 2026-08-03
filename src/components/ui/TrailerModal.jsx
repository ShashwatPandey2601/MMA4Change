import { motion, AnimatePresence } from "framer-motion";

export default function TrailerModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-[92%] max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-10 rounded-full bg-black/60 px-4 py-2 text-white transition hover:bg-red-600"
            >
              ✕
            </button>

            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Trailer"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}