import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../assets/error.jpg";

const Error = () => {
  return (
    <div className="xl:px-32 md:px-8 px-4 space-y-10 sm:grid grid-cols-2 items-center md:py-20 py-10 sm:text-left text-center gap-10">
      <div className="space-y-5">
        <h1 className="xl:text-8xl md:text-6xl text-4xl font-bold">
          mispouce...
        </h1>
        <p>
          Sorry, we kunnen de pagina die je zoekt niet vinden of het product dat
          je zoekt is (tijdelijk) uitverkocht.
        </p>
        <p>e hebt nu twee opties:</p>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="bg-blue-400 text-white py-3 px-4 font-bold sm:w-auto w-full"
          >
            ga terug
          </Link>
          <Link
            to="/"
            className="bg-blue-400 text-white py-3 px-4 font-bold sm:w-auto w-full"
          >
            naar home
          </Link>
        </div>
      </div>

      <img src={ErrorImg} alt="" />
    </div>
  );
};

export default Error;
