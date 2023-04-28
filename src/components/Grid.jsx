import React from "react";
import { motion } from "framer-motion";

import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitterSquare,
} from "react-icons/fa";

const Grid = () => {
  return (
    <div className="px-40 py-10">
      <div className="flex m-auto w-fit">
        <motion.div whileHover={{ scale: 1.1, color: "lightgray" }}>
          <FaLinkedin className="m-auto w-12 h-12 cursor-pointer mx-2" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1, color: "lightgray" }}>
          <FaInstagram className="m-auto w-12 h-12 cursor-pointer mx-2" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1, color: "lightgray" }}>
          <FaGithub className="m-auto w-12 h-12 cursor-pointer mx-2" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1, color: "lightgray" }}>
          <FaTwitterSquare className="m-auto w-12 h-12 cursor-pointer mx-2" />
        </motion.div>
      </div>
    </div>
  );
};

export default Grid;
