import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./../styles/blogscard.module.css";
import { MdAccessTime } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function blogscard({ data }) {
    console.log('blog')
  return (
    <div className={styles.card}>
      <img src={data.image} alt="" />
      <h5>{data.title.slice(0)}</h5>
      <div className={styles.gp}>
      <a href="" className={styles.icons}>
        <MdAccessTime />
      </a>
      <span className={styles.span}>{data.publishedby}</span>
      </div>
      <p className={styles.description}>{data.description.slice(0, 100)}...</p>
      <a href="" className={styles.detail}>See Details</a>
      <a href="" className={styles.icon}>
        <FaArrowUpRightFromSquare />
      </a>
    </div>
  );
}

export default blogscard;
