import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import IconedNavLink from "../../../iconedNavLink/IcondNavLink";
import DropdownMenu from "../../../dropdownMenu/DropdownMenu";

export default function CategoryNavigationItem({ item, handleBurgerButtonClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-navigation-item">
      <button onClick={handleDropdownClick}>
        {item.title}
        {!isOpen ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
      </button>
      {isOpen && (
        <DropdownMenu
          item={item}
          dropdown={isOpen}
          handleClick={handleBurgerButtonClick}
        />
      )}
    </div>
  );
}
