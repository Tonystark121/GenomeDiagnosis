import React, { useEffect } from "react";
import style from "../styles/testimonials.module.css";
import Card from "../Components/card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/testimonials.module.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const testimonial = () => {
  const data = ["a", "b", "c", "l", "d", "e", "f", "g"];
  return (
    <section>
      <h1 style={{ marginTop: "1rem", textAlign: "center" }}>Testimonials</h1>
      <div className={style.main}>
        <div className={style.box}>
          <h2>Client Testimonials That Speak Volumes</h2>
          <p>
            Dive into the Tapestry of Experiences shared by Those who walked the
            journey with Us - Where Satisfaction Finds is voice
          </p>
          <div className={style.cards}>
            <Carousel
              showThumbs={false}
              showArrows={true}
              showStatus={false}
              showIndicators={true}
              infiniteLoop={true}
              centerMode={true}
              centerSlidePercentage={33}
              autoPlay={300}
              selectedItem={0}
              className={styles.slider}
            >
              {data.map((item, idx) => (
                <Card key={idx} item={item} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default testimonial;
