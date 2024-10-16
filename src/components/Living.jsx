import React from "react";
import SaleSlider from "./sliders/SaleSlider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LivingSlider from "./sliders/LivingSlider";

const Living = ({ className }) => {
  return (
    <section>
      <div
        className={`${className}  flex items-center justify-between lg:py-16 py-10 py relative text-white`}
      >
        <div className="absolute top-0 left-0 right-0 -bottom-12 xl:mx-20 bg-[#1464E6] -z-10 xl:rounded-xl"></div>

        <div className="space-y-3 mb-3">
          <h1 className="font-bold text-4xl">nieuw wonen & slapen</h1>
          <p>accessoires voor een huis waar je blij van wordt</p>
        </div>

        <Link className="flex items-center gap-3 group">
          <span className="group-hover:border-white border-b border-transparent transition-all duration-300 ">
            bekijk alles
          </span>
          <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
        </Link>
      </div>
      <LivingSlider className="xl:px-28 md:px-5 px-3 -mt-8" />
    </section>
  );
};

export default Living;
