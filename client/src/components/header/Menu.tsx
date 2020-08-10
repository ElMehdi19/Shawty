import React from "react";
import { DropDown, MenuItem, MenuList } from "../../sass/Menu";

const Menu: React.FC<{ toggle: boolean }> = ({ toggle }) => {
  const menuItems = ["Shorten URL", "Track URL", "Report"];
  const renderItems = menuItems.map((item) => {
    const route = item.split(" ")[0].toLowerCase();
    return (
      <MenuItem key={item}>
        <a href={`/${route}`}>{item}</a>
      </MenuItem>
    );
  });
  return (
    <>
      {toggle ? (
        <DropDown>{renderItems}</DropDown>
      ) : (
        <MenuList>{renderItems}</MenuList>
      )}
    </>
  );
};

export default Menu;
