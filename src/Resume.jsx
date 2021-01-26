import { motion } from "framer-motion";
import React from "react";
import cv from "./Assets/cv.svg";

const Resume = () => {
  return (
    <>
      <div className="flex justify-center mt-32">
        <img className=" rounded-sm" alt="resume" src={cv}></img>
      </div>
      <motion.div className="flex font-display justify-center">
        <a
          target="_blank"
          rel="noreferrer"
          className="py-2 px-6 mt-10 shadow-md rounded-full bg-coolGrey100"
          href="https://drive.google.com/file/d/14i1fibQ-sfbE7Mc6rZupbA8MRiDtkiHF/view?usp=sharing"
        >
          Download resume
        </a>
      </motion.div>
    </>
  );
};

export default Resume;
