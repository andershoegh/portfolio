import React from "react";
import cv from "./Assets/cv.svg";
import Zoom from "react-medium-image-zoom";

const Resume = () => {
  return (
    <>
      <div className="flex justify-center mt-24 lg:mt-32">
        <Zoom overlayBgColorEnd="#0c0c0c" overlayBgColorStart="#0c0c0c">
          <img className=" rounded-sm" alt="resume" src={cv}></img>
        </Zoom>
      </div>
      <div className="flex  font-display justify-center">
        <a
          target="_blank"
          rel="noreferrer"
          className="py-2 hover:bg-coolGrey050 px-6 mt-10 shadow-md rounded-full bg-coolGrey100"
          href="https://drive.google.com/file/d/14i1fibQ-sfbE7Mc6rZupbA8MRiDtkiHF/view?usp=sharing"
        >
          Download resume
        </a>
      </div>
    </>
  );
};

export default Resume;
