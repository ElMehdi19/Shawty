import React, { useEffect } from "react";
import Checker from "../responses/check/Checker";
import Main from "../../sass/Wrapper";

const Check: React.FC = () => {
  useEffect(() => {
    document.title = "TrancateIt! - Track URL";
  });
  return (
    <Main>
      <h2 style={{ textAlign: "center" }}>
        Get real-time information about a URL
      </h2>
      <Checker />
    </Main>
  );
};

export default Check;
