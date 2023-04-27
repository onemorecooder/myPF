import React from "react";

import { FaCss3Alt, FaJs, FaHtml5, FaReact } from "react-icons/fa";

const Grid = () => {
  return (
    <div className="px-40 py-20">
      <div class="grid grid-cols-4 gap-4 text-center">
        <motion.div whileHover={{ scale: 2, color: "blue" }}>
          <FaCss3Alt className="m-auto w-20 h-20 cursor-pointer" />
        </motion.div>
        <motion.div whileHover={{ scale: 2, color: "orange" }}>
          <FaHtml5 className="m-auto w-20 h-20 cursor-pointer" />
        </motion.div>
        <motion.div whileHover={{ scale: 2, color: "yellow" }}>
          <FaJs className="m-auto w-20 h-20 cursor-pointer" />
        </motion.div>
        <motion.div whileHover={{ scale: 2, color: "lightblue" }}>
          <FaReact className="m-auto w-20 h-20 cursor-pointer" />
        </motion.div>
      </div>
    </div>
  );
};

export default Grid;
