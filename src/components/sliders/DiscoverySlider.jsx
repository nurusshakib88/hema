import React, { useState } from "react";
import Slider from "react-slick";
import { discover } from "../../data/DiscoverData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function DiscoverySlider({ className }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(discover.length / 4);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`${
          currentSlide >= totalSlides - 1 ? "hidden" : "xl:flex hidden"
        }  bg-white shadow-xl absolute top-1/3 -right-4 z-10 w-16 h-16 rounded-full flex items-center justify-center`}
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
        }   bg-white shadow-xl absolute top-1/3 -left-4 z-10 w-16 h-16 rounded-full flex items-center justify-center`}
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
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${className} slider-container w-full your_slide`}>
      <Slider {...settings}>
        {discover.map((category, index) => (
          <div
            className="relative group xl:px-4 lg:px-3 md:px-2 px-1"
            key={index}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={category.img}
                alt={category.name}
                className="mx-auto group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="absolute top-0 left-0 mx-8 my-5 aspect-square text-white font-bold bg-[#EF2625] flex flex-col justify-center p-2 rounded-sm">
              <h1 className="text-4xl leading-6">{category.type.value}</h1>
              <p className="text-lg">{category.type.cat}</p>
            </div>

            <div className="py-4">
              <h1 className="font-semibold">{category.name}</h1>
              <p>geldig t/m {category.valid}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DiscoverySlider;
