import styles from "./../styles/Partners.module.css";
import Image1 from "/images/Partner1.png";
import Image2 from "/images/Partner2.png";
import Image3 from "/images/Partner3.png";
import Image4 from "/images/Partner4.png";
import Image5 from "/images/Partner5.png";
import Image6 from "/images/Partner6.png";
import Image7 from "/images/Partner7.png";
import Image8 from "/images/Partner8.png";
import Image9 from "/images/Partner9.png";
import Image10 from "/images/Partner10.png";

const Partners = () => {
  return (
    <div id={styles.component}>
      <h1 id={styles.heading}> Our Partners</h1>
      <div className={styles.partners}>
        <img src={Image1} alt="" />
        <img src={Image1} alt="" />
        <img src={Image1} alt="" />
        <img src={Image1} alt="" />
        <img src={Image1} alt="" />
        <img src={Image1} alt="" />
      </div>
    </div>
  );
};

export default Partners;
