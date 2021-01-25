import React from "react";
import picture from "./images/picture.png";

const About = () => {
  return (
    <div className="w-full  flex justify-center">
      <div className="mx-48 mt-24 mb-16 text-coolGrey900">
        <img
          src={picture}
          className=" w-40 h-40 p-4 justify-center mx-auto rounded-full block "
          alt="Profile"
        />
        <div
          className="text-center w-full text-coolGrey900 font-display text-3xl font-medium mb-8
        "
        >
          👋🏼 Hey!
        </div>
        <div className=" w-full font-display font-light mb-4">
          Welcome to my portfolio!
        </div>
        <div className=" w-full font-display font-light mb-4">
          My name is Anders. I study Interaction Design at Aalborg University. I
          am finishing my master's thesis this summer and I hope to leap into an
          exciting career afterwards.
        </div>
        <div className=" w-full font-display font-light mb-4">
          I am employed as a student developer at Energy Machines, where I build
          simulation tools for energy engineers. Previously I worked a year as a
          student UX designer at Dynaway.
        </div>
        <div className=" w-full font-display font-light mb-4">
          At Aalborg University I am part of the tech talent programme, where I
          was lucky enough to be admitted and I now practice my researching
          skills.
        </div>
        <div className=" w-full font-display font-light mb-4">
          Having worked as both a student developer and designer I can help
          create great user experiences while communicating efficiently with
          developers. I am a good team player and have an easy time adapting to
          different teams and tasks.
        </div>
        <div className=" w-full font-display font-light mb-4">
          As a person, I am enthusiastic about what I do. During my studies,
          I've been a large part of both AAU's largest student organisation as
          well as being a co-founder and chairman of FixD, our local Interaction
          Design student organisation. I get deeply into what I do, and I always
          work to provide a great outcome. I have a great deal of empathy, which
          I carefully use to understand a problem space or a challenge.
          Designing speaks to the core of me because it touches all points of
          the organisation. Designers influence the business, technology and
          presentation of the company, and I enjoy balancing all these aspects.
        </div>

        <div className=" w-full font-display font-light">
          In my spare time I enjoy wakeboarding 🏄🏼‍♂️, running 🏃🏼 and occasionally
          geeking out over board games 🎲.
        </div>
      </div>
    </div>
  );
};

export default About;
