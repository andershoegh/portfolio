import React from "react";
import picture from "./images/self.jpg";

const About = () => {
  return (
    <div className=" w-full  justify-center">
      <div className="mx-24 mt-24 mb-16 font-light leading-relaxed text-coolGrey100">
        <div className="text-center  font-display text-5xl font-bold mb-16">
          👋🏼 Hey!
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <div className="">
            <div className=" mb-4">
              My name is Anders. I'm a Interaction Design student at AAU.
            </div>
            <div className="   mb-4">
              During my studies I've tried UX design for a year and currently
              I'm a part-time front-end developer. I like both - but design is
              where my passion is at. I'm also part of AAU's Tech Talent
              programme where talented students can improve their researching
              skills.
            </div>
            <div className="mb-4">
              I don't believe I communicate the true "Anders" in this about
              page. I hope you'll shoot me a mail or message on LinkedIn so that
              you can get to know me more!
            </div>
            <div className="mb-4">
              I'm pragmatic about design. I enjoy how design brings together
              technological, business and user aspects and how I, as a designer,
              get to juggle that.
            </div>

            <div className="">
              I love wakeboarding 🏄🏼‍♂️, running 🏃🏼 and occasionally geeking out
              over board games 🎲.
            </div>
          </div>
          <div className="">
            <img
              src={picture}
              className="p-8 justify-center mx-auto rounded-lg block "
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
