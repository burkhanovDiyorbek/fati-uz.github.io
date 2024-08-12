import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const Slider = React.memo(({ slideData }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  console.log(sliderIndex);

  useEffect(() => {
    document.body.classList.add("slide-anim");
    setTimeout(() => {
      document.body.classList.remove("slide-anim");
    }, 500);
  }, [sliderIndex]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderIndex((prev) => {
        if (prev >= slideData?.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 4400);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="slider">
        <div key={slideData?.[sliderIndex]?.id} className="content">
          <img src={slideData?.[sliderIndex]?.img_url} alt="slider img" />
        </div>
        <div className="slider-dots">
          {slideData?.map((item) => {
            return (
              <div
                className={`dot ${sliderIndex + 1 == item.id ? "active" : ""} `}
                key={item?.id}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

Slider.displayName = "slider";

export default Slider;

Slider.propTypes = {
  slideData: PropTypes.array,
};
