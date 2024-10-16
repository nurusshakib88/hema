import React from "react";
import SaleSlider from "./sliders/SaleSlider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Sale = ({ className }) => {
  return (
    <section className="xl:pt-24 pt-5 pb-8">
      <div className={`${className}  flex items-center justify-between py-8`}>
        <div className="space-y-3">
          <h1 className="font-bold md:text-3xl text-xl">nu in de aanbieding</h1>
          <p>geldig t/m 20 oktober</p>
        </div>

        <Link className="flex items-center gap-3 group">
          <span className="group-hover:border-black border-b border-transparent transition-all duration-300 ">
            bekijk alles
          </span>
          <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
        </Link>
      </div>

      <SaleSlider className="xl:px-28 md:px-5 px-3" />
    </section>
  );
};

export default Sale;
