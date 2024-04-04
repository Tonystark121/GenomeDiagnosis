import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import { FaAngleDown } from "react-icons/fa6";
import { menuData } from "./menu";

const nav = () => {
  const [showDropDown, setShowDropDown] = useState(null);
  const openLinks = (idx) => {
    setShowDropDown(idx)
  }
  const closeLinks = (idx) => {
    setShowDropDown(idx)
    window.addEventListener('onClick',()=>{
      setShowDropDown(null)
    })
  }

  useEffect(()=>{
    const handleClickOutside = (event) => {
      if (!event.target.closest('.event_dropdown')) {
        setShowDropDown(null);
        window.removeEventListener('click', handleClickOutside);
      }
    }
    window.addEventListener('click',handleClickOutside)
  },[showDropDown])
  const renderSubtitle = (subtitle) => {
    return (
      <ul className={styles.event_dropdown} >
        {subtitle.map((ele, idx) => (
          <li key={idx}>
            {ele.title}
          </li>
        ))}
      </ul>
    );
  };

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
            {menuData.map((items, idx) => (
              <li key={idx} id={`link${idx}`} onMouseEnter={()=>openLinks(idx)} onMouseLeave={()=>closeLinks(idx)} >
                {items.title} <FaAngleDown className={styles.icon} />
                {showDropDown===idx &&items.subTitle && renderSubtitle(items.subTitle)}
              </li>
            ))}
          </ul>
        </div>
        <button id="btn">Register</button>
      </nav>
    </>
  );
};

export default nav;
