import {
  faExternalLinkAlt,
  faHardHat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ScrollElement from "./ScrollElement";

const UIPlayground = () => {
  return (
    <div className="w-full lg:px-24 justify-center flex  mb-52 font-light text-coolGrey200 font-body">
      <ScrollElement strokeColor={"#1992D4"} />
      <div className="mt-24 w-full">
        {/* <div className="sm:mx-10 md:mx-20 lg:mx-36 xl:mx-44 mt-24"> */}
        <div className=" text-4xl font-display text-coolGrey100 mb-2 font-medium">
          UI playground
        </div>
        <div className="text-2xl font-display  text-lightBlueVivid400 font-extralight mb-5 ">
          A store for UI design side-projects
        </div>

        <div className="2"></div>
        <div className="mb-6 text-xl leading-relaxed">
          Feel free to explore the designs. If you have any questions or
          feedback you're welcome to contact me.
        </div>
        <div className="border border-coolGrey800 border-opacity-25 w-2/3 mx-auto mt-20 mb-20"></div>

        <div className="text-3xl  text-lightBlueVivid400 font-medium mb-6 mt-10">
          <FontAwesomeIcon
            icon={faHardHat}
            className="text-lightBlueVivid400"
            size="1x"
          ></FontAwesomeIcon>{" "}
          <span className=" ml-3">Craftsman</span>
        </div>

        <div className="text-lightBlueVivid400 text-xl mb-2 leading-relaxed font-medium">
          A tool for supply companies to help their employees manage their work
        </div>
        <div className="mb-6 text-xl leading-relaxed">
          In this application the craftsman is able to see projects, tasks and
          mark them according to the work they’ve done, such as registering
          time, adding used materials and more. The application design presumes
          a back-end tool that creates projects and tasks for individual
          craftsmen to go and work on.
        </div>

        <div className="mb-10 hidden lg:block">
          <iframe
            title="Prototype"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            width="800"
            height="800"
            src={`https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrAXOJLzyUJAqRMDzKawjqq%2FProject-X%3Fnode-id%3D1%253A19%26scaling%3Dscale-down`}
            allowfullscreen
          ></iframe>
        </div>

        <div className="mb-10 mt-10 lg:hidden">
          <a
            target="_blank"
            rel="noreferrer"
            className="text-md mb-10 text-xl text-lightBlueVivid400 font-medium"
            href="https://www.figma.com/proto/rAXOJLzyUJAqRMDzKawjqq/Project-X?node-id=1%3A19&viewport=877%2C139%2C0.08101356029510498&scaling=scale-down"
          >
            Try the prototype
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size="1x"
              className=" text-lightBlueVivid400 ml-2"
            ></FontAwesomeIcon>
          </a>
        </div>

        <div className="mb-10">
          <a
            target="_blank"
            rel="noreferrer"
            className="text-md mb-10 text-xl text-lightBlueVivid400 font-medium"
            href="https://www.figma.com/file/rAXOJLzyUJAqRMDzKawjqq/Project-X?node-id=0%3A1"
          >
            See the design in figma{" "}
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size="1x"
              className=" text-lightBlueVivid400 ml-2"
            ></FontAwesomeIcon>
          </a>
        </div>

        <div className="border border-coolGrey800 border-opacity-25 w-2/3 mx-auto mt-20 mb-20"></div>
        <div className="text-center text-xl">
          More projects are on their way!
        </div>
      </div>
    </div>
  );
};

export default UIPlayground;
