import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import "./hamburger.css";

const Hamburger = () => {
  // to change burger classes
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenuIcon = () => {
    setIsMenuClicked(!isMenuClicked);
    if (isMenuClicked) {
      setMenuClass("menu hidden");
    } else {
      setMenuClass("menu visible");
    }
  };

  // toggle burger menu change
  return (
    <>
      <div className="burger-menu" onClick={updateMenuIcon}>
        {/* <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div> */}
        {isMenuClicked ? <RxCross2 size={30} /> : <RxHamburgerMenu size={30} />}
      </div>
      <div className={menu_class}>
        <a href="/">Home Page</a>
        <a href="/dataAnalysis">Data Analysis</a>
        <a href="/about">About Page</a>
      </div>
    </>
  );
};

export default Hamburger;
