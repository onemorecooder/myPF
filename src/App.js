import "./App.css";
import AboutMe from "./components/AboutMe";
import MainPage from "./components/MainPage";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [mostrarAboutMe, setMostrarAboutMe] = useState(false);

  const mostrarAboutMeHandler = () => {
    setMostrarAboutMe(true);
  };

  return (
    <>
      <AnimatePresence>
        {!mostrarAboutMe && (
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
          >
            <AboutMe />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
