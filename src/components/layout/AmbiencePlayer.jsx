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
    audio.preload = "auto";

    // Try autoplay
    audio.play().catch(() => {
      // Browser blocked autoplay.
      // The button below can start it.
    });
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (muted) {
      try {
        await audio.play();
        setMuted(false);
      } catch (error) {
        console.error("Could not play gym.mp3:", error);
      }
    } else {
      audio.pause();
      setMuted(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/gym.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={toggleAudio}
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