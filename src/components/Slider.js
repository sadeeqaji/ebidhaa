import React, { createRef, useRef, useState } from "react";
import Slider from "react-slick";
import Card from "./card";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { Button } from "./Button";

const CustomSlider = ({
  slidesToShow = 3,
  caption,
  showCardDesc,
  data,
  showSliderBtn = false,
  cardHeight = 200,
  centerPadding = "200px",
  overlayText,
  text
}) => {
  const customSlider = useRef();

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    infinite: true,
    centerPadding: centerPadding,
    slidesToShow: slidesToShow,
    slidesToScroll: 3,
    beforeChange: (current, next) => setSlideIndex({ slideIndex: next }),
  };
  return (
    <div className="popular">
      <div className="slider-caption">
        <p className="big-text">{caption}</p>
        {showSliderBtn && (
          <div className="slider-btn-container">
            <Button
              Icon={RiArrowLeftLine}
              className="btn slider-btn notify-btn"
              onClick={() => customSlider.current.slickPrev()}
            />

            <Button
              Icon={RiArrowRightLine}
              className="btn slider-btn notify-btn"
              onClick={() => customSlider.current.slickNext()}
            />
          </div>
        )}
      </div>
      <Slider {...settings} ref={(slider) => (customSlider.current = slider)}>
        {data.map(({ imageUrl, title, amount, description }) => {
          return (
            <Card
              cardHeight={cardHeight}
              imageUrl={imageUrl}
              amount={amount}
              description={description}
              showCardDesc={showCardDesc}
              title={title}
              overlayText={overlayText}
              text={text}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default CustomSlider;
