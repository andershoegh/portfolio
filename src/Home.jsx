import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHardHat,
  faSchool,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const codeIcon = (
    <FontAwesomeIcon
      icon={faCode}
      size="1x"
      className=" text-lightBlueVivid700"
    />
  );
  const schoolIcon = (
    <FontAwesomeIcon
      icon={faSchool}
      size="1x"
      className=" text-lightBlueVivid700"
    />
  );
  const scrollIcon = (
    <FontAwesomeIcon
      icon={faScroll}
      size="1x"
      className=" text-lightBlueVivid700"
    />
  );
  const hatIcon = (
    <FontAwesomeIcon
      icon={faHardHat}
      size="1x"
      className="text-lightBlueVivid700"
    />
  );

  return (
    <div className=" mt-40 text-xl font-light mb-32 text-coolGrey600">
      <div className=" font-display text-4xl font-bold mb-10  text-lightBlueVivid700">
        Hey! I'm Anders
      </div>

      <div className="mb-6">
        <span className="mr-4">{codeIcon}</span>
        Building simulation tools for a greener world at{" "}
        <a
          href="https://energymachines.com"
          target="_blank"
          rel="noopener noreferrer"
          className="  "
        >
          Energy Machines
        </a>
      </div>

      <div className="mb-6" style={{ paddingLeft: "3.5px" }}>
        <span className="mr-4">{hatIcon}</span>
        Previously designed efficient user experiences for maintenance
        management at{" "}
        <a
          href="https://www.dynaway.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Dynaway
        </a>
      </div>

      <div className="mb-6">
        <span className="mr-4">{schoolIcon}</span>
        Interaction Design MSc student at AAU
      </div>

      <div className="mb-6">
        <span className="mr-4">{scrollIcon}</span>
        Part of the AAU{" "}
        <a
          href="https://www.tech.aau.dk/tech-talent-programme/"
          target="_blank"
          rel="noopener noreferrer"
        >
          tech talent programme
        </a>
      </div>
    </div>
  );
};

export default Home;
