import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAllergies,
  faPlug,
  faPen,
  faArrowRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import iPadTouchless from "./images/touchless_3.png";
import uip_1 from "./images/uip_1.png";
import lumen_1 from "./images/lumen_1.png";
import { useStickyState } from "./utils";

const ProjectCards = () => {
  const [openTouchless, setOpenTouchless] = useStickyState(false, "touchless");
  const [openUIPlayground, setOpenUIPlayground] = useStickyState(false, "uip");
  const [openLumen, setOpenLumen] = useStickyState(false, "lumen");

  const touchlessInteractionIcon = (
    <FontAwesomeIcon
      icon={faAllergies}
      size="5x"
      className="bg-redVivid200 text-coolGrey800"
    />
  );

  const penIcon = (
    <FontAwesomeIcon
      icon={faPen}
      size="5x"
      className=" bg-lightBlueVivid100 text-coolGrey800"
    />
  );
  const plugIcon = (
    <FontAwesomeIcon
      icon={faPlug}
      size="5x"
      className=" bg-yellowVivid200 text-coolGrey800"
    />
  );

  const boxMotion = {
    rest: {
      color: "",
      scale: 1,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
  };
  const textMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      y: -30,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
  };
  const iconMotion = {
    rest: { ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      y: -30,
      transition: {
        duration: 0.4,
        bounce: 0.3,
        type: "spring",
        ease: "easeIn",
      },
    },
  };

  const textColorGrey900 = "text-coolGrey900";
  const textColorGrey050 = "text-coolGrey050";

  const touchlessBackgroundColor = "bg-redVivid200";
  const UIPlaygroundBackgroundColor = "bg-lightBlueVivid100";
  const lumenBackgroundColor = "bg-yellowVivid200";

  const uipRef = useRef();
  const touchlessRef = useRef();
  const lumenRef = useRef();

  function scrollToTargetAdjusted(ref) {
    setTimeout(
      () => ref.current.scrollIntoView({ behavior: "smooth", block: "center" }),
      5
    );
  }

  const renderTouchlessInteractions = () => {
    return (
      <AnimateSharedLayout>
        <motion.div
          ref={touchlessRef}
          className={`${
            openUIPlayground && openTouchless ? "order-first" : ""
          } ${openTouchless ? "col-span-2" : "col-span-1"}`}
        >
          {openTouchless ? (
            <motion.div
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              className={`${touchlessBackgroundColor} 
            } font-display font-medium col-span-2 rounded-sm place-items-center w-full place-content-between flex`}
              layoutId="expandable-card"
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key="touchlessOpen"
                  transition={{ delay: 0.4, opacity: 1, duration: 0.2 }}
                  animate={{ opacity: 1 }}
                  className={`opacity-0 w-2/3 h-full max-h-full rounded-sm flex my-auto ${touchlessBackgroundColor} ${textColorGrey900}`}
                >
                  <motion.div
                    className={`rounded-l-sm h-full content-center  rounded-r-3xl ${touchlessBackgroundColor} ${textColorGrey900} rounded-r-sm pl-16 py-10 `}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      size="1x"
                      className={`${touchlessBackgroundColor} cursor-pointer `}
                      onClick={() => setOpenTouchless(false)}
                    />
                    {/* Card left content */}
                    <motion.div
                      className={`text-center ${touchlessBackgroundColor} mb-6`}
                    >
                      <FontAwesomeIcon
                        icon={faAllergies}
                        size="3x"
                        className={`${touchlessBackgroundColor}  `}
                      />
                    </motion.div>

                    <motion.div
                      className={`${touchlessBackgroundColor}  text-center text-2xl mb-5`}
                    >
                      Touchless Interactions
                    </motion.div>
                    <motion.div
                      className={`${touchlessBackgroundColor} text-xs font-extrabold`}
                    >
                      Problem
                    </motion.div>
                    <motion.div
                      className={`${touchlessBackgroundColor}   mb-3`}
                    >
                      How can we design touchless interaction technology to
                      assist people in minimizing the spread of COVID-19
                      bacteria when using public touch displays?
                    </motion.div>
                    <motion.div
                      className={`${touchlessBackgroundColor}  text-xs font-extrabold`}
                    >
                      Solution
                    </motion.div>
                    <motion.div className={`${touchlessBackgroundColor}  mb-3`}>
                      A system that allows users to use their smartphone as the
                      controller for the touch display.{" "}
                      <span
                        className={`${touchlessBackgroundColor} font-semibold`}
                      >
                        We created a mock restaurant kiosk system to test with.
                      </span>
                    </motion.div>
                    <motion.div
                      className={`${touchlessBackgroundColor}  text-xs font-extrabold`}
                    >
                      Outcome
                    </motion.div>
                    <motion.div className={`${touchlessBackgroundColor}`}>
                      A short preliminary study found that users thought the
                      touchless alternative was almost equally as attractive as
                      touch.
                    </motion.div>
                    <Link className={``} to="/touchlessInteractions">
                      <motion.button
                        whileHover={{ scale: 1.05, type: "spring" }}
                        className={`shadow-lg bg-redVivid400 place-items-center rounded-lg ${textColorGrey050} flex text-base rounded-sm py-3 font-medium px-8 mt-10 mx-auto`}
                      >
                        <motion.span className={`bg-redVivid400`}>
                          Read more
                        </motion.span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          size="1x"
                          className={`ml-4 bg-redVivid400 `}
                        />
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={`h-full flex place-content-center lg:px-16 px-16 rounded-r-sm ${touchlessBackgroundColor} `}
                >
                  <motion.div
                    transition={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className={`relative opacity-1 flex place-self-center  ${touchlessBackgroundColor} `}
                  >
                    <img
                      src={iPadTouchless}
                      width="550px"
                      className={`${touchlessBackgroundColor} h-full`}
                      alt="ipad screenshot"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              onClick={() => {
                setOpenTouchless(true);
              }}
            >
              <motion.div
                variants={boxMotion}
                initial="rest"
                key="touchlessClosed"
                whileHover="hover"
                onClick={() => scrollToTargetAdjusted(touchlessRef)}
                layoutId="expandable-card"
                animate="rest"
                className={`relative h-96 font-display cursor-pointer rounded-sm ${touchlessBackgroundColor} flex place-content-center items-center`}
              >
                {/* <span
                  ref={touchlessRef}
                  id="touchless"
                  className="absolute w-full min-h-full"
                ></span> */}
                <motion.span
                  variants={iconMotion}
                  // initial="rest"
                  // whileHover="rest"
                  // animate="rest"
                >
                  {touchlessInteractionIcon}
                </motion.span>
                <motion.span
                  variants={textMotion}
                  className={`absolute text-xl  ${touchlessBackgroundColor} mx-5 text-coolGrey900 text-center font-bold`}
                  style={{ bottom: "90px", margin: "0 auto" }}
                >
                  Touchless Interactions
                </motion.span>
                <motion.span
                  variants={textMotion}
                  className={`absolute mx-10 ${touchlessBackgroundColor} text-center text-coolGrey900 font-medium text-sm`}
                  style={{ bottom: "45px", margin: "0 auto" }}
                >
                  Would you touch a public touch display if you had an
                  alternative?
                </motion.span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </AnimateSharedLayout>
    );
  };

  const renderUIPlayground = () => {
    return (
      <AnimateSharedLayout>
        <motion.div
          ref={uipRef}
          className={`${openUIPlayground ? "col-span-2" : "col-span-1"} ${
            openUIPlayground ? "order-first" : " order-none"
          }`}
        >
          {openUIPlayground ? (
            <motion.div
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              className={`${UIPlaygroundBackgroundColor}  font-display font-medium col-span-2 rounded-sm place-items-center w-full place-content-between flex`}
              layoutId="expandable-card"
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key="uipOpen"
                  transition={{ delay: 0.4, opacity: 1, duration: 0.2 }}
                  animate={{ opacity: 1 }}
                  className={`opacity-0 w-2/3 h-full max-h-full rounded-sm flex my-auto ${UIPlaygroundBackgroundColor} ${textColorGrey900}`}
                >
                  <motion.div
                    className={`  rounded-sm ${UIPlaygroundBackgroundColor} ${textColorGrey900} px-16 py-10 max-h-full`}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      size="1x"
                      className={`${UIPlaygroundBackgroundColor} cursor-pointer`}
                      onClick={() => setOpenUIPlayground(false)}
                    />
                    <motion.div
                      className={`text-center ${UIPlaygroundBackgroundColor} mb-6`}
                    >
                      <FontAwesomeIcon
                        icon={faPen}
                        size="3x"
                        className={`${UIPlaygroundBackgroundColor}  `}
                      />
                    </motion.div>
                    <motion.div
                      className={`${UIPlaygroundBackgroundColor}  text-center text-2xl mb-5`}
                    >
                      UI Playground
                    </motion.div>
                    <motion.div
                      className={`${UIPlaygroundBackgroundColor} text-xs font-extrabold`}
                    >
                      Purpose
                    </motion.div>
                    <motion.div
                      className={`${UIPlaygroundBackgroundColor}   mb-5`}
                    >
                      I want to improve my UI design skills. Therefore I created
                      this side-project between christmas end new years 2020.
                    </motion.div>
                    <motion.div
                      className={`${UIPlaygroundBackgroundColor}  text-xs font-extrabold`}
                    >
                      Solution
                    </motion.div>
                    <motion.div
                      className={`${UIPlaygroundBackgroundColor}  mb-5`}
                    >
                      The side project is a digital tool for craftsmen to
                      organize and handle their projects and tasks.
                    </motion.div>
                    <motion.div
                      className={`${UIPlaygroundBackgroundColor}  text-xs font-extrabold`}
                    >
                      Feedback
                    </motion.div>
                    <motion.div className={`${UIPlaygroundBackgroundColor}`}>
                      Please feel free to explore the figma prototype and file.
                      I'm continually practicing UI design and would love
                      feedback if you have any!
                    </motion.div>
                    <Link className={``} to="/craft">
                      <motion.button
                        whileHover={{ scale: 1.05, type: "spring" }}
                        className={`shadow-lg bg-lightBlueVivid600 rounded-lg place-items-center ${textColorGrey050} flex mx-auto rounded-sm py-3 px-7 mt-12`}
                      >
                        <motion.span className={`bg-lightBlueVivid600`}>
                          Explore
                        </motion.span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          size="1x"
                          className={`ml-4 bg-lightBlueVivid600`}
                        />
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={`h-full flex place-content-center py-10 pr-12 rounded-r-sm ${UIPlaygroundBackgroundColor} `}
                >
                  <motion.div
                    transition={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className={` opacity-0  items-start place-self-center  ${UIPlaygroundBackgroundColor} `}
                  >
                    <img
                      src={uip_1}
                      width="270px"
                      className={`${UIPlaygroundBackgroundColor} h-full`}
                      alt=""
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              onClick={() => {
                setOpenUIPlayground(true);
              }}
            >
              <motion.div
                variants={boxMotion}
                initial="rest"
                key="uipClosed"
                whileHover="hover"
                onClick={() => scrollToTargetAdjusted(uipRef)}
                animate="rest"
                layoutId="expandable-card"
                className="relative cursor-pointer font-display h-96 rounded-sm bg-lightBlueVivid100 flex place-content-center items-center "
              >
                {/* <span
                  ref={uipRef}
                  className="absolute w-full min-h-full"
                ></span> */}
                <motion.span
                  variants={iconMotion}
                  // initial="rest"
                  // whileHover="rest"
                  // animate="rest"
                >
                  {penIcon}
                </motion.span>
                <motion.span
                  variants={textMotion}
                  className="absolute text-xl  bg-lightBlueVivid100 mx-5 text-coolGrey900 text-center font-bold   "
                  style={{ bottom: "100px", margin: "0 auto" }}
                >
                  UI playground
                </motion.span>
                <motion.span
                  variants={textMotion}
                  className="absolute mx-10 bg-lightBlueVivid100 text-center text-coolGrey900 font-medium text-sm"
                  style={{ bottom: "55px", margin: "0 auto" }}
                >
                  Playing around with UI design on side-projects
                </motion.span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </AnimateSharedLayout>
    );
  };

  const renderLumen = () => {
    return (
      <AnimateSharedLayout>
        <motion.div
          ref={lumenRef}
          className={` ${openLumen ? "col-span-2" : "col-span-1"}`}
        >
          {openLumen ? (
            <motion.div
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              className={`${lumenBackgroundColor}  font-display font-medium col-span-2 rounded-sm place-items-center w-full place-content-between flex`}
              layoutId="expandable-card"
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key="lumenOpen"
                  transition={{ delay: 0.4, opacity: 1, duration: 0.2 }}
                  animate={{ opacity: 1 }}
                  className={`opacity-0 w-2/3 h-full max-h-full rounded-sm flex my-auto ${lumenBackgroundColor} ${textColorGrey900}`}
                >
                  <motion.div
                    className={`  rounded-sm ${lumenBackgroundColor} ${textColorGrey900} px-16 py-10 max-h-full`}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      size="1x"
                      className={`${lumenBackgroundColor} cursor-pointer`}
                      onClick={() => setOpenLumen(false)}
                    />
                    <motion.div
                      className={`text-center ${lumenBackgroundColor} mb-6`}
                    >
                      <FontAwesomeIcon
                        icon={faPlug}
                        size="3x"
                        className={`${lumenBackgroundColor}  `}
                      />
                    </motion.div>

                    <motion.div
                      className={`${lumenBackgroundColor}  text-center text-2xl mb-5`}
                    >
                      Sustainable use of electricity
                    </motion.div>
                    <motion.div
                      className={`${lumenBackgroundColor} text-xs font-extrabold`}
                    >
                      Problem
                    </motion.div>
                    <motion.div className={`${lumenBackgroundColor}   mb-5`}>
                      The place and, in particular, time at which electricity is
                      consumed can greatly influence the impact electricity
                      production has on the environment. This project helps
                      small communities be more sustainable!
                    </motion.div>
                    <motion.div
                      className={`${lumenBackgroundColor}  text-xs font-extrabold`}
                    >
                      Solution
                    </motion.div>
                    <motion.div className={`${lumenBackgroundColor}  mb-5`}>
                      A digital and a physical prototype make up a system that
                      creates awareness of electricity sustainability.
                    </motion.div>
                    <motion.div
                      className={`${lumenBackgroundColor}  text-xs font-extrabold`}
                    >
                      Outcome
                    </motion.div>

                    <motion.div className={`${lumenBackgroundColor}`}>
                      <span
                        className={`${lumenBackgroundColor} italic block mb-2`}
                      >
                        This work is published at the{" "}
                        <a
                          href="https://vbn.aau.dk/da/publications/lumen-a-case-study-of-designing-for-sustainable-energy-communitie"
                          target="_blank"
                          rel="noreferrer"
                          className={`${lumenBackgroundColor} underline`}
                        >
                          OzCHI '20 conference
                        </a>
                      </span>
                      Results showed that the participants liked focusing on
                      using sustainable electricity. Users changed habits - such
                      as charging their phones at odd times to use the "right"
                      electricity.
                    </motion.div>
                    <Link className={``} to="/lumen">
                      <motion.button
                        whileHover={{ scale: 1.05, type: "spring" }}
                        className={`shadow-lg bg-yellowVivid500 place-items-center rounded-lg ${textColorGrey050} flex mx-auto rounded-sm py-3 px-7 mt-12`}
                      >
                        <motion.span className={`bg-yellowVivid500`}>
                          Read more
                        </motion.span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          size="1x"
                          className={`ml-4 bg-yellowVivid500`}
                        />
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className={`h-full flex place-content-center py-10 pr-16 rounded-r-sm ${lumenBackgroundColor} `}
                >
                  <motion.div
                    transition={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className={` opacity-0 items-start place-self-center   ${lumenBackgroundColor} `}
                  >
                    <img
                      src={lumen_1}
                      width="250px"
                      className={`${lumenBackgroundColor} h-full`}
                      alt=""
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div onClick={() => setOpenLumen(true)}>
              <motion.div
                variants={boxMotion}
                initial="rest"
                key="lumenClosed"
                whileHover="hover"
                onClick={() => scrollToTargetAdjusted(lumenRef)}
                animate="rest"
                layoutId="expandable-card"
                className="relative cursor-pointer h-96 font-display rounded-sm bg-yellowVivid200 flex place-content-center items-center "
              >
                {/* <span
                  ref={lumenRef}
                  id="lumen"
                  className="absolute w-full min-h-full"
                ></span> */}
                <motion.span
                  variants={iconMotion}
                  // initial="rest"
                  // whileHover="rest"
                  // animate="rest"
                >
                  {plugIcon}
                </motion.span>
                <motion.span
                  variants={textMotion}
                  className="absolute text-xl  bg-yellowVivid200 mx-5 text-coolGrey900 text-center font-bold   "
                  style={{ bottom: "90px", margin: "0 auto" }}
                >
                  Sustainable use of electricity
                </motion.span>
                <motion.span
                  variants={textMotion}
                  className="absolute mx-10 bg-yellowVivid200 text-center text-coolGrey900 font-medium text-sm"
                  style={{ bottom: "45px", margin: "0 auto" }}
                >
                  Ever thought about the environment when you charge your
                  iPhone?
                </motion.span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </AnimateSharedLayout>
    );
  };

  return (
    <div className="mb-32">
      <div className=" grid-cols-2 grid gap-4">
        {renderTouchlessInteractions()}
        {renderUIPlayground()}
        {renderLumen()}
        {/* {renderGarden()} */}
      </div>
    </div>
  );
};

export default ProjectCards;
