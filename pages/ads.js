import Logo from "@/components/Logo";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Volume2, Pause, ChevronDown, ChevronUp } from "lucide-react";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

const BUTTONS = [
  {
    key: 'existing',
    title: 'Existing Projects (Developers)',
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
    "key": "existing_needs",
    "title": "Project Planning (Developers)",
    "audioSrc": "ad-audio-existing-projects-filling-needs.m4a",
    "showAudio": false,
    "content": [
        "Struggling to convince buyers or renters that your property fits their needs?",
        "You can’t control everything a neighborhood lacks—but you can clearly understand and address those gaps.",
        "Urban Foot Notes provides standardized neighborhood reports pinpointing exactly what's missing—helping you or partners strategically plan future improvements.",
        "This report can be used to promote other developments, including your own.",
        "Use this clarity to market smarter and guide future investments effectively.",
        "Visit urbanfootnotes.com to view samples or request your report today."
    ]
},
  {
    key: 'proposed',
    title: 'Proposed Developments (Developers)',
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
    key: 'buyers',
    title: 'Home Buyers and Renters',
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
    "key": "hotels",
    "title": "Short-Term Rentals, Hotels, Airbnb's",
    "audioSrc": "ad-audio-hotels-short-term-rentals.m4a",
    "showAudio": false,
    "content": [
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
    "key": "environmentalists",
    "title": "Environmental",
    "audioSrc": "ad-audio-environmentalists.m4a",
    "showAudio": false,
    "content": [
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
  "key": "advocates",
  "title": "Pedestrian & Bicycling Advocates",
  "audioSrc": "ad-audio-pedestrian-bicycling-advocates.m4a",
  "showAudio": false,
  "content": [
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
  "key": "gov_officeholders",
  "title": "Government Office Holders",
  "audioSrc": "ad-audio-government-officeholders.m4a",
  "showAudio": false,
  "content": [
      "Are the residents tired of traffic problems and expecting action?",
      "Pedestrian accidents, cyclist fatalities, road rage, and poor air quality reflect badly on leadership—but voters often miss the connection between these issues and private-sector development choices.",
      "Better-planned developments drastically reduce traffic. Easy pedestrian access to all of residents’ needs enhances the community.",
      "Urban Foot Notes offers comparative, standardized neighborhood reports, scoring pedestrian access to commonly-used services and businesses.",
      "High scores visibly mean less traffic and more livable communities.",
      "You can require developers to provide an Urban Foot Notes report, putting potential traffic reduction on display.",
      "Encourage developers to consider their impact on the interests of the community, and show voters you're serious about improving their neighborhoods.",
      "Visit urbanfootnotes.com to see samples, contact us, or order a report."
  ]
},
  {
    key: 'planners',
    title: 'City Planning',
    audioSrc: 'ad-audio-existing-projects.m4a',
    showAudio: false,
    content: [
      "Tired of the same fights over traffic and density? Blame’s easy. Solutions aren’t.",
      "Sprawling NIMBYs battle developers’ densities. Now often unpleasant compromises seem like the only path forward.",
      "Urban Foot Notes offers standardized, comparative, address-specific neighborhood reports, describing pedestrian access to commonly-used services and businesses, including the percentage of those typically using such services. It’s all scored in the report.",
      "A higher score means more walking, and less driving. The data can shift the discussion to facts.",
      "You can ask or require developers to provide an Urban Foot Notes report. Visit urbanfootnotes.com to see samples, contact us, or order a report."
    ]
  },
  {
    "key": "cityplanners_traffic",
    "title": "Traffic Abatement",
    "audioSrc": "ad-audio-city-planners-traffic.m4a",
    "showAudio": false,
    "content": [
        "Are you frustrated by growing traffic problems?",
        "Pedestrian injuries, cyclist safety, air quality—all are linked to excessive car usage.",
        "Urban Foot Notes offers those in planning and real estate scored, comparative, standardized neighborhood reports describing how easy pedestrian access is to commonly-used services and businesses—encouraging reduced reliance on cars.",
        "Better reports indicate more walking, fewer cars, and safer, healthier neighborhoods.",
        "You can ask or require developers to provide an Urban Foot Notes report and start strategically reducing traffic.",
        "Visit urbanfootnotes.com to see samples, contact us, or order a report."
    ]
},




  {
      "key": "neighborhood_assoc",
      "title": "Neighborhood Associations",
      "audioSrc": "ad-audio-neighborhood-associations.m4a",
      "showAudio": false,
      "content": [
          "Want more influence over your neighborhood’s future?",
          "Developers operate within existing zoning, but zoning doesn’t always reflect true neighborhood needs.",
          "Urban Foot Notes clearly scores neighborhood walkability and access to popular services—empowering your association to push for more thoughtful developments.",
          "Higher scores mean less traffic and a more vibrant community.",
          "Ask local government to require developers to submit Urban Foot Notes reports.",
          "Visit urbanfootnotes.com today."
      ]
  }

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
    <div>
      <center>
        <PageTitle
          topTitle="Outreach"
          textColor="text-title-text-ads"
          shadowColor={`title-shadow-ads`}
          logoColor="#f6d7beff"
          gradient={
            "bg-[linear-gradient(to_right,rgba(87,73,61,0.1),rgba(67,41,19,0.9))]"
          }
          mobileTitleCentered={false}
          showLogo={true} // Integrates the logo)
        />
      </center>

    </div>
      <div className="mt-6 max-w-screen-lg mx-auto px-4 flex items-center ">
        {/* Prompt to the left */}
        <span className="text-[20px] text-orange-100 mr-4">
          What is your focus or role?
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

