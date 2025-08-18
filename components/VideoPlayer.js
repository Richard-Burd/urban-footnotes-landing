"use client";

import { useRef, useState, useEffect } from "react";

export default function VideoPlayer({ src, poster }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  // Ensure muted autoplay
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.autoplay = true;
    v.play().catch(() => {}); // autoplay muted is allowed
  }, []);

  const unmute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    setMuted(false);
    // don’t call v.play() here — let native controls handle playback
  };

  return (
    <div className="relative mx-auto mb-8 w-full max-w-screen-md px-4">
      <video
        ref={ref}
        src={src}
        autoPlay
        loop
        playsInline
        controls
        muted={muted}
        poster={poster}
        preload="metadata"
        className="block w-full max-h-[520px] rounded-lg shadow-lg bg-black"
      />

      {muted && (
        <button
          onClick={unmute}
          aria-label="Unmute video"
          title="Unmute video"
          className="absolute inset-0 m-auto flex h-14 w-56 items-center justify-center rounded-lg 
                     bg-black/40 text-white/50 font-semibold shadow-lg
                     hover:bg-black/60 hover:text-white transition
                     focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          🔊 Tap to Unmute
        </button>
      )}
    </div>
  );
}
