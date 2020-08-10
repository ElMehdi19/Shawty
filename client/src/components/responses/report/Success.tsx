import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Alert from "../../../sass/Alert";
import { ThemeContext } from "../../../store/themeContext";

const Success: React.FC = () => {
  const { themeState } = useContext(ThemeContext);
  return (
    <Alert type="success" show={!themeState.menuToggle}>
      <FontAwesomeIcon
        icon={faCheck}
        style={{
          position: "absolute",
          right: "10px",
        }}
      />
      <span>Thanks for reporting.</span>
    </Alert>
  );
};

export default Success;
