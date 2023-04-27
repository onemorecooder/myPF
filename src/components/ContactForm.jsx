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
    <div class="flex flex-col items-center text-myColor">
      <h1 class="text-5xl mb-6">Want to connect?</h1>
      <p class="text-justify max-w-lg mb-10">
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      </p>
      <div class="flex flex-col items-center">
        <motion.input
          whileFocus="focus"
          variants={glowVariants}
          type="text"
          placeholder="name"
          class="text-myColor mb-4 px-40 py-4 bg-black border-4 border-myColor text-center capitalize"
        ></motion.input>
        <motion.input
          whileFocus="focus"
          variants={glowVariants}
          type="text"
          placeholder="email"
          class="text-myColor mb-4 px-40 py-4 bg-black border-4 border-myColor text-center"
        ></motion.input>

        <motion.textarea
          whileFocus="focus"
          variants={glowVariants}
          type="text"
          placeholder="your message here..."
          class="text-myColor mb-6 px-40 py-4 bg-black border-4 border-myColor resize-none text-center capitalize"
        ></motion.textarea>

        <div class="w-fit">
          <motion.button
            initial="initial"
            whileHover="hover"
            variants={glowVariants}
            href="a"
            class="text-myColor px-20 py-4 border-double border-4 border-myColor"
          >
            Send me a message
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
