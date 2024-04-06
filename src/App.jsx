import React, { useEffect, useState } from "react";
import Navbar from "./Components/nav";
import Window from "./Components/mission";
import Testimonial from "./Pages/testimonial";

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
    </>
  );
}

export default App;
