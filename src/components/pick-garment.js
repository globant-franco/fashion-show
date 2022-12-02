/** @jsxImportSource @emotion/react */
import React from "react";
import Slider from "react-slick";
import '../App.css';
import { PickGarmentContainer, Garment, PriceTag } from "./lib";
import styles from '../shared.module.css'
import prevArrow from '../images/prevArrow.png'
import nextArrow from '../images/nextArrow.png'

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  prevArrow: <SlickPrevArrow source={prevArrow}/>,
  nextArrow: <SlickNextArrow source={nextArrow}/>
};

function SlickNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={nextArrow}
      alt="Next Arrow"
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SlickPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={prevArrow}
      alt="Prev Arrow"
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

export default function PickGarment({ garmentList, option, variant }) {
  return (
    <PickGarmentContainer>
      <h4 className={styles.optionSelected}>{option}</h4>
      <Slider {...carouselSettings} className={styles.garmentCarousel}>
        {garmentList.map((item, i) => (
          <div key={i} className={styles.selectGarmentContainer}>
            <Garment>
              <img
                src={item.garment}
                alt={`${variant} ${option} ${i}`}
                css={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Garment>
            <div css={{ display: "flex", alignItems: "center" }}>
              {React.createElement(item.priceIcon)}
              <PriceTag variant="secondary">{item.price}</PriceTag>
            </div>
          </div>
        ))}
      </Slider>
    </PickGarmentContainer>
  );
}
