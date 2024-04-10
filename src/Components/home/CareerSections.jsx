import React from 'react'
import styles from "./careersection.module.css"

const careerlist = [
  {
    designation: "Research Associate",
    image:
      "https://firebasestorage.googleapis.com/v0/b/genome-diagnosis.appspot.com/o/career%2Fbusiness-people-working-office-with-digital-tablet.jpg?alt=media&token=a56caa43-124b-4569-95a5-51f22347dc7a",
    job_responsibilities: [
      "Extracting nucleic acid",
      "Assisting in all sample prep and NGS lab operations",
      "Ensuring adequate control points and quality checks",
      "Handling techniques like Microarray, NIPT etc",
      "Handling cytogenetics processes such as slide preparation, microscopy, computer image analysis, karyotyping, culturing, harvesting procedures and result reporting",
      "Keeping accurate records, documentation and being actively involved in NABL and CAP/CLIA accreditation",
      "Assisting in procurement and setting up all laboratory equipment",
    ],
    desired_skills: [
      "Any Ph.D/ M.Sc. with minimum 1-4 years’ experience",
      "Strong communication/interpersonal skills",
      "Proven analytical background and advanced Excel skills",
      "Good business acumen",
    ],
  },
  {
    designation: "Genome Analyst",
    image:
      "https://firebasestorage.googleapis.com/v0/b/genome-diagnosis.appspot.com/o/career%2Fportrait-man-lab-working-with-microscope.jpg?alt=media&token=86d72ed2-7a27-45c2-b925-80d9da063bce",
    job_responsibilities: [
      "Checking QC data of NGS and other genetic data generated from clinical samples",
      "Analysis of sequenced variants (NGS/ Sanger sequencing), interpretation of the results and generating test reports (Necessary training and guidance will be available from the team lead)",
      "Interaction with bioinformatics and laboratory team in the analysis and interpretation of genetic data generated",
      "Careful, critical and systematic analysis, literature curation and interpretation of the NGS data with an eye for details",
      "Effective implementation of turnaround time of the test reports assigned, is a critical function of the job",
      "Effective proactive communication with the team leader and across the departments is mandatory",
      "Participation in internal research projects as and when required",
      "Provide support for other molecular biology activities in the lab (as needed)",
      "Help develop molecular diagnostic assays (as needed)",
      "Validation of mutations, design of primers and probes (as needed) Publications and/or other recognitions and prior experience in NGS technology will be an added advantage",
    ],
    desired_skills: [
      "Any Ph.D/ M.Sc. with minimum 1-4 years’ experience",
      "Strong communication/interpersonal skills",
      "Proven analytical background and advanced Excel skills",
      "Good business acumen",
    ],
  },
  {
    designation: "Bioinformatics",
    image : "https://firebasestorage.googleapis.com/v0/b/genome-diagnosis.appspot.com/o/career%2Fmedium-shot-woman-looking-through-microscope.jpg?alt=media&token=b4d2e3e5-1b6b-4883-a6ff-9ff86b7d2acc",
    desired_skills: [
      "Ph.D/ M.Sc. in Bioinformatics or related field",
      "Experience in analyzing genetic data using bioinformatics tools",
      "Strong programming skills (Python, R, etc.)",
      "Knowledge of statistical methods and algorithms",
      "Good communication and collaboration skills",
    ],
  },
//   {
//     designation: "Operations",
//     desired_skills: [
//       "Bachelor's degree in business administration, operations management, or related field (Master's preferred)",
//       "Experience in operations management, preferably in a healthcare or laboratory setting",
//       "Strong analytical and problem-solving skills",
//       "Excellent communication and interpersonal skills",
//       "Ability to multitask and prioritize tasks effectively",
//       "Knowledge of regulatory requirements and quality management systems",
//     ],
//   },
];


const CareerCard = ({item}) => {
    return (
      <div className={styles.careercard}>
        <img
          className={styles.careerimages}
          src={item.image}></img>
        <div className={styles.careerbottomdiv}>
          <h2>{item.designation}</h2>
          <ul className={styles.skillList}>
            {item.desired_skills.slice(0, 3).map((skill, key) => (
              <li key={key}>{skill}</li>
            ))}
          </ul>
          <p className={styles.applybtn}>Apply</p>
        </div>
      </div>
    );
}

const CareerSections = () => {

  return (
    <div className={styles.careersection}>
      <h1>Careers</h1>
      {/* <p>
        Embark on an exhilarating journey of relentless discovery and
        groundbreaking innovation as you explore our extensive array of career
        opportunities.
      </p> */}
      <div className={styles.careerCardDiv}>
        {careerlist.map((item, key) => (
          <CareerCard
            key={key}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default CareerSections
