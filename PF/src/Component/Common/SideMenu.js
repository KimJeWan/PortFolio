import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosHome, IoMdPerson, IoIosApps } from "react-icons/io";

const SideMenu = () => {
  const [homeHover, setHomeHover] = useState(false);
  const [aboutMeHover, setAboutMeHover] = useState(false);
  const [toyHover, setToyHover] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar_icon">
        <Link to="/">
          <IoIosHome
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
          />
        </Link>
        <span className={homeHover === true ? "teeee" : "none"}> Home </span>
      </div>
      <div className="navbar_icon">
        <Link to="/AboutMe">
          <IoMdPerson
            onMouseEnter={() => setAboutMeHover(true)}
            onMouseLeave={() => setAboutMeHover(false)}
          />
        </Link>
        <span className={aboutMeHover === true ? "teeee" : "none"}>
          About Me
        </span>
      </div>
      <div className="navbar_icon">
        <IoIosApps
          onClick={() => window.open("https://kimjewan.github.io/Test/")}
          className="pointer"
          onMouseEnter={() => setToyHover(true)}
          onMouseLeave={() => setToyHover(false)}
        />
        <span className={toyHover === true ? "teeee" : "none"}>
          Toy Project
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
