import styles from "./../styles/team.module.css";
import img from "./../../public/images/logo.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <div id={styles.team}>
      <h1>Meet Our Team</h1>
      <p>
        Life Sciences Diagnostics Centre for Genomic Medicine is revolutionizing
        genetic testing in India. Our Ahmedabad facility, equipped with the
        NovaSeq6000 system, delivers precise analysis. We aim to be the go-to
        destination for genetic testing, offering solutions for a wide range of
        disorders. Our clinician-centric approach maximizes diagnostic
        potential, supported by our Research Service Unit. We're committed to
        making genetic testing accessible to all, driving change in Diagnostic
        Genomics.
      </p>
      <div className={styles.members}>
        <div className={styles.member}>
          <div className={styles.position}>Founder Director</div>
          <div className={styles.image}>
            <img src='https://cdn-icons-png.flaticon.com/512/4086/4086679.png' alt="" />
          </div>
          <h6>Dr. Rajeev Kumar Pandey</h6>
          <div className={styles.icons}>
            <a href="">
              <IoLogoInstagram />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <BsTwitterX />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.member}>
          <div className={styles.position}>
           Founder Director
          </div>
          <div className={styles.image}>
            <img src='https://cdn-icons-png.flaticon.com/512/4086/4086679.png' alt="" />
          </div>
          <h6>Dr. Arun Khattri </h6>
          <div className={styles.icons}>
            <a href="">
              <IoLogoInstagram />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <BsTwitterX />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
