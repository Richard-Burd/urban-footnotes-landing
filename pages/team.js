import React from "react";
import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import SocialMediaIcon from "@/components/SocialMediaIcon";

import Link from "next/link";

const socialMediaIconProps = {
  backgroundColor: "#3bb1d1",
  activeBackgroundColor: "#c7f3ff",
};

// Team member data
const teamMembers = [
  {
    id: "john-van-der-harst",
    name: "John van der Harst",
    role: "Chief Strategist",
    description:
      "Concept, development, branding, product and website design, staffing, outreach",
    socialLinks: [
      {
        icon: "doc",
        link: "https://ram-website-images-and-documents.s3.us-east-2.amazonaws.com/doc-685.pdf",
      },
      {
        icon: "recycle",
        link: "https://ram-website-images-and-documents.s3.us-east-2.amazonaws.com/doc-684.pdf",
      },
      { icon: "email", link: "https://www.urbanfootnotes.com/snail-mail" },
    ],
  },
  {
    id: "richard-burd",
    name: "Richard Burd",
    role: "Product Development",
    description: "Webmaster, product development, report production, outreach",
    socialLinks: [
      { icon: "x", link: "https://x.com/Richard_A_Burd" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/richardburd/" },
      { icon: "home", link: "https://richard-burd.github.io/" },
      { icon: "github", link: "https://github.com/Richard-Burd/" },
      { icon: "email", link: "mailto:richard@urbanfootnotes.com" },
    ],
  },
  {
    id: "jye",
    name: "Jye",
    role: "Graphic Designer, Writer, Creative Consultant",
    description:
      "Graphic Designer, User Experience & Interface (UX/UI), Writer & Content Creator",
    socialLinks: [
      { icon: "home", link: "https://jyeartstudio.com/" },
      { icon: "email", link: "mailto:jye@urbanfootnotes.com" },
    ],
  },
  {
    id: "lee-nelson",
    name: "Lee Nelson",
    role: "Researcher",
    description: "Report production, client care",
    socialLinks: [
      { icon: "home", link: "https://www.supremelifeforce.info/" },
      { icon: "email", link: "mailto:lee@urbanfootnotes.com" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/lee-nelson-b5701981/",
      },
    ],
  },
  {
    id: "david-cater",
    name: "David Cater",
    role: "Researcher",
    description: "Report production, client care",
    socialLinks: [{ icon: "email", link: "mailto:david@urbanfootnotes.com" }],
  },
  {
    id: "roseanne-morgan",
    name: "Roseanne Morgan",
    role: "Walkability Specialist",
    description: "Product development, report production, outreach",
    socialLinks: [],
  },
  {
    id: "michael-goff",
    name: "Michael Goff",
    role: "Coordinator",
    description: "Payment processing, review",
    socialLinks: [
      { icon: "x", link: "https://x.com/MichaelKGoff" },
      { icon: "email", link: "mailto:michael@urbanfootnotes.com" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/michaelkgoff/" },
    ],
  },
];

// Team member card component
const TeamMemberCard = ({ member }) => (
  <article
    key={member.id}
    className="mb-8 flex flex-col border-b border-stone-400 pb-4 md:pb-6"
  >
    <div className="text-xl font-bold">{member.name}</div>
    <div className="text-lg italic">{member.role}</div>
    <p className="mt-2 text-sm text-stone-300">{member.description}</p>
    <div className="mt-3 flex flex-wrap">
      {member.socialLinks.map((link, index) => (
        <div key={index} className="mr-4 mt-2">
          <SocialMediaIcon
            icon={link.icon}
            hyperLink={link.link}
            aria-label={`${member.name} ${link.icon} link`}
            width="30"
            height="30"
            {...socialMediaIconProps}
          />
        </div>
      ))}
    </div>
  </article>
);

export default function Team() {
  return (
    <div>
      <div className="lg:mx-32">
        <center>
          <PageTitle
            topTitle="Our Team"
            textColor="text-title-text-team"
            shadowColor="title-shadow-team"
            showLogo={true} // Integrates the logo
          />
        </center>
        <div className="roboto-font mx-4 text-xl text-stone-300 md:text-2xl">
          {/* Team Section */}
          <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </section>

          {/* Additional Info */}
          <p className="mt-8 text-center">
            You can read about us{" "}
            <Link
              href="https://www.urbancruiseship.org/crew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-300"
            >
              here
            </Link>{" "}
            on the Urban Cruise Ship website.
          </p>
        </div>
      </div>
    </div>
  );
}
