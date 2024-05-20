import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Secret from "../Page/Secret";
import AboutMe from "../Page/AboutMe";
import Experience_dable from "../Page/Experience_dable";
import { AnimatePresence } from "framer-motion";
import Test from "../Page/Test";

const RouteControl = ({ Props }) => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home Props={Props} />} />
            <Route path="/Secret" element={<Secret Props={Props} />} />
            <Route path="/AboutMe" element={<AboutMe Props={Props} />} />
            <Route path="/Test" element={<Test Props={Props} />} />
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
