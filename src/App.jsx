import Navbar from './Components/nav'
import CareerSections from './Components/home/CareerSections'
import React, { useEffect, useState } from "react";
import Navbar from "./Components/nav";
import Window from "./Components/mission";
import Footer from "./Components/footer";
import Testimonial from "./Pages/testimonial";
import Slider from './Components/Slider'

function App() {
  const [mission, setShowMission] = useState(false);

  useEffect(()=>{
    setShowMission(true)
  },[])

  return (
    <>
       <Navbar />
       <CareerSections/>
      <Navbar />
      {mission && <Window setShowMission={setShowMission} />}
      <Footer/>
      {/* <Testimonial /> */}
      {/* <Slider /> */}
    </>
  );
}

export default App;
