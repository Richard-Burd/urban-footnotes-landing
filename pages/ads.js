import PageTitle from "@/components/PageTitle";
import Logo from "@/components/Logo";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Volume2, Pause } from "lucide-react";

const BUTTONS = [
  {
    key: 'buyers',
    title: 'Buyers / Renters',
    audioSrc: 'ad-audio-existing-projects.m4a',
    content: [
      "Want to spend less on driving—and more on living?", "Start by choosing the right neighborhood.",
      "You can only walk so far without resorting to a vehicle. But what if daily errands, food, and fun were all just steps from home? How do you find places like that?",
      "Can you walk to what you need? Do people use the same places you would? Is the neighborhood changing? Without those answers—you’re left guessing.",
      "An Urban Foot Notes report gives you a scored rating of pedestrian access to commonly-desired services, showing how easy it is to live at an address without needing to drive.",
      "It answers the big question: “What’s it really like to live there?” A higher walkability rating means more freedom, better health, and lower costs.",
      "Ask your agent, landlord, or builder for an Urban Foot Notes report. Or visit urbanfootnotes.com to check out sample reports yourself."
    ]
  },
  {
    key: 'existing',
    title: 'Existing Projects',
    audioSrc: 'ad-audio-existing-projects.m4a',
    content: [
      "Trying to attract the right buyers or renters?",
      "People often lack insight on how an address’ neighborhood meets their needs. That's when hasty, less-than-ideal judgments get made.",
      "Urban Foot Notes delivers standardized, address-specific, comparative neighborhood reports.",
      "We describe pedestrian access to services and businesses that many residents desire. This is scored.",
      "Walkability means convenience, lower car costs, and a better day-to-day life.",
      "That translates into higher satisfaction—and more money freed up for housing.",
      "Visit urbanfootnotes.com to see samples, contact us, or order your report."
    ]
  },
  {
    key: 'proposed',
    title: 'Proposed Projects',
    audioSrc: 'ad-audio-existing-projects.m4a',
    content: [
      "What if you could add a story to your development proposal—its neighborhood's story, told in data?",
      "Too many projects start with incomplete neighborhood data. That’s where deals can fall apart—or additional opportunities get missed.",
      "Urban Foot Notes delivers personal, investigative neighborhood reports. We analyze business presence, amenity access, land use, and walkability—so you can propose your project with clarity and confidence.",
      "Our reports strengthen your presentations—to development authorities, zoning boards, citizens, city councils, investors and others. They will see a report that will likely attract more buyers and renters.",
      "Support your next project with the targeted data our reports provide. Visit urbanfootnotes.com to see samples, contact us, or order your report."
    ]
  },
  {
    key: 'planners',
    title: 'City Planners',
    audioSrc: 'ad-audio-existing-projects.m4a',
    content: [
      "Tired of the same fights over traffic and density? Blame’s easy. Solutions aren’t.",
      "Sprawling NIMBYs battle developers’ densities. Now often unpleasant compromises seem like the only path forward.",
      "Urban Foot Notes offers standardized, comparative, address-specific neighborhood reports, describing pedestrian access to commonly-used services and businesses, including the percentage of those typically using such services. It’s all scored in the report.",
      "A higher score means more walking, and less driving. The data can shift the discussion to facts.",
      "You can ask or require developers to provide an Urban Foot Notes report. Visit urbanfootnotes.com to see samples, contact us, or order a report."
    ]
  }
];

