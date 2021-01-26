import React from "react";
import Zoom from "react-medium-image-zoom";
import touchless_6 from "./images/touchless_6.png";
import touchless_3 from "./images/touchless_3.png";
import touchless_miro from "./images/touchless_miro.png";
import ScrollElement from "./ScrollElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

const TouchlessInteractions = () => {
  return (
    <div className="w-full px-24 justify-center flex  mb-52 font-light text-coolGrey200 font-body">
      <div className="mt-24 ">
        <ScrollElement strokeColor={"#EF4E4E"} />

        <div className="text-xl text-coolGrey400 font-medium font-display">
          Overview
        </div>
        <div className="text-5xl mt-4 text-redVivid400 font-display">
          Touchless Interactions in a COVID-19 pandemic
        </div>
        <div className="text-xl mt-12 leading-relaxed font-display">
          Being mindful of what you touch and where you put hands next is top of
          mind. People are finding new, extremely imaginative, ways to avoid
          touching surfaces. In this project we focus on the{" "}
          <span>public touch display</span>, one of the most frequented surfaces
          in cities today.
        </div>
        <div className="grid grid-cols-2 w-1/2 mt-16">
          <div className="font-semibold text-xl font-display  mb-2 text-coolGrey300">
            Role
          </div>
          <div className="font-semibold text-xl font-display  mb-2 text-coolGrey300">
            Project type
          </div>
          <div>Project member</div>
          <div>Master's thesis project</div>
        </div>
        <div className="font-semibold font-display text-xl  mt-8 text-coolGrey300">
          Keywords
        </div>
        <div>
          Figma, React, Typescript, observations, Interaction Design, Public
          touch displays, Design thinking, Prototyping.
        </div>
        <div className="font-semibold font-display text-xl  mt-8 text-coolGrey300">
          My main contributions
        </div>
        <div>Initial designs, research, ideation, developing.</div>

        <div className="border border-coolGrey800 border-opacity-25 w-2/3 mx-auto mt-20 mb-20"></div>

        <div className="text-xl text-coolGrey400 font-display font-medium">
          Problem
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          Public touch displays are commonplace in the public domain. They're
          used at pharmacies, office buildings, restaurants, supermarket
          self-checkout lines and much more. COVID-19 presents a challenge to
          these displays, because we've come to rely on them for daily tasks.
          Keeping the spread of COVID-19 to a minimum is a global challenge. In
          this project we work wih:
        </div>
        <div className="text-3xl font-display font-semibold mt-8 text-redVivid400">
          How might we...
        </div>
        <div className="text-xl leading-relaxed">
          Design interaction input types for use with touch displays to support
          touchless interactions?
        </div>

        <div className="border border-coolGrey800 border-opacity-25 w-2/3 mx-auto mt-20 mb-20"></div>
        <div className="text-xl text-coolGrey400 font-medium">Prototype</div>
        <div className="text-xl mt-4 leading-relaxed">
          I'll give you a sneak peek at the prototype we've been working on.
          Bear in mind that this project is still in progress until the summer
          of 2021.{" "}
        </div>
        <div className="my-8 flex justify-center">
          <iframe
            title="Video of prototype"
            width="700"
            height="415"
            src="https://www.youtube.com/embed/moDj9fJNekU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className="text-xl mt-12 leading-relaxed">
          There are two prototypes at play here:
        </div>

        <div className="grid-cols-2 gap-x-7 grid mt-8">
          <div className="text-xl text-coolGrey400 font-medium mb-2">
            Smartphone
          </div>
          <div className="text-xl text-coolGrey400 font-medium mb-2">
            Display
          </div>
          <div className="text-xl leading-relaxed">
            A mock prototype that imitates a restaurant ordering kiosk. The base
            system translates specific commands into navigation in the grid
            based design.
          </div>
          <div className="text-xl leading-relaxed">
            A prototype that accepts modern input micro-interactions like
            sliding and tapping.
          </div>
        </div>
        <div className="text-xl mt-12 leading-relaxed">
          In the spring we will be looking into other interaction input types
          like:
        </div>
        <ul className="text-xl list-inside list-disc">
          <li className="mt-4">3D gestures</li>
          <li className="mt-2">Eye tracking</li>
          <li className="mt-2">
            Further iterations of the smartphone controller
          </li>
        </ul>
        <div className="border border-coolGrey800 border-opacity-25 w-2/3 mx-auto mt-20 mb-20"></div>
        <div className="text-xl text-coolGrey400 font-medium">
          Process - Design thinking
        </div>
        <div className="text-3xl font-display mt-4 text-redVivid400 leading-relaxed">
          Empathise
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          We needed a more in-depth understanding of the problem area. As a
          starting point we immersed ourselves in the physical environment by
          doing multiple <span className=" text-coolGrey050">observations</span>
          . We observed the use of public touch displays, the time it took for
          users to interact with them, if they followed the COVID-19 guidelines,
          how complex the interactions could become and much more.
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          For further insight we{" "}
          <span className="text-coolGrey050">interviewed</span> public touch
          display users. Open-ended questions allowed for a greater
          understanding of what the user pains were.
        </div>
        <div className="text-center mt-10 font-normal text-2xl text-coolGrey050 italic">
          "I'd rather not touch the display. I have no idea how many before me
          have touched it without sanitizing their hands"
        </div>
        <div className="text-3xl mt-12 text-redVivid400 leading-relaxed">
          Define
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          Several people neglected the COVID-19 guidelines such as sanitizing
          hands. They were spending upwards of two minutes at touch displays.
          They were touching their faces, phones and friends during
          interactions.
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          The problem is visible to anyone.{" "}
          <span className="text-coolGrey050">
            Users need a safer way of interacting with touch displays in public.
          </span>{" "}
          Thus we start working with several problem statements:
        </div>
        <ul className="list-inside list-disc">
          <li className="text-xl font-display mt-8 text-redVivid300 font-medium">
            How might we design interaction input types for use with touch
            displays to support touchless interactions?
          </li>
          <li className="text-xl font-display mt-8 text-redVivid300 font-medium">
            Which interaction types are most appropriate in different categories
            of interactions?
          </li>
          <li className="text-xl font-display mt-8 text-redVivid300 font-medium">
            How can touchless interactions be made as attractive as touch
            interaction?
          </li>
        </ul>
        <div className="text-3xl mt-12 text-redVivid400 leading-relaxed">
          Ideate
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          <span className="text-coolGrey050">
            Brainstorming, brain writing, mindmapping. We did multiple sessions
            of free thinking activities to get the good ideas flowing.
          </span>{" "}
          After having a large repository of "crazy" thoughts, like controlling
          displays with your feet (I still think that would be cool to explore),
          we started elaborating on the thoughts.{" "}
          <span className="text-coolGrey050">Sketching</span> out our thoughts
          allowed for deeper exploration of the thoughts we had. During the
          ideation activities I also facilitated{" "}
          <span className="text-coolGrey050">
            feedback sessions and design crits
          </span>{" "}
          with our peers. Most of our ideation sessions were online because of
          the COVID-19 restrictions. Miro served as a great tool for online
          ideation.
        </div>
        <div className="flex justify-center my-10">
          <Zoom>
            <img
              src={touchless_miro}
              className=""
              width="700px"
              alt="miro artboard"
            />
          </Zoom>
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          We spent large amounts of time doing litterature reviews. We wanted to
          be greatly knowledgeable on the research area of touchless
          interactions. Through this we were inspired by other solutions,
          different understandings of the problem and other problem domains
          relevant to touchless interactions.
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          Understanding the technology that could help us reach a viable
          solution was paramount. We explored different web technologies,
          Kinect, LeapMotion, eye-tracking AI and much more. This widened our
          perspective on the possibilities we have.
        </div>
        <div className="text-3xl mt-12 text-redVivid400 leading-relaxed">
          Prototype
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          Where everything comes to life! As you might have seen, we developed
          two prototypes.
        </div>

        <div className="grid grid-cols-2 place-items-center my-16">
          <div>
            <div className="text-xl font-medium font-display text-redVivid400">
              Display system
            </div>
            <div className="text-xl leading-relaxed w-80">
              The display system is a web appli-cation developed in React. Its
              only purpose is to be a dummy system that allows users to control
              it through a range of touchless interaction types.
            </div>
          </div>
          <div>
            <Zoom>
              <img
                src={touchless_3}
                className=""
                width="330px"
                alt="display system"
              />
            </Zoom>
          </div>
        </div>

        <div className="grid grid-cols-2 place-items-center mt-24 mb-16">
          <div>
            <div className="text-xl font-display font-medium text-redVivid400 ">
              Smartphone-as-a-controller
            </div>
            <div className="text-xl leading-relaxed w-80">
              The smartphone application is a React application with a large
              area for using the navigation controls. The user can select by
              tapping and navigate up, down, left and right by swiping.
            </div>
          </div>
          <div>
            <Zoom>
              <img
                src={touchless_6}
                className=""
                width="230px"
                alt="smartphone controller"
              />
            </Zoom>
          </div>
        </div>
        <div className="flex mt-4 justify-center">
          <a
            href="https://fla-restaurant.herokuapp.com"
            className="block text-lg rounded-xl font-display font-medium bg-redVivid400 py-3 px-12 text-coolGrey100 "
            target="_blank"
            rel="noreferrer"
          >
            Try it live
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className=" text-coolGrey100 ml-2 bg-redVivid400"
            />
          </a>
        </div>
        <div className="text-center mt-3">
          You'll need to right-click the page{" "}
          <FontAwesomeIcon icon={faLongArrowAltRight} className="mx-1" />{" "}
          inspect it{" "}
          <FontAwesomeIcon icon={faLongArrowAltRight} className="mx-1" /> toggle
          the device for iPad sizes
        </div>

        <div className="text-3xl mt-24 text-redVivid400 leading-relaxed">
          Test
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          So far we've pilot-tested the system. Preliminary results show that
          there could be a great opportunity in providing touchless options for
          controlling displays.
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          We took a quantitative approach to our pilot-tests. Using an
          Attrakdiff and a device assessment questionnaire gave us, although
          preliminary, results showing that:
          <ul className="list-disc list-inside">
            <li className="mt-4">
              Participants would prefer a touchless interaction type during the
              COVID-19 pandemic
            </li>
            <li className="mt-2">
              Participants performed almost equally well in regard to time
              consumption, while completing a range tasks using both touch and
              touchless
            </li>
            <li className="mt-2">
              Participants felt that the touchless smartphone-controller option
              was more comfortable due to not having to reach for a large
              display
            </li>
          </ul>
        </div>
        <div className="border border-coolGrey800 border-opacity-25 w-2/3 mx-auto mt-20 mb-20"></div>

        <div className="text-xl text-coolGrey400 font-medium">Takeaway</div>
        <div className="text-xl mt-4 leading-relaxed">
          This master's thesis is heavily focused on Interaction Design. I am
          continually improving my researching skills and this project offers no
          exceptions. Employing a design thinking approach, I've refined my
          abilities to empathise with users, ideate on solutions using creative
          ideation techniques and facilitating feedback sessions, prototyping
          real and useful solutions and finally testing it out.
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          This project is still on-going. If you have any feedback I'd love to
          hear from you!
        </div>
      </div>
    </div>
  );
};

export default TouchlessInteractions;
