import styles from "./../styles/Partners.module.css";
// import img from "/images/Partner1.png";

const Partners = () => {
  const img = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Zydus_Logo.jpg'
  return (
    <div id={styles.component}>
      <h2 id={styles.heading}> Our Partners</h2>
      <div className={styles.partners}>
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Partners;
