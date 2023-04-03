import React, { useEffect, useState } from "react";
import MainNavBarLeftButtons from "./mainNavBarLeftButtons/MainNavBarLeftButtons";
import MainNavBarRightButtons from "./mainNavBarRightButtons/MainNavBarRightButtons";

export default function MainNavBar() {
  const [
    isScreenWidthLessThan1500px,
    setIsScreenWidthLessThan1500px,
  ] = useState(null);
  const [
    isScreenWidthLessThan1260px,
    setIsScreenWidthLessThan1260px,
  ] = useState(null);
  const [isScreenWidthLessThan880px, setIsScreenWidthLessThan880px] =
    useState(null);

  const handleResize = () => {
    window.innerWidth < 1500
      ? setIsScreenWidthLessThan1500px(true)
      : setIsScreenWidthLessThan1500px(false);
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
    <div
      className={
        !isScreenWidthLessThan880px ? 'main-navbar' : 'main-navbar one'
      }>
      <MainNavBarRightButtons
        isScreenWidthLessThan1260px={isScreenWidthLessThan1260px}
        isScreenWidthLessThan880px={isScreenWidthLessThan880px}
      />
      <MainNavBarLeftButtons
        isScreenWidthLessThan1500px={isScreenWidthLessThan1500px}
        isScreenWidthLessThan1260px={isScreenWidthLessThan1260px}
        isScreenWidthLessThan880px={isScreenWidthLessThan880px}
      />
    </div>
  );
}
