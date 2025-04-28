import Logo from "@/components/Logo";
import { useState, useRef, useEffect } from "react";
import { Volume2, Pause, ChevronDown } from "lucide-react";
import PageTitle from "@/components/PageTitle";

// BUTTONS array with role and title separated
const BUTTONS = [
  { key: 'existing', role: 'Developers', title: 'Existing Projects', audioSrc: 'ad-audio-existing-projects.m4a', showAudio: false, content: [
      "Trying to attract the right buyers or renters?",
      "People often lack insight on how an address’ neighborhood meets their needs. That's when hasty, less-than-ideal judgments get made.",
      "Urban Foot Notes delivers standardized, address-specific, comparative neighborhood reports.",
      "We describe pedestrian access to services and businesses that many residents desire. This is scored.",
      "Walkability means convenience, lower car costs, and a better day-to-day life.",
      "That translates into higher satisfaction—and more money freed up for housing.",
      "Visit urbanfootnotes.com to see samples, contact us, or order your report."
    ]
  },
  { key: 'existing_needs', role: 'Developers', title: 'Project Planning', audioSrc: 'ad-audio-existing-projects-filling-needs.m4a', showAudio: false, content: [
      "Struggling to convince buyers or renters that your property fits their needs?",
      "You can’t control everything a neighborhood lacks—but you can clearly understand and address those gaps.",
      "Urban Foot Notes delivers personal, investigative neighborhood reports. We analyze business presence, amenity access, land use, and walkability—working like a checklist to help you plan improvements.",
      "This report can be used to promote other developments, including your own.",
      "Use this clarity to market smarter and guide future investments effectively.",
      "Visit urbanfootnotes.com to view samples or request your report today."
    ]
  },
  { key: 'proposed', role: 'Developers', title: 'Proposed Developments', audioSrc: 'ad-audio-proposed-projects.m4a', showAudio: false, content: [
      "What if you could add a story to your development proposal—its neighborhood's story, told in data?",
      "Too many projects start with incomplete neighborhood data. That’s where deals can fall apart—or additional opportunities get missed.",
      "Urban Foot Notes delivers personal, investigative neighborhood reports. We analyze business presence, amenity access, land use, and walkability—so you can propose your project with clarity and confidence.",
      "Our reports strengthen your presentations—to authorities, boards, investors, and others, helping attract buyers and renters.",
      "Support your next project with the targeted data our reports provide. Visit urbanfootnotes.com to see samples or order your report."
    ]
  },
  { key: 'hotels', role: 'Developers', title: "Short-Term Rentals, Hotels, Airbnb's", audioSrc: 'ad-audio-hotels-short-term-rentals.m4a', showAudio: false, content: [
      "Are you looking to attract more guests?",
      "It's about more than your property—it’s also about location. Guests want walkable access to services.",
      "Urban Foot Notes delivers standardized, address-specific, comparative neighborhood reports.",
      "We score pedestrian access to desired businesses and services.",
      "Better walkability means happier guests and reduced transportation costs.",
      "Visit urbanfootnotes.com to see samples or order your report."
    ]
  },
  { key: 'buyers', role: 'Residents', title: 'Home Buyers and Renters', audioSrc: 'ad-audio-buyers-renters.m4a', showAudio: true, content: [
      "Want to spend less on driving—and more on living?",
      "An Urban Foot Notes report scores pedestrian access to essential services.",
      "Higher walkability ratings mean more freedom, better health, and lower costs.",
      "Visit urbanfootnotes.com to check out sample reports yourself."
    ]
  },
  { key: 'environmentalists', role: 'Residents', title: 'Environmental', audioSrc: 'ad-audio-environmentalists.m4a', showAudio: false, content: [
      "Wish you could see fewer cars, use less fossil fuel, and breathe cleaner air?",
      "Urban Foot Notes scores neighborhood walkability to drive better development.",
      "Visit urbanfootnotes.com to see samples or order a report."
    ]
  },
  { key: 'advocates', role: 'Residents', title: 'Pedestrian & Bicycling Advocates', audioSrc: 'ad-audio-pedestrian-bicycling-advocates.m4a', showAudio: false, content: [
      "Want safer streets for walking or biking?",
      "Urban Foot Notes scores neighborhoods for pedestrian and bike access.",
      "Higher scores mean safer, healthier communities.",
      "Visit urbanfootnotes.com for more info."
    ]
  },
  { key: 'neighborhood_assoc', role: 'Residents', title: 'Neighborhood Associations', audioSrc: 'ad-audio-neighborhood-associations.m4a', showAudio: false, content: [
      "Want more influence over your neighborhood’s future?",
      "Urban Foot Notes scores walkability and access, empowering associations.",
      "Visit urbanfootnotes.com today."
    ]
  },
  { key: 'gov_officeholders', role: 'Government', title: 'Office Holders', audioSrc: 'ad-audio-government-officeholders.m4a', showAudio: false, content: [
      "Are residents tired of traffic problems and expecting action?",
      "Urban Foot Notes offers standardized reports scoring pedestrian access.",
      "Visit urbanfootnotes.com to see samples or order a report."
    ]
  },
  { key: 'planners', role: 'City Planning', title: 'Conflict Resolution', audioSrc: 'ad-audio-existing-projects.m4a', showAudio: false, content: [
      "Tired of constant fights over traffic and density?",
      "Urban Foot Notes uses data to shift discussions to facts.",
      "Visit urbanfootnotes.com for samples or to order a report."
    ]
  },
  { key: 'cityplanners_traffic', role: 'City Planning', title: 'Traffic Abatement', audioSrc: 'ad-audio-city-planners-traffic.m4a', showAudio: false, content: [
      "Frustrated by growing traffic and safety issues?",
      "Urban Foot Notes scores pedestrian access to reduce car reliance.",
      "Visit urbanfootnotes.com to see samples or order a report."
    ]
  }
];

