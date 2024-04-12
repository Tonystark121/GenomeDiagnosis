import styles from "./../styles/about.module.css";
import img from "./../../public/images/about.jpg";
import { MdLeaderboard } from 'react-icons/md';
import { FaGlobeEurope } from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.mainHeading}>About Us</h1>
      <div className={styles.row}>
        <img src={img} className={styles.image} alt="Hi" />
        <div className={styles.content}>
          <div className={styles.container}>
            <p className={styles.paragraph}>
              <span className={styles.bold}>Life Sciences</span> is
              revolutionizing healthcare by provclassNameing deep molecular
              information for patients with advanced cancer, reproductive health
              challenges, or rare diseases, empowering patients, physicians,
              researchers, and biopharma organizations.
            </p>
            <h5 className={styles.heading}>
              Your Partner in Personalized Medicine
            </h5>
            <p className={styles.paragraph}>
              Life Sciences is more than a testing provclassNameer; we are an
              essential partner in improving health outcomes. Our genomic
              insights guclassNamee treatment decisions, optimize research, and
              improve lives worldwclassNamee.
            </p>
            <h5 className={styles.heading}>Decade of Impact</h5>
            <p className={styles.paragraph}>
              For over ten years, we've collaborated with stakeholders to
              champion genomic testing in clinical settings, raise awareness,
              and advocate for patient access.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.thirdRow}>
        <h3>Unlocking Genomics</h3>
        <ul className={styles.innerRow}>
          <li className={styles.gp}>
            <span className={styles.highlight}>Better Care Today:</span>{" "}
            Equipping physicians with tools for informed decisions.
          </li>
          <li className={styles.gp}>
            <span className={styles.highlight}>Better Care Tomorrow:</span>{" "}
            Fueling research for transformative therapies.
          </li>
          <li className={styles.gp}>
            <span className={styles.highlight}>Better Care Together:</span>{" "}
            Fostering collaboration for broader benefits.
          </li>
        </ul>
      </div>
      <div  className={styles.lastRow}>
        <div>
           <h5> <MdLeaderboard/> Leading in India</h5>
          <p className={styles.gap}>
            <span className={styles.highlight}>Life Sciences</span> is at the
            forefront of genomics in India, advancing precision medicine and
            drug discovery, ensuring accessibility and affordability.
          </p>
        </div>
        <div> 
          <h5><FaGlobeEurope/> The Future of Personalized Medicine</h5>
          <p className={styles.gap}>
            <span className={styles.highlight}>Life Sciences</span> aims to be a
            global leader in harnessing genomics for effective treatments,
            empowering researchers, and promoting a healthier tomorrow for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