function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pulseValue, setPulseValue] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setDuration(Math.floor(audio.duration));
    const onTimeUpdate = () =>
      setCurrentTime(Math.floor(audio.currentTime));

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [src]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setPulseValue(0.9 + Math.random() * 0.1); // Simulate reactive pulsing
    }, 200);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const formatTime = (sec) => {
    if (sec < 60) return `${sec} sec`;
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m} min${m > 1 ? "s" : ""}${s > 0 ? ` ${s} sec` : ""}`;
  };

  return (
    <div
      className="flex items-center justify-center gap-4 mb-6 w-full max-w-screen-lg px-4"
      role="group"
      aria-label="Audio controls"
    >
      <button
        onClick={togglePlay}
        className="p-2 bg-[#683816ff] rounded-full text-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
        aria-label="Play or pause audio"
      >
        {isPlaying ? (
          <Pause className="w-20 h-20" aria-hidden="true" />
        ) : (
          <Volume2 className="w-20 h-20" aria-hidden="true" />
        )}
      </button>

      <span className="text-orange-100 text-[17px] lg:text-[24px] whitespace-nowrap">
        {formatTime(duration)}
      </span>

      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e) => {
          const audio = audioRef.current;
          const newTime = parseInt(e.target.value);
          if (audio) {
            audio.currentTime = newTime;
            setCurrentTime(newTime);
          }
        }}
        className="h-2 w-[200px] appearance-none rounded-lg cursor-pointer"
        style={{
          background: `linear-gradient(to right, #f6d7beff 0%, #ba813cff ${Math.min(
            (currentTime / duration) * 100,
            100
          )}%, #683816ff ${Math.min(
            (currentTime / duration) * 100,
            100
          )}%, #683816ff 100%)`,
          transform: `scaleY(${pulseValue})`,
          boxShadow: isPlaying
            ? `0 0 ${pulseValue * 6}px rgba(250, 200, 150, 0.4)`
            : "none",
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        }}
        
      />

      <audio
        key={src}
        ref={audioRef}
        src={src}
        preload="metadata"
        className="sr-only"
      />
    </div>
  );
}

function SelectableButton({ btn, isActive, onClick }) {
  return (
    <div className="flex-none">
      <button
        onClick={onClick}
        className={isActive ? 'bg-[#ba813cff]' : 'bg-transparent'}
      >
        <div
          className="m-3 flex items-center rounded-xl bg-[#683816ff] text-orange-100 lg:m-5"
          style={{
            padding: 6,
            borderRadius: 12,
            ...(isActive && { boxShadow: '8px 8px 12px rgba(0,0,0,0.8)' })
          }}
        >
          <div id="text-element" className="sm:px-2">
            <div className="text-[17px] lg:text-[24px]">{btn.title}</div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function Ads() {
  const [activeKey, setActiveKey] = useState(BUTTONS[0].key);
  const current = BUTTONS.find(b => b.key === activeKey);
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;

  return (
    <main className="text-gray-100">
      <header>
        <div className="hidden min-[1000px]:block w-full max-w-screen-lg mx-auto relative">
          <Image
            src={`${baseUrl}/advertisements-custom-header.svg`}
            alt="Advertisements masthead"
            width={1024}
            height={1}
            className="w-full h-auto"
          />
        </div>
        <div className="block min-[1000px]:hidden bg-gradient-to-r from-black/10 to-black/80 text-center">
          <div className="py-6">
            <Logo color="#f6d7beff" width="240" height="150" />
          </div>
          <div className="title-shadow-ads page-title-shadow roboto-font m-4 text-[36px] tracking-wide text-title-text-ads">
            <span className="block w-full overflow-hidden text-[8vw]">Advertisements</span>
          </div>
        </div>
      </header>

      <nav className="mt-8 w-full max-w-screen-lg mx-auto flex justify-center">
        {BUTTONS.map(btn => (
          <SelectableButton
            key={btn.key}
            btn={btn}
            isActive={btn.key === activeKey}
            onClick={() => setActiveKey(btn.key)}
          />
        ))}
      </nav>

      <section className="mt-1 max-w-screen-lg mx-auto text-left px-4">
        {current.audioSrc && <AudioPlayer src={`${baseUrl}/${current.audioSrc}`} />}
        <article className="space-y-4">
          <h2 className="text-[24px] md:text-[32px] text-center">{current.content[0]}</h2>
          {current.content.slice(1).map((para, idx) => (
            <p key={idx} className="text-[28px]">{para}</p>
          ))}
        </article>
      </section>
    </main>
  );
}