function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.paused ? audio.play() : audio.pause();
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-6 w-full max-w-screen-lg px-4">
      <button onClick={togglePlay} className="p-2 bg-[#683816ff] rounded-full text-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300">
        {isPlaying ? <Pause className="w-20 h-20" /> : <Volume2 className="w-20 h-20" />}
      </button>
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
      
      <div className="mt-6 max-w-screen-lg mx-auto px-4 flex items-center">
        <span className="text-[24px] text-orange-100 mr-4">What is your focus or role?</span>
        <div className="relative flex-grow dropdown">
          <button
            onClick={() => setDropdownOpen(o => !o)}
            className="w-full text-left bg-[#683816ff] hover:bg-[#7a4820ff] rounded-lg px-4 py-3 flex justify-between items-center text-[22px] text-orange-100"
          >
            {current.role} &gt; {current.title}
            <ChevronDown className={`transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 w-full bg-[#683816ff] rounded-b-lg shadow-lg mt-1">
              {Object.entries(
                BUTTONS.reduce((acc,item)=>(
                  (acc[item.role]||(acc[item.role]=[])).push(item),acc
                ),{})
              ).map(([role, items])=> (
                <div key={role} className="border-t border-[#805a44]">
                  <button
                    onClick={()=>setOpenRole(openRole===role?null:role)}
                    className="w-full flex justify-between items-center px-4 py-3 text-orange-100 hover:bg-[#7a4820ff]"
                  >
                    <span className="font-semibold">{role}</span>
                    <ChevronDown className={`transform transition-transform duration-200 ${openRole===role?'rotate-180':''}`} />
                  </button>
                  <div className={`overflow-hidden transition-max-height duration-300 ease-out ${openRole===role?'max-h-screen':'max-h-0'}`}> 
                    {items.map(item=>(
                      <button
                        key={item.key}
                        onClick={()=>{setActiveKey(item.key);setDropdownOpen(false);setOpenRole(null)}}
                        className="block w-full text-left px-8 py-2 text-[18px] text-orange-100 hover:bg-[#7a4820ff]"
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
          <h2 className="text-[24px] md:text-[32px] text-left">{current.content[0]}</h2>
          {current.content.slice(1).map((p,i)=>(
            <p key={i} className="text-[28px]">{p}</p>
          ))}
        </article>
      </section>
    </main>
  );
}
