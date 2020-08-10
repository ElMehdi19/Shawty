import React from "react";
import StyledFooter from "../../sass/Footer";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>
        Made with{" "}
        <span role="img" aria-label="heart-emoji">
          💝
        </span>{" "}
        by{" "}
        <a
          href="https://github.com/ElMehdi19"
          style={{ color: "crimson" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mehdi
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
