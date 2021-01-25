import { faArrowRight, faHardHat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ScrollElement from "./ScrollElement";

const Craft = () => {
  return (
    <div className="w-full flex justify-center mb-52 min-w-full font-normal text-coolGrey900 font-display">
      <div className="sm:mx-10 md:mx-20 lg:mx-36 xl:mx-44 mt-24">
        <ScrollElement strokeColor={"#1992D4"} />
        <div className=" text-4xl text-coolGrey700 mb-2 font-medium">
          UI playground
        </div>
        <div className="text-xl text-lightBlueVivid700 font-extralight mb-5 ">
          A store for UI design side-projects
        </div>

        <div className="2">
          Projects on this page are not neccesarily informed by real problems,
          but they provide me with enough context to improve my UI design
          skills, using only limited system requirements to shape the design.
        </div>
        <div className="mb-6">
          Feel free to explore the designs. If you have any questions or
          feedback you're welcome to contact me.
        </div>
        <div
          style={{ height: "1px" }}
          className=" bg-lightBlueVivid100 w-full"
        />

        <div className="text-2xl  text-lightBlueVivid700 font-medium mb-6 mt-10">
          <FontAwesomeIcon
            icon={faHardHat}
            className="text-lightBlueVivid700"
            size="1x"
          ></FontAwesomeIcon>{" "}
          <span className=" ml-3">Craftsman</span>
        </div>

        <div className="text-lightBlueVivid700 font-medium">
          A tool for supply companies to help their employees manage their work
        </div>
        <div className="mb-6">
          In this application the craftsman is able to see projects, tasks and
          mark them according to the work they’ve done, such as registering
          time, adding used materials and more. The application design presumes
          a back-end tool that creates projects and tasks for individual
          craftsmen to go and work on.
        </div>

        <div className="mb-10">
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

        <div className="mb-10">
          <a
            target="_blank"
            rel="noreferrer"
            className="text-md mb-10 text-lightBlueVivid700 font-medium"
            href="https://www.figma.com/file/rAXOJLzyUJAqRMDzKawjqq/Project-X?node-id=0%3A1"
          >
            See the design in figma{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              size="1x"
              className=" text-lightBlueVivid700 ml-2"
            ></FontAwesomeIcon>
          </a>
        </div>

        <div
          style={{ height: "1px" }}
          className=" bg-lightBlueVivid100 w-full mb-10"
        />
        <div className="text-center">More projects are on their way!</div>
      </div>
    </div>
  );
};

export default Craft;
