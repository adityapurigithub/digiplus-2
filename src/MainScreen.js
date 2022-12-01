import React from "react";
import MainBody from "./MainBody";
import style from "./MainScreen.module.css";
import Navbar from "./Navbar";
const MainScreen = () => {
  return (
    <div className={style.mainScreen}>
      <Navbar />
      <MainBody />
    </div>
  );
};

export default MainScreen;
