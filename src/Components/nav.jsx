import React, { useState } from "react";
import styles from "./nav.module.css";
import { FaAngleDown } from "react-icons/fa6";

const nav = () => {
  const [showDropDown, setShowDropDown] = useState(true);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src="./images/logo.png" alt="Logo" width={26} height={26} />
            <span>
              Genome
              <div>Diagnosis</div>
            </span>
          </div>
          <ul className={styles.navlinks}>
            <li>
              Home <FaAngleDown className={styles.icon} />
            </li>
            <li>
              About Us <FaAngleDown className={styles.icon} />
            </li>
            <li>
              Testing Portfolio <FaAngleDown className={styles.icon} />
            </li>
            <li>
              Patients <FaAngleDown className={styles.icon} />
            </li>
            <li>
              Partners <FaAngleDown className={styles.icon} />
            </li>
            <li>
              Careers <FaAngleDown className={styles.icon} />
            </li>
            <li>
              Events <FaAngleDown className={styles.icon} />
              {showDropDown && (
                <div className={styles.event_dropdown}>
                  <ul>
                    <li>Scientific Community</li>
                    <li>News and Events</li>
                    <li>Blogs</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
        <button>
            Register
        </button>
      </nav>
    </>
  );
};

export default nav;
