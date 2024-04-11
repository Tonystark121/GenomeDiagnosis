import styles from './../styles/about.module.css'
import img from './../../public/images/about.jpg'

const About = () => {
  return (
    <div className={styles.about}>
     <h1>About Us</h1> 
     <div id={styles.row}>
     <img src={img} alt="Hi" />
     <div id={styles.content}>
     <p className={styles.gap}><span className={styles.highlight}>Life Sciences</span> is revolutionizing healthcare by providing deep molecular information for patients with advanced cancer, reproductive health challenges, or rare diseases, empowering patients, physicians, researchers, and biopharma organizations.</p>
     <h3>Your Partner in Personalized Medicine</h3>
     <p className={styles.gap}>Life Sciences is more than a testing provider; we are an essential partner in improving health outcomes. Our genomic insights guide treatment decisions, optimize research, and improve lives worldwide.</p>
     <h3>Decade of Impact</h3>
     <p className={styles.gap}>For over ten years, we've collaborated with stakeholders to champion genomic testing in clinical settings, raise awareness, and advocate for patient access.</p>
     <h3>Unlocking Genomics</h3>
            <ul>
                <li className={styles.gp1}><span  className={styles.highlight}>Better Care Today:</span> Equipping physicians with tools for informed decisions.</li>
                <li><span  className={styles.highlight}>Better Care Tomorrow:</span> Fueling research for transformative therapies.</li>
                <li className={styles.gp2}><span  className={styles.highlight}>Better Care Together:</span> Fostering collaboration for broader benefits.</li>
            </ul>

            <h3>Leading in India</h3>
            <p className={styles.gap}><span  className={styles.highlight}>Life Sciences</span> is at the forefront of genomics in India, advancing precision medicine and drug discovery, ensuring accessibility and affordability.</p>
            <h3>The Future of Personalized Medicine</h3>
            <p className={styles.gap}><span  className={styles.highlight}>Life Sciences</span> aims to be a global leader in harnessing genomics for effective treatments, empowering researchers, and promoting a healthier tomorrow for all.</p>
     </div>
     
     </div>
    </div>
  )
}

export default About
