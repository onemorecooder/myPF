import "./App.css";
import AboutMe from "./components/AboutMe";
import MainPage from "./components/MainPage";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

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
  };

  const handlePageChange = (componentName) => {
    switch (componentName) {
      case "MainPage":
        setMostrarMainPage(true);
        setMostrarAboutMe(false);
        setMostrarExperience(false);
        setMostrarContact(false);
        break;
      case "AboutMe":
        setMostrarMainPage(false);
        setMostrarAboutMe(true);
        setMostrarExperience(false);
        setMostrarContact(false);
        break;
      case "Experience":
        setMostrarMainPage(false);
        setMostrarAboutMe(false);
        setMostrarExperience(true);
        setMostrarContact(false);
        break;
      case "Contact":
        setMostrarMainPage(false);
        setMostrarAboutMe(false);
        setMostrarExperience(false);
        setMostrarContact(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-3 text-myColor h-screen">
      <div className="w-20 ml-4 fixed">
        <Navigation handlePageChange={handlePageChange} />
      </div>

      <div className="w-screen">
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

      <div className="bg w-screen h-screen"></div>
    </div>
  );
}

export default App;
