import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";

import { FaArrowDown } from "react-icons/fa";

const AboutMe = ({ mostrarAboutMeHandler }) => {
  const handleButtonClick = () => {
    mostrarAboutMeHandler();
  };

  const glowVariants = {
    hover: {
      opacity: 0.8,
      boxShadow: "0px 0px 10px 2px rgba(255, 255, 255, 0.5)",
    },
    initial: {
      scale: 1.05,
      opacity: 1,
    },
  };

  return (
    <div className="h-screen text-myColor">
      <div className="py-20">
        <h1 className="text-white aboutText max-w-fit text-center m-auto">
          About me.
        </h1>
      </div>

      <div className="w-screen px-40 ">
        <p className="font-bold">Hola me gustan los trenes:</p>
        <ul className="p-4">
          <li>- asdasdasd</li>
          <li>- asdasdasd</li>
          <li>- asdasdasd</li>
          <li>- asdasdasd</li>
          <li>- asdasdasd</li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center mt-auto p-10">
        <motion.button
          initial="initial"
          whileHover="hover"
          variants={glowVariants}
          href="a"
          onClick={handleButtonClick}
          className=" text-myColor px-4 py-4 rounded-full  border-double border-4 border-myColor"
        >
          <FaArrowDown />
        </motion.button>
      </div>
    </div>
  );
};

export default AboutMe;
