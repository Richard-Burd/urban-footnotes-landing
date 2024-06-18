import React from "react";
import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import SocialMediaIcon from "@/components/SocialMediaIcon";

import Link from "next/link";

const socialMediaIconProps = {
  backgroundColor: `#3bb1d1`,
  activeBackgroundColor: `#c7f3ff`,
};

export default function Team() {
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
            <li className="flex">
              <span className="w-60 pb-10 font-bold">
                <div>John van der Harst</div>
                <div className="social-media-icons ml-4 mt-2 flex flex-row">
                  <div className="mx-3">
                    <SocialMediaIcon
                      icon="doc"
                      hyperLink="https://ram-website-images-and-documents.s3.us-east-2.amazonaws.com/doc-685.pdf"
                      {...socialMediaIconProps}
                    />
                  </div>
                  <div className="mx-3">
                    <SocialMediaIcon
                      icon="recycle"
                      hyperLink="https://ram-website-images-and-documents.s3.us-east-2.amazonaws.com/doc-684.pdf"
                      {...socialMediaIconProps}
                    />
                  </div>
                  <div className="mx-3">
                    <SocialMediaIcon
                      icon="email"
                      hyperLink="https://www.urbancruiseship.org/snail-mail"
                      {...socialMediaIconProps}
                    />
                  </div>
                </div>
              </span>
              <span>- Chief Strategist</span>
            </li>
            <li className="flex">
              <span className="w-60 pb-8 font-bold">
                <div>Richard Burd</div>
                <div className="social-media-icons ml-4 mt-2 flex flex-row">
                  <div className="mx-3">
                    <SocialMediaIcon
                      icon="x"
                      hyperLink="https://x.com/Richard_A_Burd"
                      {...socialMediaIconProps}
                    />
                  </div>
                  <div className="mx-3">
                    <SocialMediaIcon
                      icon="linkedin"
                      hyperLink="https://www.linkedin.com/in/richardburd/"
                      {...socialMediaIconProps}
                    />
                  </div>
                  <div className="mx-3">
                    <SocialMediaIcon
                      icon="home"
                      hyperLink="https://richard-burd.github.io/"
                      {...socialMediaIconProps}
                    />
                  </div>
                  <div className="z-10 mx-3">
                    <SocialMediaIcon
                      icon="github"
                      hyperLink="https://github.com/Richard-Burd/"
                      {...socialMediaIconProps}
                    />
                  </div>
                  <div className="z-10 mx-3">
                    <SocialMediaIcon
                      icon="email"
                      hyperLink="mailto:richard@urbancruiseship.org"
                      {...socialMediaIconProps}
                    />
                  </div>
                </div>
              </span>
              <span>- Webmaster & Developer</span>
            </li>
            <li className="flex">
              <span className="w-60 pb-8 font-bold">
                <div>Jye</div>
                <div className="social-media-icons ml-4 mt-2 flex flex-row">
                  <div className="mx-3">
                    <SocialMediaIcon
                      icon="home"
                      hyperLink="https://jyeartstudio.com/"
                      {...socialMediaIconProps}
                    />
                  </div>
                  <div className="mx-3">
                    <SocialMediaIcon
                      icon="email"
                      hyperLink="mailto:jye.art.studio@gmail.com"
                      {...socialMediaIconProps}
                    />
                  </div>
                </div>
              </span>
              <span>- Research & Product Development</span>
            </li>
            <li className="flex">
              <span className="w-60 pb-3 font-bold">Roseanne Morgan</span>
              <span>- Walkability Specialist</span>
            </li>
          </ul>
          <ul className="list-square mb-11 list-outside pl-5 lg:hidden">
            <li className="mb-8 pb-3">
              <div className="font-bold">John van der Harst</div>
              <div>Chief Strategist</div>
            </li>
            <li className="mb-8 pb-3">
              <div className="font-bold">Richard Burd</div>
              <div>Webmaster & Developer</div>
            </li>
            <li className="mb-8 pb-3">
              <div className="font-bold">Jye</div>
              <div>Research & Product Development</div>
            </li>
            <li className="mb-8 pb-3">
              <div className="font-bold">Roseanne Morgan</div>
              <div>Walkability Specialist</div>
            </li>
          </ul>
          <p className="mt-8">
            You can read about us{" "}
            <Link
              href="https://www.urbancruiseship.org/crew"
              target="_blank"
              rel="noopener noreferrer"
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
