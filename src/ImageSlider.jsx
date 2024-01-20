import React, { useState } from "react";
import "./MovingImages.css";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex);
  }

  return (
    <>
      <div className="sliderContainer">
        <div className="slideStyles">
          <img className="images" src={slides[currentIndex].image} />
          <div className="infoContainer">
            <h2>{slides[currentIndex].name}</h2>
            <p>{slides[currentIndex].description}</p>
          </div>
        </div>
        <div className="dotContainerStyles">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`dotStyles ${
                slideIndex === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(slideIndex)}
            >
              •
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
