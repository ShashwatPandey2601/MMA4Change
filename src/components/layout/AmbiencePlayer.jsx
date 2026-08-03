import { useEffect, useRef, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

export default function AmbiencePlayer() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);

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
      <audio ref={audioRef}>
        <source src="/audio/gym.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={() => setMuted(!muted)}
        className="fixed bottom-8 right-8 z-[9999] rounded-full border border-white/10 bg-black/60 p-4 backdrop-blur-xl transition hover:scale-110 hover:border-red-500"
      >
        {muted ? (
          <FiVolumeX className="text-white text-xl" />
        ) : (
          <FiVolume2 className="text-red-500 text-xl" />
        )}
      </button>
    </>
  );
}