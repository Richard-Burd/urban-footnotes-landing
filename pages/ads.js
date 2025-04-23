import Logo from "@/components/Logo";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Volume2, Pause, ChevronDown, ChevronUp } from "lucide-react";

const BUTTONS = [
  {
    key: 'buyers',
    title: 'Buyers / Renters',
    audioSrc: 'ad-audio-buyers-renters.m4a',
    showAudio: true,
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
    showAudio: true,
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
    audioSrc: 'ad-audio-proposed-projects.m4a',
    showAudio: true,
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
  },
  // …add your other 7 ads here, each with key, title, audioSrc, showAudio, content
];

function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration,    setDuration]    = useState(0);
  const [isPlaying,  setIsPlaying]   = useState(false);
  const [pulseValue, setPulseValue]  = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onLoaded    = () => setDuration(Math.floor(audio.duration));
    const onTimeUpdate= () => setCurrentTime(Math.floor(audio.currentTime));
    const onPlay      = () => setIsPlaying(true);
    const onPause     = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate",     onTimeUpdate);
    audio.addEventListener("play",           onPlay);
    audio.addEventListener("pause",          onPause);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate",     onTimeUpdate);
      audio.removeEventListener("play",           onPlay);
      audio.removeEventListener("pause",          onPause);
    };
  }, [src]);

  useEffect(() => {
    if (!isPlaying) return;
    const iv = setInterval(() => {
      setPulseValue(0.95 + Math.random() * 0.05);
    }, 200);
    return () => clearInterval(iv);
  }, [isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.paused ? audio.play() : audio.pause();
  };

  const formatTime = (sec) => {
    if (sec < 60) return `${sec} sec`;
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m} min${m>1?'s':''}${s>0?` ${s} sec`:''}`;
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-6 w-full max-w-screen-lg px-4">
      <button
        onClick={togglePlay}
        className="p-2 bg-[#683816ff] rounded-full text-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying
          ? <Pause   className="w-20 h-20" />
          : <Volume2 className="w-20 h-20" />}
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
          const t = parseInt(e.target.value);
          if (audio) {
            audio.currentTime = t;
            setCurrentTime(t);
          }
        }}
        className="h-2 w-[200px] appearance-none rounded-lg cursor-pointer"
        style={{
          background: `linear-gradient(to right,
            #f6d7beff 0%,
            #ba813cff ${Math.min((currentTime/duration)*100,100)}%,
            #683816ff ${Math.min((currentTime/duration)*100,100)}%,
            #683816ff 100%)`,
          transform: `scaleY(${pulseValue})`,
          boxShadow: isPlaying
            ? `0 0 ${pulseValue*6}px rgba(250,200,150,0.4)`
            : "none",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
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

export default function Ads() {
  const [activeKey, setActiveKey] = useState('existing');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const current = BUTTONS.find(b => b.key === activeKey);
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;

  return (
    <main className="text-gray-100">
      {/* Header */}
      <header>
        <div className="hidden min-[1000px]:block w-full max-w-screen-lg mx-auto relative">
          <Image
            src={`${baseUrl}/advertisements-custom-header.svg`}
            alt="Advertisements masthead"
            width={1024} height={1}
            className="w-full h-auto"
          />
        </div>
        <div className="block min-[1000px]:hidden bg-gradient-to-r from-black/10 to-black/80 text-center">
          <div className="py-6">
            <Logo color="#f6d7beff" width={240} height={150} />
          </div>
          <div className="roboto-font m-4 text-[36px] tracking-wide text-title-text-ads">
            <span className="block w-full overflow-hidden text-[8vw]">
              Advertisements
            </span>
          </div>
        </div>
      </header>

      {/* Custom dropdown selector with separate label */}
      <div className="mt-6 max-w-screen-lg mx-auto px-4 flex items-center">
        {/* Prompt to the left */}
        <span className="text-[20px] text-orange-100 mr-4">
          What is your focus?
        </span>

        {/* Dropdown button */}
        <div className="relative flex-grow">
          <button
            onClick={() => setDropdownOpen(o => !o)}
            className="w-full text-left bg-[#683816ff] hover:bg-[#7a4820ff] rounded-lg px-4 py-3 flex justify-between items-center text-[20px] text-orange-100"
          >
            {current.title}
            {dropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </button>

          {dropdownOpen && (
            <ul className="absolute z-10 w-full bg-[#683816ff] rounded-b-lg shadow-lg mt-1">
              {BUTTONS.map(b => (
                <li key={b.key}>
                  <button
                    onClick={() => {
                      setActiveKey(b.key);
                      setDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 hover:bg-[#7a4820ff]
                      ${b.key === activeKey ? 'font-bold' : ''} text-[18px] text-orange-100`}
                  >
                    {b.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Content Section */}
      <section className="mt-6 max-w-screen-lg mx-auto px-4">
        {current.showAudio && (
          <AudioPlayer src={`${baseUrl}/${current.audioSrc}`} />
        )}
        <article className="space-y-4">
          <h2 className="text-[24px] md:text-[32px] text-left">
            {current.content[0]}
          </h2>
          {current.content.slice(1).map((p, i) => (
            <p key={i} className="text-[28px]">
              {p}
            </p>
          ))}
        </article>
      </section>
    </main>
  );
}

