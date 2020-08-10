import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Alert, { Anchor, Title } from "../../../sass/Alert";
import { ThemeContext } from "../../../store/themeContext";

type Props = {
  original_url: string;
  short_url: string;
};

const Success: React.FC<Props> = ({ short_url, original_url }) => {
  const [display, setDisplay] = useState(false);
  const { themeState } = useContext(ThemeContext);

  return (
    <div>
      <Alert type="success" show={!themeState.menuToggle}>
        <FontAwesomeIcon
          icon={display ? faEyeSlash : faEye}
          title={display ? "Hide original URL" : "Show original URL"}
          onClick={() => setDisplay(!display)}
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
          }}
        />
        <div>
          <Title type="success">Shortened URL:</Title>
          <Anchor href={short_url} target="_blank" rel="noopener noreferrer">
            {short_url}
          </Anchor>
        </div>
        {display && (
          <div style={{ marginTop: "30px" }}>
            <Title type="success">Original URL:</Title>
            <Anchor
              href={original_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {original_url}
            </Anchor>
          </div>
        )}
      </Alert>
    </div>
  );
};

export default Success;
