import React, { useState } from "react";
import style from "./MainBody.module.css";
const MainBody = () => {
  const [show, setShow] = useState(false);

  let desc =
    "Pulvinar nisl ipsum morbi diam Pulvinar nisl ipsum morbi diam Pulvinar nisl ipsum morbi diam Pulvinar nisl ipsum morbi diam Pulvinar nisl ipsum morbi diam Pulvinar nisl ipsum morbi diam Pulvinar nisl ipsum morbi diam";

  const truncate = (str, limit) => {
    {
      return !show ? str.substring(0, limit) + "..." : str;
    }
  };

  return (
    <div className={style.mainBody}>
      <div className={style.left}>
        <div className={style.row}>
          <h2>Your Projects</h2>
          <div className={style.boxContainer}>
            <div className={style.box}>
              <h3>Project 1</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum,
                viverra.
              </span>
              <div className={style.icon}></div>
            </div>
            <div className={style.box}>
              <h3>Project 1</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum,
                viverra.
              </span>
              <div className={style.icon}></div>
            </div>
            <div className={style.box}>
              <h3>Project 1</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum,
                viverra.
              </span>
              <div className={style.icon}></div>
            </div>
          </div>
        </div>
        <div className={style.row}>
          <h2>Your Projects</h2>
          <div className={style.boxContainer}>
            <div className={style.box}>
              <h3>Project 1</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum,
                viverra.
              </span>
              <div className={style.icon}></div>
            </div>
            <div className={style.box}>
              <h3>Project 1</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum,
                viverra.
              </span>
              <div className={style.icon}></div>
            </div>
            <div className={style.box}>
              <h3>Project 1</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum,
                viverra.
              </span>
              <div className={style.icon}></div>
            </div>
          </div>
        </div>
        <div className={style.row}>
          <h2>Your Projects</h2>
          <div className={style.boxContainer}>
            <div className={style.box}>
              <h3>Project 1</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum,
                viverra.
              </span>
              <div className={style.icon}></div>
            </div>
            <div className={style.box}>
              <h3>Project 1</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum,
                viverra.
              </span>
              <div className={style.icon}></div>
            </div>
            <div className={style.box}>
              <h3>Project 1</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum,
                viverra.
              </span>
              <div className={style.icon}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.announcement}>
          <h2>Announcement</h2>
          <div className={style.rbox}>
            <div>
              <h4>Site Maintance</h4>
              <span onClick={() => setShow(!show)}>{truncate(desc, 90)}</span>
            </div>
            <div>
              <h4>Site Maintance</h4>
              <span onClick={() => setShow(!show)}>{truncate(desc, 90)}</span>
            </div>
            <div>
              <h4>Site Maintance</h4>
              <span onClick={() => setShow(!show)}>{truncate(desc, 90)}</span>
            </div>
          </div>
        </div>
        <div className={style.activity}>
          <h2>Current Activity</h2>
          <div className={style.rbox}>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                alt="user"
              />
              <span>
                <strong>User</strong>_user_activity_
              </span>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                alt="user"
              />
              <span>
                <strong>User</strong>_user_activity_
              </span>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                alt="user"
              />
              <span>
                <strong>User</strong>_user_activity_
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
