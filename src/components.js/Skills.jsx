import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3  px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light dark:shadow-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-8xl mt-64 w-full text-center dark:text-light">Skills</h2>

      {/* web section */}
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:text-dark dark:bg-light dark:shadow-light"
          whileHover={{ scale: 1.05 }}
        >
          Motion
        </motion.div>
        <Skill name="Html" x="-20vw" y="2vw" />

        <Skill name="Css" x="-5vw" y="-10vw" />

        <Skill name="Javascript" x="20vw" y="6vw" />

        <Skill name="ReactJs" x="0vw" y="12vw" />

        <Skill name="NextJs" x="-20vw" y="-15vw" />

        <Skill name="GatsbyJs" x="15vw" y="-12vw" />

        <Skill name="Web Design" x="32vw" y="-5vw" />

        <Skill name="Figma" x="0vw" y="-20vw" />

        <Skill name="Firebase" x="-25vw" y="18vw" />

        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
      </div>
    </div>
  );
};

export default Skills;
