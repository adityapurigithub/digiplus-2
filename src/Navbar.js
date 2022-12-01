import React, { useState } from "react";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.upper}>
        <input type="text" placeholder="search" />
        <img
          className={style.bell}
          src="https://cdn-icons-png.flaticon.com/128/2058/2058148.png"
        />
        <img
          className={style.userLogo}
          src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
          alt="user"
        />
        <h4>User_Name</h4>
      </div>
      <div className={style.lower}>
        <div className={style.left}>
          <img
            className={style.userLogo}
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            alt="user"
          />
          <h5>
            Hi User <span>User_Name</span>
          </h5>
        </div>
        <div className={style.right}>
          <button>New</button>
          <button>Upload</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
