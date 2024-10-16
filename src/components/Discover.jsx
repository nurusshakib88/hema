import React from "react";
import DiscoverImage from "../assets/discover/discover-img.jpg";
import DiscoverySlider from "./sliders/DiscoverySlider";

const Discover = ({ className }) => {
  return (
    <>
      <section
        className={`${className} grid xl:grid-cols-3 xl:gap-10 md:py-10 pt-5 relative`}
      >
        <div className="absolute xl:top-20 sm:top-60 top-32 left-0 right-0 -bottom-20 xl:mx-20 bg-[#D48DFA] -z-10 xl:rounded-xl"></div>
        <div className="space-y-3 mt-auto xl:pb-16 xl:order-1 order-2 md:flex  xl:flex-col xl:justify-start justify-between xl:items-start items-center gap-x-5 xl:py-3 sm:py-10 py-5 pb-3">
          <div className="flex-1">
            <h1 className="xl:text-5xl text-3xl font-bold xl:leading-[60px] mb-3">
              alles om van je huis een vrolijk thuis te maken
            </h1>
            <h2> van kleurrijke kaarsen tot beddengoed om in weg te dromen</h2>
          </div>
          <button className="border border-black rounded-md lg:px-12 px-5 py-3 hover:bg-black transition-all duration-300 hover:text-white font-bold w-max">
            ontdek wonen & slapen
          </button>
        </div>

        <div className="col-span-2 overflow-hidden rounded-xl xl:order-2 order-1">
          <img src={DiscoverImage} alt="discover-img" className="w-full" />
        </div>
      </section>

      <DiscoverySlider className="xl:px-28 md:px-5 px-3" />
    </>
  );
};

export default Discover;
