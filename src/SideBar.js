import React, { useState } from "react";
import style from "./SideBar.module.css";
const SideBar = () => {
  const [show, setShow] = useState(false);
  console.log(show);

  return (
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"
        style={{
          height: "20px",
          position: "fixed",
          zIndex: "2",
          padding: "10px",
        }}
        onClick={() => {
          setShow(!show);
        }}
      />
      <div className={!show ? style.sideBar : style.show}>
        <div className={style.brand}>
          <img
            className={style.logo}
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
          />
          <h1 className={style.title}>DigiPlus</h1>
        </div>
        <div className={style.links}>
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>DigiChat</li>
            <li>Apply for Job</li>
            <li>Certificate</li>
          </ul>
        </div>
        <div className={style.links}>
          <ul>
            <li>DigiChat</li>
            <li>Apply for Job</li>
            <li>Certificate</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
