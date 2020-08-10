import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrop } from "@fortawesome/free-solid-svg-icons";
import Nav from "../../sass/Nav";
import { MenuButton, Icon } from "../../sass/Menu";
import Menu from "./Menu";
import { ThemeContext } from "../../store/themeContext";

const Header: React.FC = () => {
  const { themeState, dispatch } = useContext(ThemeContext);
  return (
    <header>
      <Nav>
        <FontAwesomeIcon icon={faCrop} style={{ marginRight: "5px" }} />
        <Link
          to="/"
          style={{ color: "#000", fontFamily: '"Handlee", cursive' }}
        >
          TRUNCATE
        </Link>
        <MenuButton
          onClick={() => dispatch({ type: "MENU" })}
          toggle={themeState.menuToggle}
        >
          <Icon toggle={themeState.menuToggle} />
        </MenuButton>
        <Menu toggle={themeState.menuToggle} />
      </Nav>
      <div className="title"></div>
    </header>
  );
};

export default Header;
