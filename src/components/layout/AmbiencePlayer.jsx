import { useEffect, useRef, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

export default function AmbiencePlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.12;
    audio.loop = true;

    // Try autoplay
    audio.play().catch(() => {
      setPlaying(false);
    });
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("Could not play gym.mp3:", error);
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/gym.mp3"
        preload="auto"
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        onClick={toggleAudio}
        aria-label={playing ? "Turn ambience off" : "Turn ambience on"}
        className="
          fixed bottom-8 right-8 z-[9999]
          rounded-full
          border border-white/10
          bg-black/60
          p-4
          text-white
          backdrop-blur-xl
          transition-all duration-300
          hover:scale-110
          hover:border-red-500
          dark:bg-black/60
          dark:text-white
        "
      >
        {playing ? (
          <FiVolume2 className="text-xl text-red-500" />
        ) : (
          <FiVolumeX className="text-xl text-white" />
        )}
      </button>
    </>
  );
}