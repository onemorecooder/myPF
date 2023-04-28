import "./App.css";
import AboutMe from "./components/AboutMe";
import MainPage from "./components/MainPage";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [mostrarMainPage, setMostrarMainPage] = useState(true);
  const [mostrarAboutMe, setMostrarAboutMe] = useState(false);
  const [mostrarExperience, setMostrarExperience] = useState(false);
  const [mostrarContact, setMostrarContact] = useState(false);

  const mostrarAboutMeHandler = () => {
    setMostrarAboutMe(true);
    setMostrarMainPage(false);
  };

  const mostrarExperienceHandler = () => {
    setMostrarAboutMe(false);
    setMostrarExperience(true);
    setMostrarMainPage(false);
  };

  const mostrarContactHandler = () => {
    setMostrarAboutMe(false);
    setMostrarExperience(false);
    setMostrarMainPage(false);
    setMostrarContact(true);
  }

  return (
    <div className="relative">
      <div className="bg w-screen h-screen"></div>
      <AnimatePresence>
        {mostrarMainPage && (
          <motion.div
            key="MainPage"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{
              opacity: 0,
              y: -50,
              transition: { ease: "easeOut", duration: 0.3 },
            }}
          >
            <MainPage mostrarAboutMeHandler={mostrarAboutMeHandler} />
          </motion.div>
        )}
        {mostrarAboutMe && (
          <motion.div
            key="AboutMe"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{
              opacity: 0,
              y: -50,
              transition: { ease: "easeOut", duration: 0.3 },
            }}
          >
            <AboutMe mostrarExperienceHandler={mostrarExperienceHandler} />
          </motion.div>
        )}

        {mostrarExperience && (
          <motion.div
            key="Experience"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{
              opacity: 0,
              y: -50,
              transition: { ease: "easeOut", duration: 0.3 },
            }}
          >
            <Experience mostrarContactHandler={mostrarContactHandler} />
          </motion.div>
        )}

        {mostrarContact && (
          <motion.div
            key="Contact"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{
              opacity: 0,
              y: -50,
              transition: { ease: "easeOut", duration: 0.3 },
            }}
          >
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
