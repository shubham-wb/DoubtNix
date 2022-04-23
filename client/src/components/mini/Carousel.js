import React from "react";
import FacultyCard from "./FacultyCard";
import "../../assets/css/carousel.css";
function Carousel() {
  return (
    <div className="carousel">
      <ul className="f-cards-wrapper">
        <FacultyCard />
      </ul>
    </div>
  );
}

export default Carousel;
