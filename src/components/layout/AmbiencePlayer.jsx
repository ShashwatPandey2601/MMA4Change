import { useEffect, useRef, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

export default function AmbiencePlayer() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.12;
    audioRef.current.loop = true;

    if (!muted) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
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
        onClick={() => setMuted(!muted)}
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