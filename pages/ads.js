import Logo from "@/components/Logo";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Volume2, Pause, ChevronDown, Square } from "lucide-react";
import PageTitle from "@/components/PageTitle";
import styles from '../styles/Button.module.css'
import Image from "next/image";

// Button definitions (constant)
const BUTTONS = [
  {
    key: 'existing',
    role: 'Developers',
    title: 'Existing Projects',
    audioSrc: 'ad-dev-existing.mp3',
    showAudio: false,
    videoSrc: 'ad-vid-existing-projects.mp4',
    showVideo: true,
    content: [
      "Are you trying to attract the right buyers or renters?",
      "People need reliable data on how an area fits their needs.",
      "Urban Foot Notes delivers standardized, address-specific, comparative neighborhood reports.",
      "We describe and score pedestrian access to services and businesses that many residents desire.",
      "High walkability scores translate to convenience, lower transportation costs, and healthier lifestyles.",
      "Our data-driven insights show them exactly how your property fits their lifestyle.",
      "Visit urbanfootnotes.com to see samples, contact us, or order your report."
    ]
  },
  {
    key: 'existing_needs',
    role: 'Developers',
    title: 'Project Planning',
    showAudio: false,
    videoSrc: 'vid-project-planning.mp4',
    showVideo: true,
    content: [
      "Are you struggling to convince buyers or renters that your property fits their needs?",
      "You can’t control everything a neighborhood lacks, but you can  understand and address those gaps.",
      "Urban Foot Notes delivers personal, investigative neighborhood reports that pinpoint exactly what's missing, givin you a strategic checklist to plan future improvements or investments.",
      "This report can be used to promote other developments, including your own.",
      "Market smarter, invest strategically, and attract more interest.",
      "Visit urbanfootnotes.com to view samples, contact us or request your report today."
    ]
  },
  {
    key: 'proposed',
    role: 'Developers',
    title: 'Proposed Developments',
    audioSrc: 'ad-dev-proposed.mp3',
    showAudio: false,
    videoSrc: 'vid-dev-new-projects.mp4',
    showVideo: true,
    content: [
      "What if you could show exactly why a neighborhood is ideal for your project?",
      "Incomplete details of the surrounding area can weaken proposals, and cause missed opportunities.",
      "Urban Foot Notes provides straight-forward reports analyzing amenities, walkability, land use, and nearby businesses.",
      "Present our reports to development authorities, zoning boards, citizens, city councils, investors and others. Help them see exactly why your product deserves their support.",
      "Visit urbanfootnotes.com to see samples, contact us, or order your report."
    ]
  },
  {
    key: 'hotels',
    role: 'Developers',
    title: "Short-Term Rentals, Hotels, Airbnb's",
    showAudio: false,
    videoSrc: 'vid-dev-hotel.mp4',
    showVideo: true,
    content: [
      "How can you make your accommodations stand out?",
      "Guests can miss the best things around your property because they simply don't know what's nearby.",
      "Urban Foot Notes provides clear, easy-to-understand neighborhood reports highlighting walkable access to cafes, shops, and essential services.",
      "Help your guests see what will be right outside their door",
      "Visit urbanfootnotes.com to see samples, contact us, or get your personalized report today.",

    ]
  },
  {
    key: 'buyers',
    role: 'Residents',
    title: 'Home Buyers and Renters',
    audioSrc: 'ad-res-renters.mp3',
    showAudio: false,
    videoSrc: 'vid-homebuyers.mp4',
    showVideo: true,
    content: [
      "Driving shouldn’t be a requirement for daily life.",
      "Groceries, cafés, errands, parks: they should be part of your neighborhood.",
      "Urban Foot Notes helps you evaluate the area where you will live, showing how practical walking is.",
      "We help you get a sense of what it's like to live there.",
      "It’s a smarter way to choose where to live—based on freedom, health, and cost.",
      "Ask your agent, landlord, or builder for an Urban Foot Notes report. Or visit urbanfootnotes.com to check out sample reports yourself.",
    ]
  },
  {
    key: 'environmentalists',
    role: 'Residents',
    title: 'Environmental',
    audioSrc: 'ad-res-environment.mp3',
    showAudio: true,
    content: [
      "Wish you could see fewer cars? And use less fossil fuels? Plus breathe less polluted air?",
      "Cities built around cars can feel impossible to change, and expensive transit projects often move slowly or stall entirely.",
      "The fastest solution is better development. Urban Foot Notes clearly scores neighborhood walkability—encouraging developments that put essential services within easy walking distance.",
      "Urban Foot Notes scores how well this is done, with comparative, standardized neighborhood reports.",
      "A higher score means more walking and less driving. Our goal is to encourage competition between developers to naturally drive more pedestrian-centered spaces.",
      "You can ask your government to require developers to provide an Urban Foot Notes report to show how much traffic reduction is being proposed.",
      "Visit urbanfootnotes.com to see samples, contact us, or order a report."
    ]
  },
  {
    key: 'advocates',
    role: 'Residents',
    title: 'Pedestrian & Bicycling Advocates',
    videoSrc: 'vid-res-pedestrian.mp4',
    showVideo: true,
    showAudio: false,
    content: [
      "Want safer streets for walking or biking?",
      "Retrofitting roads for cyclists and pedestrians can cause pushback and high costs. Yet, you know safer access matters.",
      "While these things can still be done, better urban development can deliver immediate improvements.",
      "Urban Foot Notes scores how well neighborhoods offer easy pedestrian and bike access to essential services.",
      "Higher scores mean safer, healthier neighborhoods for everyone.",
      "Encourage your local government to require Urban Foot Notes reports from developers.",
      "Visit urbanfootnotes.com for more info."
    ]
  },
  {
    key: 'neighborhood_assoc',
    role: 'Residents',
    title: 'Neighborhood Associations',
    audioSrc: 'ad-res-neighborhood-ass.mp3',
    showAudio: true,
    content: [
      "Want more influence over your neighborhood’s future?",
      "Developers operate within existing zoning, but zoning doesn’t always reflect true neighborhood needs.",
      "Urban Foot Notes clearly scores neighborhood walkability and access to popular services—empowering your association to push for more thoughtful developments.",
      "Higher scores mean less traffic and a more vibrant community.",
      "Ask local government to require developers to submit Urban Footnotes reports.",
      "Visit urbanfootnotes.com today."
    ]
  },
  {
    key: 'res_hotels',
    role: 'Residents',
    title: "Hotels, Short-Term Rentals, Airbnb's",
    videoSrc: 'vid-res-hotel.mp4',
    showVideo: true,
    content: [
      "Driving doesn’t need to be part of every trip away from home.",
      "Coffee, groceries, and a park to unwind are easier when they’re a short walk, not a car ride away.",
      "Urban Foot Notes produces local area walkability reports for hotels and short-term rentals.",
      "Each report shows how realistic it is to handle daily needs on foot or by bike from that location.",
      "Choose accommodation that matches your routine, lowers transport costs, and lets you spend more time enjoying the place.",
      "Ask for the reliable neighborhood data you can count on from Urban Foot Notes.",
      "Ask your host or hotel for an Urban Foot Notes report, or visit urbanfootnotes.com to see examples or request one yourself."
    ]
  },
  {
    key: 'gov_officeholders',
    role: 'Government',
    title: 'Office Holders',
    audioSrc: 'ad-gov-office.mp3',
    showVideo: true,
    videoSrc: 'vid-govt-office.mp4',
    content: [
      "Residents want relief from congestion, collisions, and poor air quality—and they expect leaders to act.",
      "Yet the link between those problems and private-sector development often goes unnoticed.",
      "Urban Foot Notes supplies comparative, address-level reports that score pedestrian access to shops, services, and amenities.",
      "Ask for developers to submit an Urban Foot Notes report and put potential traffic reduction on display.",
      "Show voters you’re serious about safer streets and healthier neighborhoods.",
      "See sample reports or get in touch at urbanfootnotes.com."
    ]
  },
  {
    key: 'planners',
    role: 'City Planning',
    title: 'Conflict Resolution',
    audioSrc: 'ad-city-conflict.mp3',
    showAudio: false,
    videoSrc: 'vid-city-conflict.mp4',
    showVideo: true,
    content: [
      "Are you navigating constant conflicts over traffic and urban density?",
      "Sprawling NIMBYs battle developers’ densities. Now often unpleasant compromises seem like the only path forward.",
      "Urban Foot Notes changes the conversation with standardized, address-specific neighborhood reports, which quantify pedestrian convenience, giving planners and policymakers solid ground for better decisions.",
      "Encourage fewer cars, healthier neighborhoods, and smarter planning.",
      "Ask developers to provide an Urban Footnotes report in their proposals. Visit urbanfootnotes.com to learn more."
    ]
  },
  {
    key: 'cityplanners_traffic',
    role: 'City Planning',
    title: 'Traffic Abatement',
    audioSrc: 'ad-city-traffic.mp3',
    showAudio: false,
    videoSrc: 'vid-city-traffic.mp4',
    showVideo: true,
    content: [
      "Are you frustrated by growing traffic problems?",
      "Pedestrian injuries, cyclist safety, air quality—all are linked to excessive car usage.",
      "Urban Foot Notes offers those in planning and real estate scored, comparative, standardized neighborhood reports describing how easy pedestrian access is to commonly-used services and businesses—encouraging reduced reliance on cars.",
      "Better reports indicate more walking, fewer cars, and safer, healthier neighborhoods.",
      "You can ask or require developers to provide an Urban Footnotes report and start strategically reducing traffic.",
      "Visit urbanfootnotes.com to see samples, contact us, or order a report."
    ]
  }
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
    const s = String(Math.floor(sec % 60)).padStart(2, "0");
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
        className="p-4 bg-[#3B1F07] rounded-full text-[#d1d5db] hover:bg-[#843F06] transition-colors duration-200"
      >
        {isPlaying ? (
          <svg
            className="w-20 h-20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="4" width="16" height="16" />
          </svg>
        ) : (
          <Volume2 className="w-20 h-20 text-[#f4d4c9]"/>
        )}
        </button>

        <input
          type="range"
        min="0"
          max={duration}
          value={progress}
        step="0.1"
          onChange={onSeek}
          className="flex-grow h-2 rounded-lg cursor-pointer bg-gray-300/50 accent-[#F7A969]"
        />

      <span className="text-[#ffe5d1] text-[24px]  whitespace-nowrap">
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

function VideoPlayer({ src }) {
  return (
    <div className="mb-6 w-full mx-auto px-4">
      <video
        src={src}
        controls
        className="w-full max-h-[480px] rounded-lg shadow-lg"
        preload="metadata"
      />
    </div>
  );
}

export default function Ads() {
  const [activeKey, setActiveKey] = useState('existing');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openRole, setOpenRole] = useState(null);

  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  const s3folder = 'ads';
  const current = BUTTONS.find(b => b.key === activeKey);

  useEffect(() => {
    const handleClickOutside = e => {
      if (!e.target.closest('.dropdown')) {
        setDropdownOpen(false);
        setOpenRole(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const grouped = BUTTONS.reduce((acc, item) => {
    acc[item.role] = acc[item.role] || [];
    acc[item.role].push(item);
    return acc;
  }, {});

  const srcPath = file =>
    `${baseUrl.replace(/\/+$/, '')}/${s3folder}/${file.replace(/^\/+/, '')}`;

  return (
    <main className="space-y-8 text-orange-100">
      <PageTitle
        topTitle="Outreach"
        textColor="text-title-text-ads"
        shadowColor="title-shadow-ads"
        logoColor="#ffd4b3"
        gradient="bg-[linear-gradient(to_right,#120902,#3B1F07)]"
        mobileTitleCentered={false}
        showLogo
      />

      <div className="mt-6 max-w-screen-lg mx-auto px-10 flex items-center space-x-4">
        <span className="text-[28px] md=text-[16px] text-[#ffd4b3]">What is your focus or role?</span>
        <div className="relative flex-grow dropdown">
          <button
            onClick={() => setDropdownOpen(o => !o)}
            className={styles.slim}
          >
            {current.role}: {current.title}
            <ChevronDown
              className={`ml-2 transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 w-full bg-[#44403c] rounded-b-lg shadow-lg mt-1">
              {Object.entries(grouped).map(([role, items]) => (
                <div key={role}>
                  <button
                    onClick={() => setOpenRole(openRole === role ? null : role)}
                    className={styles.slim}
                  >
                    {role}
                    <ChevronDown
                      className={`ml-2 transform transition-transform duration-200 ${openRole === role ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-max-height duration-300 ease-out ${openRole === role ? 'max-h-screen' : 'max-h-0'}`}>
                    {items.map(item => (
                      <button
                        key={item.key}
                        onClick={() => { setActiveKey(item.key); setDropdownOpen(false); setOpenRole(null); }}
                        className="block w-full text-left px-8 py-2 text-[22px] md=text-[16px] text-[#d1d5db] hover:bg-[#F7A969] hover=text-[#120902] transition-colors duration-200"
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
        {current.showVideo && current.videoSrc && <VideoPlayer src={srcPath(current.videoSrc)} />}
        {current.showAudio && current.audioSrc && <AudioPlayer src={srcPath(current.audioSrc)} />}

        <article className="space-y-4">
          <h2 className="text-[28px] md=text-[20px] text-[#ffe5d1]">
            {current.content[0]}
          </h2>
          {current.content.slice(1).map((p, idx) => (
            <p key={idx} className="text-[28px] md=text-[20px] text-[#ffe5d1]">{p}</p>
          ))}
        </article>
      </section>
    </main>
  );
}
