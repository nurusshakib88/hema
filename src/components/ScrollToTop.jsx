import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the window has been scrolled more than 50 pixels
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? "bottom-0" : "-bottom-full"
      } fixed  right-0 w-14 h-14 rounded-full flex items-center  transition-all duration-1000 justify-center shadow-[0px_1px_10px_rgb(0,0,0,.3)] bg-white z-[9999] m-6`}
      onClick={handleScrollToTop}
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTop;
