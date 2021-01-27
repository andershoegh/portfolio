import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollElement = ({ strokeColor }) => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  const [scrollProgress, setScrollProgress] = useState(false);
  const [scroll, setScroll] = useState("");

  console.log(scroll);

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);
  useEffect(() =>
    scrollYProgress.onChange((p) => setScrollProgress(p >= 0.1), [
      scrollYProgress,
    ])
  );

  useEffect(() => {
    return scrollYProgress.onChange((v) => setScroll(v * 100 + "%"));
  }, [scrollYProgress]);

  return (
    <>
      {scrollProgress && (
        <>
          <motion.div
            transition={{ type: "spring", duration: 1 }}
            animate={{ y: "40px" }}
            style={{ left: "7vw", top: "20vh" }}
            className={`fixed hidden lg:flex flex-col justify-center mx-auto`}
          >
            <div className="text-center mb-2">
              <a href="mailto:anders.hoegh.hansen@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  style={{ color: strokeColor }}
                />
              </a>
            </div>

            <div className="w-10 h-10 m-auto">
              <svg className="" viewBox="-1 0 50 60">
                <motion.path
                  fill="none"
                  strokeWidth="3"
                  stroke={strokeColor}
                  strokeDasharray="0 1"
                  d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                  style={{
                    pathLength: scrollYProgress,
                    rotate: 90,
                    translateX: 5,
                    translateY: 5,
                    scaleX: -1, // Reverse direction of line animation
                  }}
                />
                <motion.path
                  fill="none"
                  strokeWidth="3"
                  stroke={strokeColor}
                  d="M14,26 L 22,33 L 35,16"
                  initial={false}
                  strokeDasharray="0 1"
                  animate={{ pathLength: isComplete ? 1 : 0 }}
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            transition={{ type: "spring", duration: 1 }}
            animate={{ opacity: 1 }}
            className={`fixed opacity-0 top-0 bg-transparent h-1 lg:hidden w-screen z-50`}
          >
            <div
              className="h-full"
              style={{
                height: "100%",
                width: scroll,
                backgroundColor: strokeColor,
              }}
            ></div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default ScrollElement;
