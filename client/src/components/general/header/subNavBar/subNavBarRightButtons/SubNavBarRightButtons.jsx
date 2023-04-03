import React from "react";
import IconedNavLink from "../../iconedNavLink/IcondNavLink";
export default function SubNavBarRightButtons() {
  return (
    <div className="side-wrapper">
      <IconedNavLink to={"realestate/forsell"} text={"מכירה"} />
      <IconedNavLink to={"realestate/rent"} text={"השכרה"} />
      <IconedNavLink to={"realestate/roommates"} text={"דירות שותפים"} />
      <IconedNavLink to={"realestate/commercial"} text={'נדל"ן מסחרי'} />
    </div>
  );
}
