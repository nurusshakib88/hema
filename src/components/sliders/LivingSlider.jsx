import React, { useState } from "react";
import Slider from "react-slick";
import { living } from "../../data/LivingData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { IoBagAdd, IoBagAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function LivingSlider({ className }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(living.length / 4);

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
        {living.map((category, index) => {
          const price = category.price ? category.price.toFixed(2) : null;
          const discountPrice = category["discount-price"]
            ? category["discount-price"].toFixed(2)
            : null;

          const [integerPartPrice, decimalPartPrice] = price
            ? price.split(".")
            : [null, null];
          const [integerPartDiscount, decimalPartDiscount] = discountPrice
            ? discountPrice.split(".")
            : [null, null];
          return (
            <div
              className="relative group xl:px-4 lg:px-3 md:px-2 px-1"
              key={index}
            >
              {category.islast ? (
                <div className="verflow-hidden rounded-xl bg-white">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="mx-auto group-hover:scale-105 transition-all duration-500"
                  />
                  <Link
                    to="/all"
                    className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-3"
                  >
                    <span className="text-xl border-2 border-black bg-tranparent w-16 h-16 rounded-full flex items-center justify-center">
                      {category.icon}
                    </span>
                    <h1 className="font-bold">bekijk alles</h1>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="overflow-hidden rounded-xl relative">
                    <img
                      src={category.img}
                      alt={category.name}
                      className="mx-auto group-hover:scale-105 transition-all duration-500"
                    />
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-2xl absolute top-0 right-0 p-7"
                    />

                    <div className="absolute left-0 bottom-0 flex flex-col gap-2 flex-wrap font-bold py-3 text-sm">
                      {category.online && (
                        <span className="bg-white rounded-r px-2 block w-max py-1">
                          allen online
                        </span>
                      )}
                      {category.new && (
                        <span className="bg-[#1464E6] text-white rounded-r px-2 block w-max py-1">
                          nieuw
                        </span>
                      )}
                      {category.discount && (
                        <span className="bg-[#EF1E13] text-white rounded-r px-2 block w-max py-1">
                          korting
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="py-4">
                    <h1>{category.name}</h1>

                    <div className="flex items-end justify-between mt-12">
                      <div>
                        {price && (
                          <h2
                            className={`flex font-semibold ${
                              category.discount && "old-price"
                            }`}
                          >
                            <span className="text-xl">{integerPartPrice}.</span>
                            <span className="text-xs pt-1 -ms-1">
                              {decimalPartPrice}
                            </span>
                          </h2>
                        )}

                        {/* Conditionally render discount price if available */}
                        {discountPrice && (
                          <h2 className="flex font-bold text-[#EF1E13]">
                            <span className="text-5xl">
                              {integerPartDiscount}.
                            </span>
                            <span className="text-xl pt-1 -ms-2">
                              {decimalPartDiscount}
                            </span>
                          </h2>
                        )}
                      </div>
                      <div className="bg-[#E5AD2D] w-12 aspect-square rounded-full flex items-center justify-center">
                        <IoBagAdd className="text-xl" />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default LivingSlider;
