import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./../styles/eventscard.module.css";
import { CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function eventscard({ data }) {
  return (
    <div className={styles.card}>
      <img src={data.image} alt="" />
      <h5>{data.title.slice(0)}</h5>
      <div className={styles.gp}>
      <a href="" className={styles.icons}>
        <CiLocationOn />
      </a>
      <span className={styles.span}>{data.location}</span>
      </div>
      <div className={styles.gp}>
      <a href="" className={styles.icons}>
        <MdAccessTime />
      </a>
      <span className={styles.span}>{data.time}</span>
      </div>
      <p className={styles.description}>{data.description.slice(0, 106)}...</p>
      <a href="" className={styles.detail}>See Details</a>
      <a href="" className={styles.icon}>
        <FaArrowUpRightFromSquare />
      </a>
    </div>
  );
}

export default eventscard;
