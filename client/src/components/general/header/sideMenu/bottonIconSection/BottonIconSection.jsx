import React from "react";
import IconedNavLink from "../../iconedNavLink/IcondNavLink";
import { BsKey, BsQuestion } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { ImAccessibility } from "react-icons/im";
import { CgSmartphone } from "react-icons/cg";

export default function BottonIconSection() {
  return (
    <div className="botton-icon">
      <IconedNavLink to={"chat"} text={"תקנון"}>
        <div className="icon-container">
          <BiPencil />
        </div>
      </IconedNavLink>
      <IconedNavLink to={"alert"} text={"פרטיות ותנאים"}>
        <div className="icon-container">
          <BsKey />
        </div>
      </IconedNavLink>
      <IconedNavLink to={"liked"} text={"נגישות"}>
        <div className="icon-container">
          <ImAccessibility />
        </div>
      </IconedNavLink>
      <IconedNavLink to={"last_search"} text={"מענה לשאלות"}>
        <div className="icon-container">
          <BsQuestion />
        </div>
      </IconedNavLink>
      <IconedNavLink to={"compare_vehicles"} text={"יצירת קשר"}>
        <div className="icon-container">
          <CgSmartphone />
        </div>
      </IconedNavLink>
    </div>
  );
}
