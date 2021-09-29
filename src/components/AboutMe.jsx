import React from "react";
import Fade from "react-reveal/Fade";
import data from "./yourdata";
import Card from "@mui/material/Card";
import "./aboutme.css";
const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1 className="container text-center">About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          {/* <div>
            <img src={data.aboutImage} alt="about"></img>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
