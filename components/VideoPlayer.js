"use client";

import { useRef, useState, useEffect } from "react";

export default function VideoPlayer({ src, poster }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.autoplay = true;
    v.play().catch(() => {}); // muted autoplay is allowed
  }, []);

  const unmute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    setMuted(false);
  };

  return (
    <div className="relative mx-auto mb-8 w-full max-w-screen-md px-4">
      <video
        ref={ref}
        src={src}
        autoPlay
        playsInline
        controls
        muted={muted}
        poster={poster}
        preload="metadata"
        className="block w-full max-h-[520px] rounded-lg shadow-lg bg-black"
      />

      {muted && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={unmute}
            aria-label="Unmute video"
            title="Unmute video"
            className="h-14 w-56 rounded-lg bg-black/40 text-white/80 font-semibold shadow-lg
                       hover:bg-black/60 hover:text-white transition
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            🔊 Tap to Unmute
          </button>
        </div>
      )}
    </div>
  );
}
