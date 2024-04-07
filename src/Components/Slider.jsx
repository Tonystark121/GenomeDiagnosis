import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/testimonials.module.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

function CustomPrevArrow(props) {
  return (
    <div className="custom-prev-arrow" {...props}>
      <FaAngleLeft style={{ fontSize: "30px", color: "#fff" }} />
    </div>
  );
}
function CustomNextArrow(props) {
  return (
    <div className="custom-next-arrow" {...props}>
      <FaAngleRight style={{ fontSize: "30px", color: "#fff" }} />
    </div>
  );
}

class Slider extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false} // Hide thumbnail images
        showArrows={true} // Show navigation arrows
        showStatus={false} // Hide status
        showIndicators={true} // Hide indicators
        infiniteLoop={true} // Enable infinite loop
        centerMode={true} // Center mode to display 3 slides
        centerSlidePercentage={30} // Percentage width of the center slide
        autoPlay={1000}
        selectedItem={0} // Start with the first item selected>
        className={styles.slider}
        prevIcon={<CustomPrevArrow />}
        nextIcon={<CustomNextArrow />}
      >
        <div style={{ width: "300px" }}>
          <img src="./images/photo1.png" width={300} height={300} />
        </div>
        <div style={{ width: "300px" }}>
          <img src="./images/photo1.png" width={300} height={300} />
        </div>
        <div style={{ width: "300px" }}>
          <img src="./images/photo1.png" width={300} height={300} />
        </div>
        <div style={{ width: "300px" }}>
          <img src="./images/photo1.png" width={300} height={300} />
        </div>
        <div style={{ width: "300px" }}>
          <img src="./images/photo1.png" width={300} height={300} />
        </div>
        <div style={{ width: "300px" }}>
          <img src="./images/photo1.png" width={300} height={300} />
        </div>
      </Carousel>
    );
  }
}

export default Slider;
