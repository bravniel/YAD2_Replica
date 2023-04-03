import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainNavBar from "./mainNavBar/MainNavBar";
import SubNavBar from "./subNavBar/SubNavBar";

export default function Header() {
  const location = useLocation();
  const [
    isScreenWidthLessThan880px,
    setIsScreenWidthLessThan880px,
  ] = useState(null);
const [isScreenWidthLessThan1260px, setIsScreenWidthLessThan1260px] =
  useState(null);
  const handleResize = () => {
    window.innerWidth < 1260
      ? setIsScreenWidthLessThan1260px(true)
      : setIsScreenWidthLessThan1260px(false);
    window.innerWidth < 880
      ? setIsScreenWidthLessThan880px(true)
      : setIsScreenWidthLessThan880px(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <MainNavBar />
      {location.pathname.includes('/realestate') &&
        !isScreenWidthLessThan880px && (
          <SubNavBar
            isScreenWidthLessThan1260px={isScreenWidthLessThan1260px}
          />
        )}
    </>
  );
}
