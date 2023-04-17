import React, { useState } from "react";
import IconedNavLink from "../iconedNavLink/IcondNavLink";

export default function DropdownMenu({ item, dropdown, handleClick }) {

  return (
    <div className={!dropdown ? "clicked" : "dropdown-content"}>
      <div>
        {item.rightItems &&
          item.rightItems.map((item, index) => {
            return (
              <IconedNavLink
                key={index}
                to={item.path}
                src={item.dropdownSrc}
                icon={item.dropdownIcon}
                text={item.title}
                onClick={handleClick}
              />
            );
          })}
      </div>
      <div>
        {item.leftItems &&
          item.leftItems.map((item, index) => {
            return (
              <IconedNavLink
                key={index}
                to={item.path}
                src={item.dropdownSrc}
                icon={item.dropdownIcon}
                text={item.title}
                onClick={handleClick}
              />
            );
          })}
      </div>
    </div>
  );
};
