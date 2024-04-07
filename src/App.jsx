import React, { useEffect, useState } from "react";
import Navbar from "./Components/nav";
import Window from "./Components/mission";
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
      {mission && <Window setShowMission={setShowMission} />}
      {/* <Testimonial /> */}
      <Slider />
    </>
  );
}

export default App;
