import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Alert, { Message, Title } from "../../../sass/Alert";
import { ThemeContext } from "../../../store/themeContext";

type Props = {
  message: string;
};

const Failure: React.FC<Props> = ({ message }) => {
  const { themeState } = useContext(ThemeContext);
  return (
    <Alert type="error" show={!themeState.menuToggle}>
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        style={{ position: "absolute", right: "10px", top: "40%" }}
      />
      <Title type="error">Error:</Title>
      <Message>{message}</Message>
    </Alert>
  );
};

export default Failure;
