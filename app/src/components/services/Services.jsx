import { useRef } from "react";
import "./services.scss";
// import { motion, useInView } from "framer-motion";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -300,
    y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
}

const Services = () => {

  const ref = useRef();
  // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
      ref={ref}
    // animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>We focus on helping your branch to grow <br />and move forward</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.png" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>Build a strong and memorable brand identity that resonates with your target audience. Our branding services encompass logo design, brand strategy, and visual identity development.</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Web Design</h2>
          <p>Create a stunning online presence with our custom web design services. We blend aesthetics with functionality to ensure your website not only looks impressive but also delivers a seamless user experience.</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Content Creation</h2>
          <p>Tell your story through compelling content. From engaging copywriting to captivating visuals, we create content that captures the essence of your brand and connects with your audience.</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Digital Marketing</h2>
          <p>Maximize your online reach with our digital marketing strategies. From social media campaigns to search engine optimization, we leverage the latest tools and techniques to boost your brand&#39;s visibility.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services