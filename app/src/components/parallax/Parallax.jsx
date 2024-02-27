import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "500%"]
  );

  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div
      className="parallax"
      ref={ref}
    >
      <motion.h1
        style={{ y: yText }}
      >
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div
        className="mountains"
      >
        <img src="/mountains.png" alt="" />
      </motion.div>
      <motion.div
        className="planets"
        style={{ y: yBg }}
      >
        {type === "services" ? (
          <img src="/planets.png" alt="" />
        ) : (
          <img src="/sun.png" alt="" />
        )}
      </motion.div>
      <motion.div
        className="stars"
        style={{ x: yBg }}
      >
        <img src="/stars.png" alt="" />
      </motion.div>
    </div>
  )
}

export default Parallax