import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Contact from "../Page/Contact";
import AboutMe from "../Page/AboutMe";
import Experience_dable from "../Page/Experience_dable";
import { AnimatePresence } from "framer-motion";

const RouteControl = ({ Props }) => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home Props={Props} />} />
            <Route path="/Contact" element={<Contact Props={Props} />} />
            <Route path="/AboutMe" element={<AboutMe Props={Props} />} />
            <Route
              path="/education_dable"
              element={<Experience_dable Props={Props} />}
            />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
};

export default RouteControl;
