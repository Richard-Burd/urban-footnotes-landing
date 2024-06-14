import React, { useRef, useEffect, useState } from "react";
import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";

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
      <PageHeaderLogo />
      <div className="lg:m-12">
        <center>
          <PageTitle
            topTitle="Our Team"
            textColor="text-title-text-team"
            shadowColor={`title-shadow-team`}
          />
        </center>
        <div className="roboto-font mx-4 text-stone-300 lg:mx-32 lg:text-2xl">
          <p className="py-8">
            Currently our team consists of the following individuals:
          </p>
          <ul className="mb-14 hidden list-disc pl-5 lg:block">
            {data.map((person, index) => (
              <li key={index} className="flex">
                <span className="w-60 pb-3 font-bold">{person.name}</span>
                <span>- {person.title}</span>
              </li>
            ))}
          </ul>
          <ul className="list-square mb-11 list-outside pl-5 lg:hidden">
            {data.map((person, index) => (
              <li key={index} className="mb-8 pb-3">
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
