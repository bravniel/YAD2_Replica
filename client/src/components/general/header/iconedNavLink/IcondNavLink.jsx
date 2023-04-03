import React from "react";
import { NavLink } from "react-router-dom";

export default function IconedNavLink({
  isDisplayText = true,
  to,
  src,
  text,
  children,
  icon,
  onClick
}) {
  return (
    <NavLink
      to={to || "no-page"}
      className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
      onClick={onClick}
    >
      {src && (
        <div className="nav-link-img">
          <img src={src} />
        </div>
      )}
      {icon && React.createElement(icon, { className: "nav-link-icon" })}
      {children}
      {isDisplayText && <div className="nav-link-text">{text}</div>}
    </NavLink>
  );
}
