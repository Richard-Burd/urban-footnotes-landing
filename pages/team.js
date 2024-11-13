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

          <div id="desktop-version" className="mb-14 hidden pl-5 lg:block">
            <div id="john-van-der-harst" className="pb-12">
              <div className="flex">
                <span className="w-60 font-bold">John van der Harst</span>
                <span>- Chief Strategist</span>
              </div>
              <div className="text-lg italic">
                Concept, branding, product and website design, staffing,
                outreach
              </div>
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
                    hyperLink="https://www.urbanfootnotes.com/snail-mail"
                    {...socialMediaIconProps}
                  />
                </div>
              </div>
            </div>

            <div id="richard-burd" className="pb-12">
              <div className="flex">
                <span className="w-60 font-bold">Richard Burd</span>
                <span>- Product Development</span>
              </div>
              <div className="text-lg italic">
                Webmaster, product development, report production, outreach
              </div>
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
                    hyperLink="mailto:richard@urbanfootnotes.com"
                    {...socialMediaIconProps}
                  />
                </div>
              </div>
            </div>

            <div id="jye" className="pb-12">
              <div className="flex">
                <span className="w-60 font-bold">Jye</span>
                <span>- Graphic Designer, UX/UI</span>
              </div>
              <div className="text-lg italic">
                Graphic Designer, User Experience & Interface (UX/UI)
              </div>
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
            </div>

            <div id="lee-nelson" className="pb-12">
              <div className="flex">
                <span className="w-60 font-bold">Lee Nelson</span>
                <span>- Researcher</span>
              </div>
              <div className="text-lg italic">
                Report production, client care
              </div>
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
                    hyperLink="mailto:lee@urbanfootnotes.com"
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
            </div>

            <div id="david-cater" className="pb-12">
              <div className="flex">
                <span className="w-60 font-bold">David Cater</span>
                <span>- Researcher</span>
              </div>
              <div className="text-lg italic">
                Report production, client care
              </div>
              <div className="social-media-icons ml-4 mt-2 flex flex-row">
                <div className="mx-3">
                  <SocialMediaIcon
                    icon="email"
                    hyperLink="mailto:david@urbanfootnotes.com"
                    {...socialMediaIconProps}
                  />
                </div>
              </div>
            </div>

            <div id="roseanne-morgan" className="pb-12">
              <div className="flex">
                <span className="w-60 font-bold">Roseanne Morgan</span>
                <span>- Walkability Specialist</span>
              </div>
              <div className="text-lg italic">
                Product development, report production, outreach
              </div>
              <div className="social-media-icons ml-4 mt-2 flex flex-row">
                {/* <div className="mx-3">
                  <SocialMediaIcon
                    icon="email"
                    hyperLink="mailto:roseanne@urbanfootnotes.com"
                    {...socialMediaIconProps}
                  />
                </div> */}
              </div>
            </div>

            <div id="roseanne-morgan" className="pb-12">
              <div className="flex">
                <span className="w-60 font-bold">Michael Goff</span>
                <span>- Coordinator</span>
              </div>
              <div className="text-lg italic">Payment processing, review</div>
              <div className="social-media-icons ml-4 mt-2 flex flex-row">
                <div className="mx-3">
                  <SocialMediaIcon
                    icon="x"
                    hyperLink="https://x.com/MichaelKGoff"
                    {...socialMediaIconProps}
                  />
                </div>
                <div className="mx-3">
                  <SocialMediaIcon
                    icon="email"
                    hyperLink="mailto:michael@urbanfootnotes.com"
                    {...socialMediaIconProps}
                  />
                </div>
                <div className="mx-3">
                  <SocialMediaIcon
                    icon="linkedin"
                    hyperLink="https://www.linkedin.com/in/michaelkgoff"
                    {...socialMediaIconProps}
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="mobile-version">
            <div className="list-square mb-11 pl-5 lg:hidden">
              <div id="john-van-der-harst" className="mb-8 pb-3">
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
                      hyperLink="https://www.urbanfootnotes.com/snail-mail"
                      width="30"
                      height="30"
                      {...socialMediaIconProps}
                    />
                  </div>
                </div>
              </div>

              <div id="richard-burd" className="mb-8 pb-3">
                <div className="font-bold">Richard Burd</div>
                <div>Product Development</div>
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
                      hyperLink="mailto:richard@urbanfootnotes.com"
                      width="30"
                      height="30"
                      {...socialMediaIconProps}
                    />
                  </div>
                </div>
              </div>

              <div id="jye" className="mb-8 pb-3">
                <div className="font-bold">Jye</div>
                <div>Graphic Designer, UX/UI</div>
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
              </div>

              <div id="lee-nelson" className="mb-8 pb-3">
                <div className="font-bold">Lee Nelson</div>
                <div>Researcher</div>
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
                      hyperLink="mailto:lee@urbanfootnotes.com"
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
              </div>

              <div id="david-cater" className="mb-8 pb-3">
                <div className="font-bold">David Cater</div>
                <div>Researcher</div>
                <div className="social-media-icons ml-4 mt-2 flex -translate-y-1 flex-row flex-wrap">
                  <div className="mx-2 py-2">
                    <SocialMediaIcon
                      icon="email"
                      hyperLink="mailto:david@urbanfootnotes.com"
                      width="30"
                      height="30"
                      {...socialMediaIconProps}
                    />
                  </div>
                </div>
              </div>

              <div id="roseanne-morgan" className="mb-8 pb-3">
                <div className="font-bold">Roseanne Morgan</div>
                <div>Walkability Specialist</div>
              </div>

              <div id="michael-goff" className="mb-8 pb-3">
                <div className="font-bold">Michael Goff</div>
                <div>Coordinator</div>
                <div className="social-media-icons ml-4 mt-2 flex -translate-y-1 flex-row flex-wrap">
                  <div className="mx-2 py-2">
                    <SocialMediaIcon
                      icon="x"
                      hyperLink="https://x.com/MichaelKGoff"
                      width="30"
                      height="30"
                      {...socialMediaIconProps}
                    />
                  </div>
                  <div className="mx-2 py-2">
                    <SocialMediaIcon
                      icon="email"
                      hyperLink="mailto:michael@urbanfootnotes.com"
                      width="30"
                      height="30"
                      {...socialMediaIconProps}
                    />
                  </div>
                  <div className="mx-2 py-2">
                    <SocialMediaIcon
                      icon="linkedin"
                      hyperLink="https://www.linkedin.com/in/michaelkgoff/"
                      width="30"
                      height="30"
                      {...socialMediaIconProps}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8">
            You can read about us{" "}
            <Link
              href="https://www.urbanfootnotes.com/crew"
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
