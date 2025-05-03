import Logo from "@/components/Logo";
import { useState, useRef, useEffect } from "react";
import { Volume2, Pause, ChevronDown, Square } from "lucide-react";
import PageTitle from "@/components/PageTitle";
import styles from '../styles/Button.module.css'
import Image from "next/image";

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
    audioSrc: 'ad-audio-existing-projects-filling-needs.m4a',
    showAudio: false,
    content: [
      "Struggling to convince buyers or renters that your property fits their needs?",
      "You can’t control everything a neighborhood lacks—but you can clearly understand and address those gaps.",
      "Urban Foot Notes delivers personal, investigative neighborhood reports. We analyze business presence, amenity access, land use, and walkability—working like a checklist to help you or partners strategically plan future improvements.",
      "This report can be used to promote other developments, including your own.",
      "Use this clarity to market smarter and guide future investments effectively.",
      "Visit urbanfootnotes.com to view samples or request your report today."
    ]
  },
  {
    key: 'proposed',
    role: 'Developers',
    title: 'Proposed Developments',
    audioSrc: 'ad-audio-proposed-projects.m4a',
    showAudio: false,
    content: [
      "What if you could add a story to your development proposal—its neighborhood's story, told in data?",
      "Too many projects start with incomplete neighborhood data. That’s where deals can fall apart—or additional opportunities get missed.",
      "Urban Foot Notes delivers personal, investigative neighborhood reports. We analyze business presence, amenity access, land use, and walkability—so you can propose your project with clarity and confidence.",
      "Our reports strengthen your presentations—to development authorities, zoning boards, citizens, city councils, investors and others. They will see a report that will likely attract more buyers and renters.",
      "Support your next project with the targeted data our reports provide. Visit urbanfootnotes.com to see samples, contact us, or order your report."
    ]
  },
  {
    key: 'hotels',
    role: 'Developers',
    title: "Short-Term Rentals, Hotels, Airbnb's",
    audioSrc: 'ad-audio-hotels-short-term-rentals.m4a',
    showAudio: false,
    content: [
      "Are you looking to attract more guests?",
      "It's about more than your property—it’s also about the location. But describing neighborhood convenience thoroughly takes effort and research, especially for guests who want to walk more than drive.",
      "Urban Foot Notes delivers standardized, address-specific, comparative neighborhood reports.",
      "We describe and score ease of pedestrian access to businesses and services that many guests would desire.",
      "Better walkability means happier, longer-term guests—and reduced transportation expenses mean their money lasts longer.",
      "Attract more satisfied guests with reliable neighborhood data.",
      "Visit urbanfootnotes.com to see samples, contact us, or order your report."
    ]
  },
  {
    key: 'buyers',
    role: 'Residents',
    title: 'Home Buyers and Renters',
    audioSrc: 'ad-res-renters.mp3',
    showAudio: true,
    content: [
      "Want to spend less on driving—and more on living?",
      "Start by choosing the right neighborhood.",
      "You can only walk so far without resorting to a vehicle. But what if daily errands, food, and fun were all just steps from home? How do you find places like that?",
      "Can you walk to what you need? Do people use the same places you would? Is the neighborhood changing? Without those answers—you’re left guessing.",
      "An Urban Foot Notes report gives you a scored rating of pedestrian access to commonly-desired services, showing how easy it is to live at an address without needing to drive.",
      "It answers the big question: “What’s it really like to live there?” A higher walkability rating means more freedom, better health, and lower costs.",
      "Ask your agent, landlord, or builder for an Urban Foot Notes report. Or visit urbanfootnotes.com to check out sample reports yourself."
    ]
  },
  {
    key: 'environmentalists',
    role: 'Residents',
    title: 'Environmental',
    audioSrc: 'ad-audio-environmentalists.m4a',
    showAudio: false,
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
    audioSrc: 'ad-audio-pedestrian-bicycling-advocates.m4a',
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
    audioSrc: 'ad-audio-neighborhood-associations.m4a',
    showAudio: false,
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
    audioSrc: 'ad-aud.m4a',
    showAudio: false,
    content: [
      "Are you trying to maximize your experience in a new place?",
      "Accommodations may offer appealing furnishing, but what about the neighborhood?",
      "How can you find out what is it like outside the door, and that the amenities fit your needs, especially for those who would rather not drive?",
      "Urban Foot Notes scores how well neighborhoods offer easy pedestrian and bike access to essential services.",
      "Better walkability means less time in cars—and more time experiencing the area.",
      "Ask for the reliable neighborhood data you can count on from Urban Foot Notes.",
      "Visit urbanfootnotes.com to see samples, contact us, or order your own report."
    ]
  },
  {
    key: 'gov_officeholders',
    role: 'Government',
    title: 'Office Holders',
    audioSrc: 'ad-audio-government-officeholders.m4a',
    showAudio: false,
    content: [
      "Are the residents tired of traffic problems and expecting action?",
      "Pedestrian accidents, cyclist fatalities, road rage, and poor air quality reflect badly on leadership—but voters often miss the connection between these issues and private-sector development choices.",
      "Better-planned developments drastically reduce traffic. Easy pedestrian access to all of residents’ needs enhances the community.",
      "Urban Foot Notes offers comparative, standardized neighborhood reports, scoring pedestrian access to commonly-used services and businesses.",
      "High scores visibly mean less traffic and more livable communities.",
      "You can require developers to provide an Urban Footnotes report, putting potential traffic reduction on display.",
      "Encourage developers to consider their impact on the interests of the community, and show voters you're serious about improving their neighborhoods.",
      "Visit urbanfootnotes.com to see samples, contact us, or order a report."
    ]
  },
  {
    key: 'planners',
    role: 'City Planning',
    title: 'Conflict Resolution',
    audioSrc: 'ad-city-conflict.mp3',
    showAudio: true,
    content: [
      "Tired of the same fights over traffic and density? Blame’s easy. Solutions aren’t.",
      "Sprawling NIMBYs battle developers’ densities. Now often unpleasant compromises seem like the only path forward.",
      "Urban Foot Notes offers standardized, comparative, address-specific neighborhood reports, describing pedestrian access to commonly-used services and businesses, including the percentage of those typically using such services. It’s all scored in the report.",
      "A higher score means more walking, and less driving. The data can shift the discussion to facts.",
      "You can ask or require developers to provide an Urban Footnotes report. Visit urbanfootnotes.com to see samples, contact us, or order a report."
    ]
  },
  {
    key: 'cityplanners_traffic',
    role: 'City Planning',
    title: 'Traffic Abatement',
    audioSrc: 'ad-audio-city-planners-traffic.m4a',
    showAudio: false,
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
        className="p-4 bg-[#5b2702] rounded-full text-orange-100 hover:bg-[#ba813c] transition-colors duration-200"
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
          <Volume2 className="w-20 h-20"/>
        )}
      </button>

      <input
        type="range"
        min="0"
        max={duration}
        value={progress}
        step="0.1"
        onChange={onSeek}
        className="flex-grow h-2 rounded-lg cursor-pointer bg-gray-300/50 accent-[#ba813c]"
      />

      <span className="text-orange-100 text-[24px]  whitespace-nowrap">
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
  // s3folder is the folder in the S3 bucket where the audio files are stored
  const s3folder = 'ads';
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
            <div className="absolute z-10 w-full bg-[#5b2702] rounded-b-lg shadow-lg mt-1">
              {Object.entries(
                BUTTONS.reduce((acc, item) => {
                  acc[item.role] = acc[item.role] || [];
                  acc[item.role].push(item);
                  return acc;
                }, {})
              ).map(([role, items]) => (
                <div key={role} className="">
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
                        className="block w-full text-left px-8 py-2 text-[24px] text-orange-100 hover:bg-[#ba813c] hover:text-[#23211f] transition-colors duration-200"
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
         {/* functionality for s3 bucket folder switching */}
        {current.showAudio && <AudioPlayer  src={`${baseUrl.replace(/\/+$/, '')}/${s3folder}/${current.audioSrc.replace(/^\/+/, '')}`} />}
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
