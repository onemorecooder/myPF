import React from "react";
import { motion } from "framer-motion";
import "../styles/main.css";

const MainPage = ({ mostrarAboutMeHandler }) => {
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
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center h-full pt-16">
        <h1 className="mainText w-fit">
          {` Alejandro Torres, <b>`}
          <b className="text-white">FrontEnd</b>
          {`</b> Developer.`}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center mt-auto p-10">
        <motion.button
          initial="initial"
          whileHover="hover"
          variants={glowVariants}
          href="a"
          onClick={handleButtonClick}
          className=" text-myColor px-20 py-4  border-double border-4 border-myColor"
        >
          My work
        </motion.button>
      </div>
    </div>
  );
};

export default MainPage;
