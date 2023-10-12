import React, { useRef, useEffect, useState } from "react";

import Link from "next/link";

export default function Team() {
  const data = [
    { name: "John van der Harst", title: "Chief Strategist" },
    { name: "Richard Burd", title: "Webmaster & Developer" },
    { name: "Jye", title: "Research & Product Development" },
    { name: "Roseanne Morgan", title: "Walkability Specialist" },
  ];

  return (
    <div>
      <div className="lg:m-12">
        <center>
          <div className="roboto-font text-2xl pt-12 lg:pt-2 lg:text-4xl text-stone-300 opacity-60 tracking-wide pb-4">
            About Our Team
          </div>
        </center>
        <div className="roboto-font lg:text-2xl text-stone-300 mx-4 lg:mx-32">
          <p className="py-8">
            Currently our team consists of the following individuals:
          </p>
          <ul className="hidden lg:block list-disc pl-5 mb-14">
            {data.map((person, index) => (
              <li key={index} className="flex">
                <span className="w-60 font-bold pb-3">{person.name}</span>
                <span>- {person.title}</span>
              </li>
            ))}
          </ul>
          <ul className="list-square list-outside lg:hidden pl-5 mb-11">
            {data.map((person, index) => (
              <li key={index} className="pb-3 mb-8">
                <div className="font-bold">{person.name}</div>
                <div>{person.title}</div>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            You can read about us{" "}
            <Link href="https://www.urbancruiseship.org/crew">here</Link> on the
            Urban Cruise Ship website.
          </p>
        </div>
      </div>
    </div>
  );
}
