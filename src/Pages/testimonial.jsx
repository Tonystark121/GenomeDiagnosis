import React from "react";
import style from "../styles/testimonials.module.css";
import Card from "../Components/card";

const testimonial = () => {
  // 'd','e','f','g'
  // visit this link - https://dribbble.com/shots/23494652-Web-Elements-Client-Spotlights-Testimonials
  const data = ['a','b','c']
  return (
    <div className={style.main}>
      <div className={style.box}>
        <h2>Client Testimonials That Speak Volumes</h2>
        <p>
          Dive into the Tapestry of Experiences shared by Those who walked the
          journey with Us - Where Satisfaction Finds is voice
        </p>
        <div className={style.cards}>
          {
            data.map((item, idx)=>(
              <Card key={idx} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default testimonial;
