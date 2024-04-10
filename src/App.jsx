import React, { useEffect, useState } from "react";
import Navbar from "./Components/nav";
import Window from "./Components/mission";
import Footer from "./Components/footer";
import Testimonial from "./Pages/testimonial";
import Slider from './Components/Slider'
import News from "./Pages/news";

function App() {
  const [mission, setShowMission] = useState(false);

  // useEffect(()=>{
  //   setShowMission(true)
  // },[])

  return (
    <>
      <Navbar />
      {mission && <Window setShowMission={setShowMission} />}
       <News />
      <Testimonial />
      <Footer/>
    </>
  );
}

export default App;
