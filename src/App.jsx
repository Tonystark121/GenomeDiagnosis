import CareerSections from './Components/home/CareerSections'
import React, { useEffect, useState } from "react";
import Navbar from "./Components/nav";
import Window from "./Components/mission";
import Footer from "./Components/footer";
import Testimonial from "./Pages/testimonial";
import Slider from './Components/Slider'
import News from "./Pages/news";

function App() {
  const [mission, setShowMission] = useState(false);

  useEffect(()=>{
    setShowMission(true)
  },[])

  return (
    <>
      {mission && <Window setShowMission={setShowMission} />}
      <Navbar />
      <News />
      <CareerSections/>
      <Testimonial />
      <Footer/>
    </>
  );
}

export default App;
