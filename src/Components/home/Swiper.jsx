/** @format */

import React, { useState, useEffect } from "react";
import styles from "./swiper.module.css";
import image1 from "./../../assests/images/swiper/1.jpg";
import image2 from "./../../assests/images/swiper/2.png";
import image3 from "./../../assests/images/swiper/3.png";

const Swiper = () => {
  const [dataArray, setDataArray] = useState([
    {
      left: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}>
          <h1
            style={{
              textAlign: "left",
              color: "var(--blueberry)",
              fontSize: 36,
              lineHeight: 1,
            }}>
            Discover tailored medicine for the care you truly deserve.
          </h1>
          <span style={{ fontSize: 18, color: "var(--blueberry-lighter-1)" }}>
            Experience personalized medicine and receive the quality care you
            truly deserve.
          </span>
        </div>
      ),
      right: image1,
    },
    {
      left: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <h1
            style={{
              textAlign: "left",
              color: "var(--blueberry)",
              fontSize: 36,
              fontWeight: 600,
              marginBottom: 16,
            }}>
            Early Detection through Newborn Screening
          </h1>
          <p
            style={{
              fontSize: 22,
              lineHeight: 1.6,
              color: "var(--blueberry-lighter-1)",
              textAlign: "left",
              marginBottom: 12,
            }}>
            Newborn screening ensures timely detection of health issues,
            providing essential care for your baby's well-being.
          </p>
        </div>
      ),

      right: image2,
    },
    {
      left: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <h1
            style={{
              textAlign: "left",
              color: "var(--blueberry)",
              fontSize: 36,
              fontWeight: 600,
              marginBottom: 16,
            }}>
            Life in A, T, C, G: Unraveling the Genetic Code
          </h1>
          <p
            style={{
              fontSize: 22,
              lineHeight: 1.6,
              color: "var(--blueberry-lighter-1)",
              textAlign: "left",
              marginBottom: 12,
            }}>
            Exploring the alphabet of life: A, T, C, G - the building blocks of
            our genetic essence.
          </p>
        </div>
      ),
      right: image3,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === dataArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearTimeout(timer);
  }, [activeIndex, dataArray.length]);

  // Determine which animation class to apply based on activeIndex
  const getAnimationClass = (index) => {
    switch (index) {
      case 0:
        return styles.swipeFromLeft;
      case 1:
        return styles.swipeFromRight;
      case 2:
        return styles.swipeFromTop;
      default:
        return "";
    }
  };

  return (
    <div className={styles.swiperPage}>
      <div
        className={`${styles.swipeContainer} ${getAnimationClass(
          activeIndex
        )}`}>
        <div className={styles.swipeLeft}>{dataArray[activeIndex].left}</div>
        <div className={styles.swipeRight}>
          {dataArray[activeIndex].right && (
            <img
              src={dataArray[activeIndex].right}
              alt="Right Image"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Swiper;
