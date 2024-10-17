import React, { useState } from "react";
import Slider from "react-slick";
import { categories } from "../../data/CategoryData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CategorySlider({ className }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(categories.length / 8); // Assuming 8 slides by default

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`${
          currentSlide >= totalSlides - 1 ? "hidden" : "xl:flex hidden"
        } bg-white shadow-xl absolute top-1/4 right-0 z-10 w-16 h-16 rounded-full flex items-center justify-center`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`${
          currentSlide === 0 ? "hidden" : "xl:flex hidden"
        } bg-white shadow-xl absolute top-1/4 left-0 z-10 w-16 h-16 rounded-full flex items-center justify-center`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-black" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    variableWidth: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className={`${className} slider-container w-full your_slide py-5`}>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div className="text-center" key={index}>
            <div className="xl:w-32 lg:w-40 md:w-28 sm:w-40 w-24  mx-auto aspect-square overflow-hidden group rounded-full">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-full object-cover mb-3 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="mt-2 xl:text-lg text-sm font-semibold">
              {category.name}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategorySlider;
