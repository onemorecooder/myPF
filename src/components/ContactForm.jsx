import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const glowVariants = {
    hover: {
      opacity: 0.8,
      boxShadow: "0px 0px 10px 2px rgba(255, 255, 255, 0.5)",
    },
    initial: {
      scale: 1.05,
      opacity: 1,
    },
    focus: {
      boxShadow: "0px 0px 20px #ffffff",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="grid grid-cols-2 text-myColor h-screen px-40">
      <div className="p-10">
        <h1 className="text-5xl mb-6">Want to connect?</h1>
        <p className="text-justify max-w-lg mb-10">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum
        </p>
      </div>
      <div className="p-10 flex flex-col items-center">
        <motion.input
          autocomplete="off"
          whileFocus="focus"
          variants={glowVariants}
          type="text"
          placeholder="name"
          className="text-myColor mb-4 px-40 py-4 bg-black border-4 border-myColor text-center capitalize w-24rem"
        ></motion.input>
        <motion.input
          autocomplete="off"
          whileFocus="focus"
          variants={glowVariants}
          type="text"
          placeholder="email"
          className="text-myColor mb-4 px-40 py-4 bg-black border-4 border-myColor text-center w-24rem"
        ></motion.input>

        <motion.textarea
          autocomplete="off"
          whileFocus="focus"
          variants={glowVariants}
          type="text"
          placeholder="your message here..."
          className="text-myColor mb-6 px-40 py-4 bg-black border-4 border-myColor resize-none text-center capitalize w-16rem"
        ></motion.textarea>

        <div className="w-fit">
          <motion.button
            initial="initial"
            whileHover="hover"
            variants={glowVariants}
            href="a"
            className="text-myColor px-20 py-4 border-double border-4 border-myColor"
          >
            Send me a message
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
