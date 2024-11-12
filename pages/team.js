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
            <li className="flex" id="john-van-der-harst">
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

            <li className="flex" id="richard-burd">
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
              <span>- Product Development</span>
            </li>

            <li className="flex" id="jye">
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
              <span>- UX/UI Graphic Designer</span>
            </li>

            <li className="flex" id="lee-nelson">
              <span className="w-60 pb-8 font-bold">
                <div>Lee Nelson</div>
                <div className="social-media-icons ml-4 mt-2 flex flex-row">
                  <div className="mx-3">
                    <SocialMediaIcon
                      icon="home"
                      hyperLink="https://www.supremelifeforce.info/"
                      {...socialMediaIconProps}
                    />
                  </div>
                  <div className="mx-3">
                    <SocialMediaIcon
                      icon="email"
                      hyperLink="mailto:lee@urbancruiseship.org"
                      {...socialMediaIconProps}
                    />
                  </div>
                  <div className="mx-3">
                    <SocialMediaIcon
                      icon="linkedin"
                      hyperLink="https://www.linkedin.com/in/lee-nelson-b5701981"
                      {...socialMediaIconProps}
                    />
                  </div>
                </div>
              </span>
              <span>- Research & Development</span>
            </li>

            <li className="flex" id="david-cater">
              <span className="w-60 pb-8 font-bold">
                <div>David Cater</div>
                {/* <div className="social-media-icons ml-4 mt-2 flex flex-row">
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
                </div> */}
              </span>
              <span>- Business Development</span>
            </li>

            <li className="flex" id="roseanne-morgan">
              <span className="w-60 pb-3 font-bold">Roseanne Morgan</span>
              <span>- Walkability Specialist</span>
            </li>
          </ul>
          <ul className="list-square mb-11 list-outside pl-5 lg:hidden">
            <li className="mb-8 pb-3">
              <div className="font-bold">John van der Harst</div>
              <div>Chief Strategist</div>
              <div className="social-media-icons ml-4 mt-2 flex -translate-y-1 flex-row flex-wrap">
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="doc"
                    hyperLink="https://ram-website-images-and-documents.s3.us-east-2.amazonaws.com/doc-685.pdf"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="recycle"
                    hyperLink="https://ram-website-images-and-documents.s3.us-east-2.amazonaws.com/doc-684.pdf"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="email"
                    hyperLink="https://www.urbancruiseship.org/snail-mail"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
              </div>
            </li>
            <li className="mb-8 pb-3">
              <div className="font-bold">Richard Burd</div>
              <div>Webmaster & Developer</div>
              <div className="social-media-icons ml-4 mt-2 flex -translate-y-1 flex-row flex-wrap">
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="x"
                    hyperLink="https://x.com/Richard_A_Burd"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="linkedin"
                    hyperLink="https://www.linkedin.com/in/richardburd/"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="home"
                    hyperLink="https://richard-burd.github.io/"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="github"
                    hyperLink="https://github.com/Richard-Burd/"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="email"
                    hyperLink="mailto:richard@urbancruiseship.org"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
              </div>
            </li>

            <li className="mb-8 pb-3">
              <div className="font-bold">Jye</div>
              <div>UX/UI Graphic Designer</div>
              <div className="social-media-icons ml-4 mt-2 flex -translate-y-1 flex-row flex-wrap">
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="home"
                    hyperLink="https://jyeartstudio.com/"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="email"
                    hyperLink="mailto:jye.art.studio@gmail.com"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
              </div>
            </li>

            <li className="mb-8 pb-3">
              <div className="font-bold">Lee Nelson</div>
              <div>Research & Product Development</div>
              <div className="social-media-icons ml-4 mt-2 flex -translate-y-1 flex-row flex-wrap">
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="home"
                    hyperLink="https://www.supremelifeforce.info/"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="email"
                    hyperLink="mailto:lee@urbancruiseship.org"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
                <div className="mx-2 py-2">
                  <SocialMediaIcon
                    icon="linkedin"
                    hyperLink="https://www.linkedin.com/in/lee-nelson-b5701981/"
                    width="30"
                    height="30"
                    {...socialMediaIconProps}
                  />
                </div>
              </div>
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
