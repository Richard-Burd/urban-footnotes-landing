import Logo from "@/components/Logo";
import { useState, useRef, useEffect } from "react";
import { Volume2, Pause, ChevronDown } from "lucide-react";
import PageTitle from "@/components/PageTitle";
import styles from '../styles/Button.module.css'

const BUTTONS = [
  {
    key: 'existing',
    role: 'Developers',
    title: 'Existing Projects',
    audioSrc: 'ad-audio-existing-projects.m4a',
    showAudio: false,
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
    key: 'existing_needs',
    role: 'Developers',
    title: 'Project Planning',
    audioSrc: 'ad-audio-buyers-renters.m4a',
    showAudio: true,
    content: [
      "Struggling to convince buyers or renters that your property fits their needs?",
      "You can’t control everything a neighborhood lacks—but you can clearly understand and address those gaps.",
      "Urban Foot Notes delivers personal, investigative neighborhood reports. We analyze business presence, amenity access, land use, and walkability—working like a checklist to help you or partners strategically plan future improvements.",
      "This report can be used to promote other developments, including your own.",
      "Use this clarity to market smarter and guide future investments effectively.",
      "Visit urbanfootnotes.com to view samples or request your report today."
    ]
  },
];




// AudioPlayer component to play audio files with a progress bar and play/pause button

function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (sec) => {
    if (isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.paused ? audio.play() : audio.pause();
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onLoaded = () => setDuration(audio.duration);
    const onTimeUpdate = () => setProgress(audio.currentTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  const onSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const t = parseFloat(e.target.value);
    audio.currentTime = t;
    setProgress(t);
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-6 w-1/3 mx-auto px-4">
      <button
        onClick={togglePlay}
        className="p-4 bg-[#683816ff] rounded-full text-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
      >
        {isPlaying 
          ? <Pause className="w-20 h-20" /> 
          : <Volume2 className="w-20 h-20" />
        }
      </button>

      <input
        type="range"
        min="0"
        max={duration}
        value={progress}
        step="0.1"
        onChange={onSeek}
        className="flex-grow h-2 rounded-lg cursor-pointer bg-gray-300/50 accent-orange-400"
      />

      <span className="text-orange-100 text-sm whitespace-nowrap">
        {formatTime(progress)} / {formatTime(duration)}
      </span>

      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        hidden
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}



export default function Ads() {
  const [activeKey, setActiveKey] = useState('existing');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openRole, setOpenRole] = useState(null);

  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  const current = BUTTONS.find(b => b.key === activeKey);

  useEffect(() => {
    const close = e => {
      if (!e.target.closest('.dropdown')) {
        setDropdownOpen(false);
        setOpenRole(null);
      }
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    <main className="text-gray-100">
      <div>
        <center>
          <PageTitle
            topTitle="Outreach"
            textColor="text-title-text-ads"
            shadowColor="title-shadow-ads"
            logoColor="#f6d7beff"
            gradient="bg-[linear-gradient(to_right,rgba(87,73,61,0.1),rgba(67,41,19,0.9))]"
            mobileTitleCentered={false}
            showLogo
          />
        </center>
      </div>
      
      <div className="mt-6 max-w-screen-lg mx-auto px-10 flex items-center">
        <span className="text-[28px] text-orange-100 mr-4">What is your focus or role?</span>
        <div className="relative flex-grow dropdown">
          <button
            onClick={() => setDropdownOpen(o => !o)}
            className={styles.slim}
          >
            {current.role}: {current.title}
            <ChevronDown className={`transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 w-full bg-[#683816ff] rounded-b-lg shadow-lg mt-1">
              {Object.entries(
                BUTTONS.reduce((acc, item) => {
                  acc[item.role] = acc[item.role] || [];
                  acc[item.role].push(item);
                  return acc;
                }, {})
              ).map(([role, items]) => (
                <div key={role} className="border-t border-[#805a44]">
                  <button
                    onClick={() => setOpenRole(openRole === role ? null : role)}
                    className={styles.slim}
                  >
                    <span className="">{role}</span>
                    <ChevronDown
                      className={`transform transition-transform duration-200 ${openRole === role ? 'rotate-180' : ''}`}  />
                  </button>
                  <div className={`overflow-hidden transition-max-height duration-300 ease-out ${openRole === role ? 'max-h-screen' : 'max-h-0'}`}> 
                    {items.map(item => (
                      <button
                        key={item.key}
                        onClick={() => { setActiveKey(item.key); setDropdownOpen(false); setOpenRole(null); }}
                        className="block w-full text-left px-8 py-2 text-[24px] text-orange-100 hover:bg-[#85b7dfff] hover:text-[#23211f] transition-colors duration-200"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <section className="mt-6 max-w-screen-lg mx-auto px-4">
        {current.showAudio && <AudioPlayer src={`${baseUrl}/${current.audioSrc}`} />}
        <article className="space-y-4">
          <h2 className="text-[24px] md:text-[28px] text-left text-orange-100 mr-4">{current.content[0]}</h2>
          {current.content.slice(1).map((p, idx) => (
            <p key={idx} className="text-[28px] text-orange-100 mr-4">{p}</p>
          ))}
        </article>
      </section>
    </main>
  );
}
