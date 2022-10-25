import React from "react";
import { Chip } from "@mui/material";
import "../../Style/common.css";

const Introduce_chip = () => {
  const Chipclick = (value) => {
    window.open(`https://www.google.com/search?q=${value}`);
  };

  return (
    <div className="AboutMe_body">
      <h2 className="testzz">knowledges</h2>
      <br />
      <Chip label="c" color="primary" onClick={() => Chipclick("C")}></Chip>
      &nbsp;&nbsp;
      <Chip
        label="java"
        color="primary"
        onClick={() => Chipclick("java")}
      ></Chip>
      &nbsp;&nbsp;
      <Chip
        label="html5"
        color="primary"
        onClick={() => Chipclick("html5")}
      ></Chip>
      &nbsp;&nbsp;
      <Chip
        label="css3"
        color="primary"
        onClick={() => Chipclick("css3")}
      ></Chip>
      &nbsp;&nbsp;
      <Chip
        label="javascript"
        color="primary"
        onClick={() => Chipclick("javascript")}
      ></Chip>
      &nbsp;&nbsp;
      <br />
      <br />
      <Chip
        label="react"
        color="primary"
        onClick={() => Chipclick("react")}
      ></Chip>
      &nbsp;&nbsp;
      <Chip
        label="github"
        color="primary"
        onClick={() => Chipclick("github")}
      ></Chip>
      &nbsp;&nbsp;
      <Chip
        label="mySQL"
        color="primary"
        onClick={() => Chipclick("mySQL")}
      ></Chip>
      &nbsp;&nbsp;
      <Chip
        label="ionic"
        color="primary"
        onClick={() => Chipclick("ionic")}
      ></Chip>
      &nbsp;&nbsp;
      <Chip
        label="Linux"
        color="primary"
        onClick={() => Chipclick("Linux")}
      ></Chip>
      &nbsp;&nbsp;
      <br />
      <br />
      <Chip
        label="VScode"
        color="primary"
        onClick={() => Chipclick("VScode")}
      ></Chip>
      &nbsp;&nbsp;
      <Chip label="API" color="primary" onClick={() => Chipclick("API")}></Chip>
      &nbsp;&nbsp;
      <Chip
        label="react-native"
        color="primary"
        onClick={() => Chipclick("react-native")}
      ></Chip>
      &nbsp;&nbsp;
      <Chip
        label="DataBase"
        color="primary"
        onClick={() => Chipclick("DataBase")}
      ></Chip>
      &nbsp;&nbsp;
      <br />
      <br />
      <Chip
        label="DataManing"
        color="primary"
        onClick={() => Chipclick("DataManing")}
      ></Chip>
      &nbsp;&nbsp;
      <Chip label="npm" color="primary" onClick={() => Chipclick("npm")}></Chip>
      &nbsp;&nbsp;
      <Chip
        label="typescript"
        color="primary"
        onClick={() => Chipclick("typescript")}
      ></Chip>
      &nbsp;&nbsp;
      {/* <Chip label='ionic' color="primary" ></Chip> */}
      {/* onclick 적용시 margin이 적용 안되는듯 함 따로 알아볼 필요 있음 */}
    </div>
  );
};

export default Introduce_chip;
