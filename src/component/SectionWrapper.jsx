import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 20,
      mass: 0.5,
      duration: 1,
    },
  },
};

const SectionWrapper = ({ children }) => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="my-16 px-4 md:px-20"
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
