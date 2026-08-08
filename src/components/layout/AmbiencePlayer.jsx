import { useEffect, useRef, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

export default function AmbiencePlayer() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.12;
    audio.loop = true;

    const startAudio = () => {
      if (!audio || muted) return;

      audio.play().catch(() => {});
    };

    // Try immediately
    startAudio();

    // If Chrome blocks autoplay, start after the user's first interaction
    const handleInteraction = () => {
      startAudio();
    };

    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });
    window.addEventListener("keydown", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, [muted]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (muted) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
  }, [muted]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/gym.mp3"
        preload="auto"
      />

      <button
        onClick={() => setMuted((previous) => !previous)}
        aria-label={muted ? "Turn ambience on" : "Turn ambience off"}
        className="fixed bottom-8 right-8 z-[9999] rounded-full border border-white/10 bg-black/60 p-4 backdrop-blur-xl transition hover:scale-110 hover:border-red-500"
      >
        {muted ? (
          <FiVolumeX className="text-xl text-white" />
        ) : (
          <FiVolume2 className="text-xl text-red-500" />
        )}
      </button>
    </>
  );
}