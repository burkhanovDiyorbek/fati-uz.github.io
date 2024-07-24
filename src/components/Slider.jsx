import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Slider = ({ slideData }) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    document.body.classList.add("slide-anim");
    setTimeout(() => {
      document.body.classList.remove("slide-anim");
    }, 500);
  }, [sliderIndex]);

  useEffect(() => {
    setInterval(() => {
      setSliderIndex((prev) =>
        prev != slideData.length - 1 ? (prev += 1) : 0
      );
    }, 4400);
  }, []);
  return (
    <div className="container">
      <div className="slider">
        <div key={slideData[sliderIndex].id} className="content">
          <img src={slideData[sliderIndex].img_link} alt="slider img" />
        </div>
        <div className="slider-dots">
          {slideData.map((item) => {
            return (
              <div
                className={`dot ${sliderIndex == item.id ? "active" : ""} `}
                key={item.id}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  slideData: PropTypes.array,
};
