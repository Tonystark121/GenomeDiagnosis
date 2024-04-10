import React, { useEffect, useState } from "react";
import style from "../styles/testimonials.module.css";

const card = ({ item }) => {
  const [isHovered, setIsHovered] = useState(true)
  return (
    <div
      className={`${style.card}`}
      onMouseOver={() =>setIsHovered(false)}
      onMouseLeave={()=>setIsHovered(true)}
    >
      <img src="./images/med2.jpeg" alt="photo" />
      <div className={style.text}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat in
          minus inventore eligendi ratione aperiam expedita dignissimos, odit
          perspiciatis culpa.
        </p>
        <div className={style.name}>
          <h4>Rajeev Kumar Gupta</h4>
          <span>founder @QuickHeal</span>
        </div>
      </div>
      <div className={style.myCard} style={isHovered ? {display:'none'} : {display:'initial'}}>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis voluptatum mollitia ea eum delectus quidem animi labore, vitae odio repellat, culpa modi voluptatibus harum eius, itaque voluptas beatae doloremque provident libero. Culpa ducimus amet blanditiis, quia accusantium dolorem fuga. Rerum ullam maxime et pariatur?
         </p>
         <div className={style.info}>
           <img src="./images/photo1.png" alt="logo" />
           <div className={style.title} >
              <h4>Rajeev Kumar Gupta</h4>
              <p>founder @QuickHeal</p>
           </div>
         </div>
      </div>
    </div>
  );
};

export default card;
