import React, { useRef, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlug,
  faPen,
  faArrowRight,
  faTimes,
  faViruses,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import iPadTouchless from "./images/touchless_3.png";
import uip_1 from "./images/uip_1.png";
import lumen_1 from "./images/lumen_1.png";
import fixdLogo from "./images/fixd.png";
import dynawayLogo from "./images/dynaway.svg";
import dynawayMobile from "./images/dynaway_mobile.png";
import ixdexpo from "./images/ixdexpo.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProjectCards = () => {
  const [openTouchless, setOpenTouchless] = useState(false);
  const [openUIPlayground, setOpenUIPlayground] = useState(false);
  const [openLumen, setOpenLumen] = useState(false);
  const [openDynaway, setOpenDynaway] = useState(false);
  const [openFixD, setOpenFixD] = useState(false);

  const touchlessInteractionIcon = (
    <FontAwesomeIcon
      icon={faViruses}
      size="5x"
      className="bg-coolGrey900 text-redVivid300"
    />
  );

  const penIcon = (
    <FontAwesomeIcon
      icon={faPen}
      size="4x"
      className=" text-lightBlueVivid400 bg-coolGrey900"
    />
  );
  const plugIcon = (
    <FontAwesomeIcon
      icon={faPlug}
      size="5x"
      className=" text-yellowVivid200 bg-coolGrey900"
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

  const textColorGrey900 = "text-coolGrey050";
  const textColorGrey050 = "text-coolGrey050";

  const touchlessBackgroundColor = "bg-coolGrey900";
  const UIPlaygroundBackgroundColor = "bg-coolGrey900";
  const lumenBackgroundColor = "bg-coolGrey900";

  const uipRef = useRef();
  const touchlessRef = useRef();
  const lumenRef = useRef();
  const dynawayRef = useRef();
  const fixdRef = useRef();

  function scrollToTargetAdjusted(ref) {
    // lav check om størrelse på skærm for at vurdere hvor der skal srolles hen
    if (window.screen.width < 1024) {
      setTimeout(
        () =>
          ref.current.scrollIntoView({ behavior: "smooth", block: "start" }),
        5
      );
    } else {
      setTimeout(
        () =>
          ref.current.scrollIntoView({ behavior: "smooth", block: "center" }),
        5
      );
    }
  }

  const renderTouchlessInteractions = () => {
    return (
      <AnimateSharedLayout>
        <motion.div
          ref={touchlessRef}
          className={`${openTouchless ? "lg:col-span-2" : "lg:col-span-1"}`}
        >
          {openTouchless ? (
            <motion.div
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              className={`${touchlessBackgroundColor} font-body font-light col-span-2 pb-4 lg:pb-0 place-items-center w-full place-content-between lg:flex`}
              layoutId="expandable-card"
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key="touchlessOpen"
                  transition={{ delay: 0.4, opacity: 1, duration: 0.2 }}
                  animate={{ opacity: 1 }}
                  className={`opacity-0 mx-6 lg:w-2/3 h-full max-h-full flex my-auto ${touchlessBackgroundColor} ${textColorGrey900}`}
                >
                  <motion.div
                    className={`pt-6  h-full content-center ${touchlessBackgroundColor} ${textColorGrey900} lg:pl-16 lg:py-10 `}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      size="1x"
                      className={`${touchlessBackgroundColor}  cursor-pointer`}
                      onClick={() => setOpenTouchless(false)}
                    />
                    {/* Card left content */}
                    <motion.div
                      className={`text-center mt-4 lg:mt-0 ${touchlessBackgroundColor} mb-6`}
                    >
                      <FontAwesomeIcon
                        icon={faViruses}
                        size="3x"
                        className={`${touchlessBackgroundColor} text-redVivid300`}
                      />
                    </motion.div>

                    <motion.div
                      className={`${touchlessBackgroundColor} font-display  text-center text-2xl mb-5`}
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
                      Outcome
                    </motion.div>
                    <motion.div className={`${touchlessBackgroundColor}  mb-3`}>
                      A system that allows users to use their smartphone as the
                      controller for the touch display. We created a mock
                      restaurant kiosk system to test with.
                    </motion.div>
                    <motion.div
                      className={`${touchlessBackgroundColor}  text-xs font-extrabold`}
                    >
                      My main contributions
                    </motion.div>
                    <motion.div className={`${touchlessBackgroundColor}`}>
                      Initial designs, research, ideation, developing.
                    </motion.div>
                    <Link
                      className={`hidden mt-10 ${touchlessBackgroundColor} lg:block`}
                      to="/touchlessInteractions"
                    >
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
                  className={`h-full lg:flex place-content-center mt-10 lg:mt-0 lg:pr-16 lg:pl-8 px-10 lg:mb-0 mb-6 ${touchlessBackgroundColor} `}
                >
                  <motion.div
                    transition={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className={`relative opacity-1 justify-center flex place-self-center  ${touchlessBackgroundColor} `}
                  >
                    <Zoom
                      overlayBgColorEnd="#0c0c0c"
                      overlayBgColorStart="#0c0c0c"
                    >
                      <img
                        src={iPadTouchless}
                        width="480px"
                        className={`${touchlessBackgroundColor} mx-auto h-full`}
                        alt="ipad screenshot"
                      />
                    </Zoom>
                  </motion.div>
                  <Link
                    className={`lg:hidden mb-6`}
                    to="/touchlessInteractions"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, type: "spring" }}
                      className={`shadow-lg bg-redVivid400 place-items-center rounded-lg ${textColorGrey050} flex text-base rounded-sm py-3 font-medium px-8 mt-6 mx-auto`}
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
                className={`relative h-72 lg:h-96 font-display cursor-pointer ${touchlessBackgroundColor} flex place-content-center items-center`}
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
                  className={`hidden lg:block absolute text-xl  ${touchlessBackgroundColor} ${textColorGrey050} mx-5  text-center font-semibold`}
                  style={{ bottom: "90px", margin: "0 auto" }}
                >
                  Touchless Interactions
                </motion.span>
                <motion.span
                  variants={textMotion}
                  className={`hidden lg:block absolute mx-10 ${touchlessBackgroundColor} ${textColorGrey050} text-center  font-medium text-sm`}
                  style={{ bottom: "55px", margin: "0 auto" }}
                >
                  Getting COVID-19 from a public touch display? No thanks.
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
          className={`${openUIPlayground ? "lg:col-span-2" : "lg:col-span-1"}`}
        >
          {openUIPlayground ? (
            <motion.div
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              className={`${UIPlaygroundBackgroundColor}  font-body font-light col-span-2 place-items-center w-full place-content-between lg:flex`}
              layoutId="expandable-card"
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key="uipOpen"
                  transition={{ delay: 0.4, opacity: 1, duration: 0.2 }}
                  animate={{ opacity: 1 }}
                  className={`opacity-0 lg:w-2/3 h-full mx-6 lg:mx-0 max-h-full lg:flex my-auto ${UIPlaygroundBackgroundColor} ${textColorGrey900}`}
                >
                  <motion.div
                    className={`pt-6  h-full content-center ${touchlessBackgroundColor} ${textColorGrey900} lg:pl-20 lg:py-10 `}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      size="1x"
                      className={`${UIPlaygroundBackgroundColor} cursor-pointer`}
                      onClick={() => setOpenUIPlayground(false)}
                    />
                    <motion.div
                      className={`text-center ${UIPlaygroundBackgroundColor} mt-4 mb-6`}
                    >
                      <FontAwesomeIcon
                        icon={faPen}
                        size="3x"
                        className={`${UIPlaygroundBackgroundColor} text-lightBlueVivid400  `}
                      />
                    </motion.div>
                    <motion.div
                      className={`${UIPlaygroundBackgroundColor} font-display  text-center text-2xl mb-5`}
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
                      Outcome
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
                    <Link
                      className={`hidden lg:block ${UIPlaygroundBackgroundColor}`}
                      to="/craft"
                    >
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
                  className={`h-full lg:flex place-content-center py-10 lg:pr-12 ${UIPlaygroundBackgroundColor} `}
                >
                  <motion.div
                    transition={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className={` opacity-0 items-start flex justify-center place-self-center  ${UIPlaygroundBackgroundColor} `}
                  >
                    <Zoom
                      overlayBgColorEnd="#0c0c0c"
                      overlayBgColorStart="#0c0c0c"
                      className="mx-auto h-full"
                    >
                      <img
                        src={uip_1}
                        width="270px"
                        className={`${UIPlaygroundBackgroundColor} mx-auto pr-2  h-full`}
                        alt=""
                      />
                    </Zoom>
                  </motion.div>
                  <Link className={`lg:hidden`} to="/craft">
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
                className={`${UIPlaygroundBackgroundColor} relative cursor-pointer font-display h-72 lg:h-96 flex place-content-center items-center`}
              >
                <motion.span variants={iconMotion}>{penIcon}</motion.span>
                <motion.span
                  variants={textMotion}
                  className={`hidden lg:block absolute text-xl  mx-5 text-center font-semibold ${textColorGrey050} ${UIPlaygroundBackgroundColor} `}
                  style={{ bottom: "90px", margin: "0 auto" }}
                >
                  UI playground
                </motion.span>
                <motion.span
                  variants={textMotion}
                  className={`hidden lg:block absolute mx-10 ${UIPlaygroundBackgroundColor} text-center ${textColorGrey050} font-medium text-sm `}
                  style={{ bottom: "55px", margin: "0 auto" }}
                >
                  Playing around with UI design
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
          className={` ${openLumen ? "lg:col-span-2" : "lg:col-span-1"}`}
        >
          {openLumen ? (
            <motion.div
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              className={`${lumenBackgroundColor}  font-body font-light col-span-2 place-items-center w-full place-content-between lg:flex`}
              layoutId="expandable-card"
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key="lumenOpen"
                  transition={{ delay: 0.4, opacity: 1, duration: 0.2 }}
                  animate={{ opacity: 1 }}
                  className={`opacity-0 mx-6 lg:w-2/3 h-full max-h-full flex my-auto ${touchlessBackgroundColor} ${textColorGrey900}`}
                >
                  <motion.div
                    className={`pt-6  h-full content-center ${touchlessBackgroundColor} ${textColorGrey900} lg:pl-16 lg:py-10 `}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      size="1x"
                      className={`${lumenBackgroundColor} cursor-pointer`}
                      onClick={() => setOpenLumen(false)}
                    />
                    <motion.div
                      className={`text-center mt-4 ${lumenBackgroundColor} mb-6`}
                    >
                      <FontAwesomeIcon
                        icon={faPlug}
                        size="3x"
                        className={`${lumenBackgroundColor} text-yellowVivid300  `}
                      />
                    </motion.div>

                    <motion.div
                      className={`${lumenBackgroundColor}  font-display text-center text-2xl mb-5`}
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
                      Outcome
                    </motion.div>
                    <motion.div className={`${lumenBackgroundColor}  mb-5`}>
                      A digital and a physical prototype make up a system that
                      creates awareness of electricity sustainability.
                    </motion.div>
                    <motion.div
                      className={`${lumenBackgroundColor}  text-xs font-extrabold`}
                    >
                      My main contributions
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
                      Planning and conducting a in-the-wild study, designing the
                      digital prototype, facilitating the design process
                    </motion.div>
                    <Link
                      className={`hidden ${lumenBackgroundColor} lg:block`}
                      to="/lumen"
                    >
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
                  className={`h-full lg:flex place-content-center py-10 lg:pr-16 ${lumenBackgroundColor} `}
                >
                  <motion.div
                    transition={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className={` opacity-0 items-start justify-center flex place-self-center   ${lumenBackgroundColor} `}
                  >
                    <Zoom
                      overlayBgColorEnd="#0c0c0c"
                      overlayBgColorStart="#0c0c0c"
                    >
                      <img
                        src={lumen_1}
                        width="300px"
                        className={`${lumenBackgroundColor} px-5 mx-auto h-full`}
                        alt=""
                      />
                    </Zoom>
                  </motion.div>
                  <Link className={`lg:hidden`} to="/lumen">
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
                className={`relative cursor-pointer h-72 lg:h-96 font-display ${lumenBackgroundColor} flex place-content-center items-center`}
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
                  className={`hidden lg:block absolute text-xl  ${lumenBackgroundColor} mx-5 ${textColorGrey050} text-center font-bold`}
                  style={{ bottom: "90px", margin: "0 auto" }}
                >
                  Sustainable use of electricity
                </motion.span>
                <motion.span
                  variants={textMotion}
                  className={`hidden lg:block absolute mx-10 ${lumenBackgroundColor} text-center ${textColorGrey050} font-medium text-sm`}
                  style={{ bottom: "50px", margin: "0 auto" }}
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

  const renderDynaway = () => {
    return (
      <AnimateSharedLayout>
        <motion.div
          ref={dynawayRef}
          className={`${openDynaway ? "lg:col-span-2" : "lg:col-span-1"} `}
        >
          {openDynaway ? (
            <motion.div
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              className={`${UIPlaygroundBackgroundColor}  font-body font-light col-span-2 place-items-center w-full place-content-between lg:flex`}
              layoutId="expandable-card"
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key="uipOpen"
                  transition={{ delay: 0.4, opacity: 1, duration: 0.2 }}
                  animate={{ opacity: 1 }}
                  className={`opacity-0 lg:w-2/3 mx-6 lg:mx-0 h-full max-h-full flex my-auto ${UIPlaygroundBackgroundColor} ${textColorGrey900}`}
                >
                  <motion.div
                    className={`pt-6  h-full content-center ${touchlessBackgroundColor} ${textColorGrey900} lg:pl-20 lg:py-10 `}
                  >
                    <motion.div
                      className={`mb-8 lg:mb-12 ${UIPlaygroundBackgroundColor}`}
                    >
                      <FontAwesomeIcon
                        icon={faTimes}
                        size="1x"
                        className={`${UIPlaygroundBackgroundColor} cursor-pointer`}
                        onClick={() => setOpenDynaway(false)}
                      />
                    </motion.div>
                    <motion.div className={`${UIPlaygroundBackgroundColor}`}>
                      <motion.div
                        className={`text-center mx-auto mb-12  ${UIPlaygroundBackgroundColor}`}
                      >
                        <img
                          src={dynawayLogo}
                          className={`${UIPlaygroundBackgroundColor} mx-auto w-48`}
                          alt=""
                        />
                      </motion.div>
                      <motion.div
                        className={`${UIPlaygroundBackgroundColor} font-body mb-4`}
                      >
                        As part of the Dynaway team I was one of two student UX
                        designers.
                      </motion.div>
                      <motion.div
                        className={`${UIPlaygroundBackgroundColor} font-body mb-4`}
                      >
                        At Dynaway my responsibilities included ideating new
                        features, assisting the product manager, sketching,
                        wireframing, prototyping in Figma, collaborating with
                        the developers and more.
                      </motion.div>
                      <motion.div
                        className={`${UIPlaygroundBackgroundColor} font-body mb-4`}
                      >
                        During my time at Dynaway I made many contributions such
                        as improving existing products and ideating and
                        prototyping entirely new products.
                      </motion.div>
                      <motion.div
                        className={`${UIPlaygroundBackgroundColor} font-body mb-4 lg:mb-20`}
                      >
                        If you would like to know more about my role at Dynaway,
                        please reach out.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={`h-full flex place-content-center pb-4 lg:py-10 lg:pr-12 ${UIPlaygroundBackgroundColor} `}
                >
                  <motion.div
                    transition={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className={` opacity-0 ${UIPlaygroundBackgroundColor} `}
                  >
                    <Zoom
                      overlayBgColorEnd="#0c0c0c"
                      overlayBgColorStart="#0c0c0c"
                      className="mx-auto"
                    >
                      <img
                        src={dynawayMobile}
                        width="270px"
                        className={`${UIPlaygroundBackgroundColor} h-full`}
                        alt=""
                      />
                    </Zoom>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              onClick={() => {
                setOpenDynaway(true);
              }}
            >
              <motion.div
                variants={boxMotion}
                initial="rest"
                key="uipClosed"
                whileHover="hover"
                onClick={() => scrollToTargetAdjusted(dynawayRef)}
                animate="rest"
                layoutId="expandable-card"
                className={`${UIPlaygroundBackgroundColor} relative cursor-pointer font-display h-72 lg:h-96 flex place-content-center items-center`}
              >
                <motion.span variants={iconMotion}>
                  {" "}
                  <img
                    src={dynawayLogo}
                    className={`${UIPlaygroundBackgroundColor} w-48`}
                    alt=""
                  />
                </motion.span>
                <motion.span
                  variants={textMotion}
                  className={`hidden lg:block absolute text-xl  mx-5 text-center font-semibold ${textColorGrey050} ${UIPlaygroundBackgroundColor} `}
                  style={{ bottom: "90px", margin: "0 auto" }}
                >
                  Work experience
                </motion.span>
                <motion.span
                  variants={textMotion}
                  className={`hidden lg:block absolute mx-10 ${UIPlaygroundBackgroundColor} text-center ${textColorGrey050} font-medium text-sm `}
                  style={{ bottom: "55px", margin: "0 auto" }}
                >
                  Student UX designer
                </motion.span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </AnimateSharedLayout>
    );
  };

  const renderFixD = () => {
    return (
      <AnimateSharedLayout>
        <motion.div
          ref={fixdRef}
          className={` ${openFixD ? "lg:col-span-2" : "lg:col-span-1"}`}
        >
          {openFixD ? (
            <motion.div
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              className={`${lumenBackgroundColor}  font-body font-light col-span-2 place-items-center w-full place-content-between lg:flex`}
              layoutId="expandable-card"
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key="lumenOpen"
                  transition={{ delay: 0.4, opacity: 1, duration: 0.2 }}
                  animate={{ opacity: 1 }}
                  className={`opacity-0 mx-6 lg:w-2/3 h-full max-h-full flex my-auto ${touchlessBackgroundColor} ${textColorGrey900}`}
                >
                  <motion.div
                    className={`pt-6  h-full content-center ${touchlessBackgroundColor} ${textColorGrey900} lg:pl-16 lg:py-10 `}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      size="1x"
                      className={`${lumenBackgroundColor} cursor-pointer`}
                      onClick={() => setOpenFixD(false)}
                    />
                    <motion.div
                      className={`text-center mx-auto mt-4 mb-4  ${UIPlaygroundBackgroundColor}`}
                    >
                      <Zoom
                        overlayBgColorEnd="#0c0c0c"
                        overlayBgColorStart="#0c0c0c"
                      >
                        <img
                          src={fixdLogo}
                          className={`${UIPlaygroundBackgroundColor} mx-auto w-32`}
                          alt=""
                        />
                      </Zoom>
                    </motion.div>

                    <motion.div
                      className={`${lumenBackgroundColor} font-body mb-4 `}
                    >
                      I am a co-founder and previous chairman of FixD.
                    </motion.div>
                    <motion.div
                      className={`${lumenBackgroundColor} font-body mb-4 `}
                    >
                      Interaction Design is a fairly new education at AAU. To
                      create a strong physical and mental student environment
                      FixD works with creating both professional and social
                      events for IxD students. Many different types of events
                      have been held such as programming clubs, parties, job
                      events, IxD after Dark inspirational events, hackathons
                      and more.
                    </motion.div>
                    <motion.div
                      className={`${lumenBackgroundColor} font-body mb-4`}
                    >
                      Being a part of creating the association and hold events
                      has given me plenty of experience in planning,
                      coordinating and executing gatherings of many sizes.
                    </motion.div>
                    <motion.div
                      className={`${lumenBackgroundColor} lg:mb-10  font-body`}
                    >
                      Personally, FixD has been a place for me to meet a lot of
                      great people and enjoy great times.
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className={`h-full flex place-content-center py-10 lg:pr-16 ${lumenBackgroundColor} `}
                >
                  <motion.div
                    transition={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className={` opacity-0 items-start px-5 place-self-center lg:mt-12   ${lumenBackgroundColor} `}
                  >
                    <Zoom
                      overlayBgColorEnd="#0c0c0c"
                      overlayBgColorStart="#0c0c0c"
                    >
                      <img
                        src={ixdexpo}
                        width="550px"
                        className={`${lumenBackgroundColor} rounded-lg mx-auto h-full`}
                        alt=""
                      />
                    </Zoom>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div onClick={() => setOpenFixD(true)}>
              <motion.div
                variants={boxMotion}
                initial="rest"
                key="lumenClosed"
                whileHover="hover"
                onClick={() => scrollToTargetAdjusted(fixdRef)}
                animate="rest"
                layoutId="expandable-card"
                className={`relative cursor-pointer h-72 lg:h-96 font-display ${lumenBackgroundColor} flex place-content-center items-center`}
              >
                {/* <span
                  ref={lumenRef}
                  id="lumen"
                  className="absolute w-full min-h-full"
                ></span> */}
                <motion.span
                  variants={iconMotion}
                  className={`${UIPlaygroundBackgroundColor} `}
                  // initial="rest"
                  // whileHover="rest"
                  // animate="rest"
                >
                  <Zoom
                    overlayBgColorEnd="#0c0c0c"
                    overlayBgColorStart="#0c0c0c"
                  >
                    <img
                      src={fixdLogo}
                      className={`${UIPlaygroundBackgroundColor}  mx-auto w-48`}
                      alt=""
                    />
                  </Zoom>
                </motion.span>

                <motion.span
                  variants={textMotion}
                  className={`hidden lg:block absolute  mx-10 ${lumenBackgroundColor} text-center ${textColorGrey050} font-medium text-sm`}
                  style={{ bottom: "80px", margin: "0 auto" }}
                >
                  Association for Interaction Design students at AAU
                </motion.span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </AnimateSharedLayout>
    );
  };

  return (
    <div className="mb-20">
      <div className="grid-cols-1 grid gap-8 lg:grid-cols-2 lg:gap-4">
        {renderTouchlessInteractions()}
        {renderUIPlayground()}
        {renderLumen()}
        {renderDynaway()}
        {renderFixD()}
        {/* {renderGarden()} */}
      </div>
    </div>
  );
};

export default ProjectCards;
