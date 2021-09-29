import React from "react";
import Fade from "react-reveal/Fade";
import data from "./yourdata";
import Typography from "@material-ui/core/Typography";
import Typical from "react-typical";

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            {/* <Typical
              steps={["Hello", 1000, "I am Kriti Pare", 500]}
              loop={Infinity}
              wrapper="p"
            /> */}
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              align="center"
            >
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
              <Typical
                steps={["Web Developer", 1000, "Content Writer", 1000]}
                loop={Infinity}
                wrapper="p"
              />
            </Typography>
          </Fade>
          <Typography variant="h6" gutterBottom component="div" align="center">
            <Fade bottom cascade>
              <div className="heading-wrapper">
                <h1>
                  {data.headerTagline[0]
                    ? data.headerTagline[0]
                    : "Building digital"}
                </h1>
                <h1>
                  {" "}
                  {data.headerTagline[1]
                    ? data.headerTagline[1]
                    : "products, brands"}
                </h1>
                <h1>
                  {" "}
                  {data.headerTagline[2]
                    ? data.headerTagline[2]
                    : "and experience"}
                </h1>
              </div>
            </Fade>
          </Typography>
          <Typography variant="h6" gutterBottom component="div" align="center">
            <Fade bottom>
              <p>{data.headerParagraph}</p>
            </Fade>
          </Typography>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "hello@chetanverma.com"
              }`}
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Header;
