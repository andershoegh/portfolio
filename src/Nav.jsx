import { AnimateSharedLayout } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useStickyState } from "./utils";

const Nav = () => {
  const [selected, setSelected] = useStickyState("Work", "nav");
  const border = "1px solid #2BB0ED";
  const animation = {
    type: "spring",
    duration: 0.3,
    bounce: 0.3,
    delay: 0.01,
  };

  const linkedInIcon = (
    <FontAwesomeIcon
      icon={faLinkedin}
      size="2x"
      className=""
      style={{ color: "#2867B2" }}
    />
  );

  return (
    <div className=" font-display w-full mt-20 flex justify-between items-center">
      <div className="flex items-center">
        <Link
          to="/"
          onClick={() => setSelected("Work")}
          style={{ color: "white" }}
          className="  bg-lightBlueVivid800 font-display font-bold text-lg flex justify-center items-center  rounded-full h-16 w-16"
        >
          AHH
        </Link>

        <div className="ml-6">
          <a
            href="https://www.linkedin.com/in/ahh-1/"
            target="_blank"
            rel="noreferrer"
          >
            {linkedInIcon}
          </a>
        </div>
        <div className="ml-6">
          <a href="mailto:anders.hoegh.hansen@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              style={{ color: "#2867B2" }}
            />
          </a>
        </div>
      </div>
      <div className="flex justify-items-end my-auto">
        <motion.div className="flex text-sm">
          <AnimateSharedLayout>
            <div className="">
              <Link
                to="/"
                onClick={() => setSelected("Work")}
                className="font-normal cursor-pointer  relative text-coolGrey300 m-2 px-6   focus:outline-none"
              >
                Work
              </Link>
              {selected === "Work" && (
                <motion.span
                  layoutId="navItem"
                  className={`block`}
                  style={{
                    bottom: "10px",
                    margin: "5px auto",
                    border: border,
                    width: "70px",
                  }}
                  initial={false}
                  transition={animation}
                  animate={{ visibility: "visible" }}
                ></motion.span>
              )}
            </div>
            <div className="">
              <Link
                to="/about"
                onClick={() => setSelected("About")}
                className="font-normal cursor-pointer  relative text-coolGrey300 m-2 px-6   focus:outline-none"
              >
                Who am I?
              </Link>
              {selected === "About" && (
                <motion.span
                  layoutId="navItem"
                  className={`block`}
                  style={{
                    bottom: "10px",
                    margin: "5px auto",
                    border: border,
                    width: "70px",
                  }}
                  initial={false}
                  transition={animation}
                  animate={{ visibility: "visible" }}
                ></motion.span>
              )}
            </div>
            <div className="">
              <Link
                to="/resume"
                onClick={() => setSelected("Resume")}
                className="font-normal cursor-pointer  relative text-coolGrey300 m-2 px-6   focus:outline-none"
              >
                Resume
              </Link>
              {selected === "Resume" && (
                <motion.span
                  layoutId="navItem"
                  className={`block`}
                  style={{
                    bottom: "10px",
                    margin: "5px auto",
                    border: border,
                    width: "70px",
                  }}
                  initial={false}
                  transition={animation}
                  animate={{ visibility: "visible" }}
                ></motion.span>
              )}
            </div>
          </AnimateSharedLayout>
        </motion.div>
      </div>
    </div>
  );
};

export default Nav;
