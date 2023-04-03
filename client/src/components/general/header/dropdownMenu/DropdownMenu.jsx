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


// export default function DropdownMenu(props) {
//     const [dropdown, setDropdown] = useState(false);

//     return (<ul className="dropdown-content">
//         {props.dropdownItems.map((items, index) => (
//             <div key={index}>
//                 {items.map((item, index) => (
//                     <li key={index}>{item.name} {item.img && <img src={item.img} />}</li>
//                 ))}
//             </div>
//         ))
//     }
//     </ul>)
// };
