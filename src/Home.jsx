import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="text-xl font-light font-display text-center text-coolGrey100">
      <div className=" mt-52 lg:mt-40 text-6xl lg:text-8xl font-bold mb-5">
        'Ello
      </div>
      <div className="text-3xl mb-48 lg:mb-60">
        Interaction designer ready for the next big thing
      </div>

      <div className="mb-2 font-display">The projects are this way!</div>
      <FontAwesomeIcon
        icon={faArrowDown}
        className="text-coolGrey200 mb-24"
      ></FontAwesomeIcon>
    </div>
  );
};

export default Home;
