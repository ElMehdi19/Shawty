import React, { useEffect } from "react";
import Shortener from "../responses/shorten/Shortener";
import Main from "../../sass/Wrapper";

const Shorten: React.FC = () => {
  useEffect(() => {
    document.title = "TrancateIt! - Shorten URL";
  });
  return (
    <Main>
      <h2 style={{ textAlign: "center" }}>Add a URL to shorten</h2>
      <Shortener />
    </Main>
  );
};

export default Shorten;
