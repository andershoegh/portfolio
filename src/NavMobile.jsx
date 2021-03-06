import React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import { MenuToggle } from "./MenuToggle";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height - (100 % +300)}px at calc(100% - 50px) 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(30px at calc(100% - 50px) 50px`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const variantsMenuItem = {
  open: {
    y: 30,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 100 },
    },
  },
  closed: {
    y: -30,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavMobile = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const bg = "bg-coolGrey100";

  console.log(isOpen);
  return (
    <motion.nav
      className={`z-50 fixed w-full bg-transparent`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        variants={sidebar}
        className={`fixed top-0 left-0 bottom-0 w-screen  bg-coolGrey100 `}
      >
        {isOpen && (
          <>
            <motion.ul
              className={`${bg} w-full mt-48 list-disc text-center`}
              variants={variants}
            >
              <Link
                to="/"
                onClick={() => {
                  toggleOpen(false);
                }}
              >
                <motion.li
                  className={`${bg} text-4xl text-coolGrey800 p-6 focus:outline-none`}
                  variants={variantsMenuItem}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Projects
                </motion.li>
              </Link>
              <Link to="/about" onClick={() => toggleOpen(false)}>
                <motion.li
                  className={`${bg} text-4xl text-coolGrey800 p-6 focus:outline-none`}
                  variants={variantsMenuItem}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Who am I?
                </motion.li>
              </Link>
              <Link to="/resume" onClick={() => toggleOpen(false)}>
                <motion.li
                  className={`${bg} text-4xl text-coolGrey800 p-6 focus:outline-none`}
                  variants={variantsMenuItem}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </motion.li>
              </Link>
              <motion.li
                className={`${bg} text-4xl text-coolGrey800 mt-20`}
                variants={variantsMenuItem}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://www.linkedin.com/in/ahh-1/"
                  target="_blank"
                  className={`${bg}`}
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    size="1x"
                    className={`text-coolGrey800 ${bg}`}
                    icon={faLinkedin}
                  />
                </a>

                <a
                  href="mailto:anders.hoegh.hansen@gmail.com"
                  className={`${bg}`}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="1x"
                    className={`text-coolGrey800 ${bg} ml-10`}
                  />
                </a>
              </motion.li>
            </motion.ul>
          </>
        )}

        <MenuToggle className="z-50" toggle={() => toggleOpen()} />
      </motion.div>
    </motion.nav>
  );
};

export default NavMobile;
