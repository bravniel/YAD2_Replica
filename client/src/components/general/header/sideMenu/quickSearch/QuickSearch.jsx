import React from "react";
import { Link } from "react-router-dom";
import { pageContent } from "../../../../../utils/utils";
import IconedNavLink from "../../iconedNavLink/IcondNavLink";

export default function QuickSearch({ handleBurgerButtonClick }) {
  return (
    <div className="quick-search">
      <div className="title">חיפוש מהיר באתר</div>
      {pageContent.map((item, index) => {
        return (
          item.category != "professionals" &&
          (item.category != "more" ? (
            <IconedNavLink
              key={index}
              to={item.path}
              text={item.title}
              icon={item.sideIcon}
              onClick={handleBurgerButtonClick}
            />
          ) : (
            item.rightItems.map((item, index) => {
              return (
                item.sideIcon && (
                  <IconedNavLink
                    key={index}
                    to={item.path}
                    text={item.title}
                    icon={item.sideIcon}
                    onClick={handleBurgerButtonClick}
                  />
                )
              );
            })
          ))
        );
      })}
    </div>
  );
}