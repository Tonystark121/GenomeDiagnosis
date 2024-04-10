import React, { useEffect, useState } from "react";
import Navbar from "./Components/nav";
import Window from "./Components/mission";
import Footer from "./Components/footer";
import Testimonial from "./Pages/testimonial";
import Slider from './Components/Slider';
import Partners from "./Components/Partners";

function App() {
  const [mission, setShowMission] = useState(false);

  // useEffect(()=>{
  //   setShowMission(true)
  // },[])

  return (
    <>
      <Navbar />
      {mission && <Window setShowMission={setShowMission} />}
      <Testimonial />
      <Partners/>
      <Footer/>
    </>
  );
}

export default App;
