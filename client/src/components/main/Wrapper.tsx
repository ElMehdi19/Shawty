import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faMapMarked,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import Graphical_1 from "../../img/graphic_1.jpg";
import Graphical_2 from "../../img/graphic_2.jpg";
import Main, {
  Img,
  Graphics,
  Description,
  Features,
  Feature,
  StyledLink,
} from "../../sass/Wrapper";

const Wrapper: React.FC = () => {
  useEffect(() => {
    document.title = "TrancateIt! - URL Shortener with tracking";
  });
  return (
    <Main>
      <Graphics>
        <Description style={{ color: "rgb(9, 166, 166)" }}>
          Shorten your URLs, and bring them to life
        </Description>
        <Img src={Graphical_1} alt="graphical_1" />
      </Graphics>
      <Graphics>
        <Img src={Graphical_2} alt="graphical_2" />
        <Description style={{ alignItems: "center", color: "crimson" }}>
          Make your URLs meaningful, and more concise
        </Description>
      </Graphics>
      <h1 style={{ textAlign: "center" }}>Features</h1>
      <Features>
        <Feature>
          <FontAwesomeIcon icon={faLink} size="3x" />
          <h3 style={{ textAlign: "center" }}>Shorten your URLs</h3>
        </Feature>
        <Feature>
          <FontAwesomeIcon icon={faMapMarked} size="3x" />
          <h3 style={{ textAlign: "center" }}>Track your link visitors</h3>
        </Feature>
        <Feature>
          <FontAwesomeIcon icon={faChartLine} size="3x" />
          <h3 style={{ textAlign: "center" }}>Traffic anlysis</h3>
        </Feature>
      </Features>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <StyledLink to="/shorten">Try It</StyledLink>
      </div>
    </Main>
  );
};

export default Wrapper;
