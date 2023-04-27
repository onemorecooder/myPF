import React from "react";
import "../styles/about.css";
import Grid from "./Grid";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="h-screen text-myColor">
      <div className="py-20">
        <h1 className="text-white aboutText max-w-fit text-center m-auto">
          Contact.
        </h1>
        <Grid />
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
