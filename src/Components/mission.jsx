import React from 'react'
import style from '../styles/mission.module.css'
import { RxCross2 } from "react-icons/rx";

// pop to show on screen function
const mission = ({setShowMission}) => {

  return (
    <div className={style.main}>
        <div className={style.box}>
            <div className={style.title}>
            <h2>
                OUR MISSION
            </h2>
            <p>Make Genomic Sequencing cost effective, deliver on time and Accessible to Poor family to the Rich
family </p>
            </div>
            <img src="./images/mission.jpg" alt="mission" />
            <button>Register</button>
            <RxCross2 className={style.icon} onClick={()=> setShowMission(false)} />
        </div>
    </div>
  )
}

export default mission

