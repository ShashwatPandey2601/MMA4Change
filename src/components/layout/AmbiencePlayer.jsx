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

    const tryPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    };

    tryPlay();

    const startAfterInteraction = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    };

    window.addEventListener("pointerdown", startAfterInteraction, {
      once: true,
    });

    window.addEventListener("keydown", startAfterInteraction, {
      once: true,
    });

    return () => {
      window.removeEventListener("pointerdown", startAfterInteraction);
      window.removeEventListener("keydown", startAfterInteraction);
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch (error) {
      console.error("gym.mp3 could not play:", error);
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
          light:border-black/10
          light:bg-white/80
          light:text-gray-800
        "
      >
        {playing ? (
          <FiVolume2 className="text-xl text-red-500" />
        ) : (
          <FiVolumeX className="text-xl" />
        )}
      </button>
    </>
  );
}