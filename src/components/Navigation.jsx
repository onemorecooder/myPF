import React from "react";
import { motion } from "framer-motion";

const Navigation = (props) => {
  const handleClick = (componentName) => {
    console.log(componentName);
    props.handlePageChange(componentName);
  };

  return (
    <div className="absolute h-screen">
      <div className="opacity-50 absolute h-fit align-middle top-1/2 translate-y-[-50%]">
        <motion.div
          onClick={() => handleClick("MainPage")}
          whileHover={{
            scale: 1.2,
            backgroundColor: "white",
          }}
          whileTap={{ scale: 0.9 }}
          className="w-4 h-4 bg-myColor m-4 cursor-pointer"
        ></motion.div>
        <motion.div
          onClick={() => handleClick("AboutMe")}
          whileHover={{
            scale: 1.2,
            backgroundColor: "white",
          }}
          whileTap={{ scale: 0.9 }}
          className="w-4 h-4 bg-myColor m-4 cursor-pointer"
        ></motion.div>
        <motion.div
          onClick={() => handleClick("Experience")}
          whileHover={{
            scale: 1.2,
            backgroundColor: "white",
          }}
          whileTap={{ scale: 0.9 }}
          className="w-4 h-4 bg-myColor m-4 cursor-pointer"
        ></motion.div>
        <motion.div
          onClick={() => handleClick("Contact")}
          whileHover={{
            scale: 1.2,
            backgroundColor: "white",
          }}
          whileTap={{ scale: 0.9 }}
          className="w-4 h-4 bg-myColor m-4 cursor-pointer"
        ></motion.div>
      </div>
    </div>
  );
};

export default Navigation;
