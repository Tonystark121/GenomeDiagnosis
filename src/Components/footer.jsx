import styles from "./../styles/footer.module.css";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer id={styles.col}>
        <div id={styles.foot}>
          <div>
            <h6 className={styles.h}>Contact Us</h6>
            <div id={styles.dp}>
              <p className={styles.contac}>Do you want to discuss?</p>
              <p className={styles.contac}>Phone: 1800000000</p>
              <p className={styles.contac}>Address: Gomti Nagar Lucknow 226010</p>
            </div>
          </div>
          <div>
            <h6 className={styles.h}>Corporate</h6>
            <a href="#" className={styles.nu}>
              Home
            </a>
            <a href="#" className={styles.nu}>
              About Us
            </a>
            <a href="#" className={styles.nu}>
              Partners
            </a>
            <a href="#" className={styles.nu}>
              Patients
            </a>
            <a href="#" className={styles.nu}>
              Carrers
            </a>
            <a href="#" className={styles.nu}>
              Events
            </a>
          </div>
          <div>
            <h6 className={styles.h}>Testing Portfolio</h6>
            <a href="#" className={styles.nu}>
              Whole Exome
            </a>
            <a href="#" className={styles.nu}>
              Clinical Exome
            </a>
            <a href="#" className={styles.nu}>
              Neuro Genetics
            </a>
            <a href="#" className={styles.nu}>
              Cardio Genetics
            </a>
            <a href="#" className={styles.nu}>
              Molecular testing for Solid Tumors
            </a>
            <a href="#" className={styles.nu}>
              clonoSEQ® NGS MRD
            </a>
          </div>
          <div>
            <h6 className={styles.h}>Resources</h6>
            <a href="#" className={styles.nu}>
              Blogs
            </a>
            <a href="#" className={styles.nu}>
              Scientific Community
            </a>
            <a href="#" className={styles.nu}>
              News & Events
            </a>
          </div>
        </div>
        <div id={styles.social}>
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
        <div id={styles.line}></div>
        <div id={styles.cr}>
          &copy; 2024 Genome Diagnostics . All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
