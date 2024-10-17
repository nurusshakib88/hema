import React from "react";
import Navbar from "./components/Navbar";
import CategorySlider from "./components/sliders/CategorySlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Discover from "./components/Discover";
import Sale from "./components/Sale";
import Living from "./components/Living";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="w-full">
      <CategorySlider className="xl:px-32 md:px-8 px-4" />
      <Discover className="xl:px-32 md:px-8 px-4" />
      <Sale className="xl:px-32 md:px-8 px-4" />
      <Living className="xl:px-32 md:px-8 px-4" />
    </div>
  );
};

export default App;
