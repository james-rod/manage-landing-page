import "./MovingImages.css";

function CardComponent({ slides }) {
  return (
    <div className="desktop-sliderContainer">
      {slides.map((slide) => (
        <div key={slide.name} className="desktop-slideStyles">
          <img src={slide.image} className="desktop-images" />
          <div className="desktop-infoContainer">
            <h2>{slide.name}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
