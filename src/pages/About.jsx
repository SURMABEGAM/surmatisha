import { motion } from "framer-motion";
import SectionWrapper from "../component/SectionWrapper";

const About = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <SectionWrapper>
      <motion.div variants={container} initial="hidden" whileInView="visible">
        <motion.h2 variants={item} className="text-3xl font-bold mb-4">
          About Me
        </motion.h2>
        <motion.p variants={item} className="text-gray-700 dark:text-gray-300">
          I'm a passionate web developer with experience in React, TailwindCSS,
          and creating smooth high-quality animations with Framer Motion.
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
