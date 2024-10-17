import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SiteLogo from "../assets/logo.svg";
import Categories from "./Catagories";
import { FaAngleDown, FaEnvelope } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";

import user from "../assets/navbar/user.png";
import heart from "../assets/navbar/heart.png";
import bag from "../assets/navbar/bag.png";
import { Drawer } from "flowbite-react";
import { Input, InputAdornment, TextField } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
const Navbar = ({ className }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTopbar, setIsOpenTopbar] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
    setIsOpenTopbar(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <div
      className={`${
        hasScrolled ? "fixed top-0 xl:pt-0" : "relative xl:pt-10"
      }  top-0 w-full transition-all duration-300 ease-in-out z-[9999] bg-white fixed`}
    >
      <div
        className={`${
          hasScrolled && "-translate-y-full opacity-0"
        } ${className} h-[5vh] opacity-100 left-0 right-0 transition-all duration-500 top-menu xl:flex hidden items-center justify-between py-3 text-sm font-semibold absolute top-0`}
      >
        <ul className="flex gap-5">
          <li>
            <Link>fotoservice</Link>
          </li>
          <li>
            <Link>tickets & deals</Link>
          </li>
          <li>
            <Link>verzekeringen</Link>
          </li>
          <li>
            <Link>inspiratie</Link>
          </li>
        </ul>
        <ul className="flex gap-5">
          <li>
            <Link>winkels</Link>
          </li>
          <li>
            <Link>klantenpas</Link>
          </li>
          <li>
            <Link>klantenservice</Link>
          </li>
        </ul>
      </div>

      <div className={`${className} bg-white xl:py-3`}>
        <div
          className={`${
            hasScrolled && "h-[10vh]"
          } md:h-[10vh] h-[16vh]  flex flex-wrap items-center justify-between gap-x-12 transition-all duration-300`}
        >
          <Link className="order-1">
            <img src={SiteLogo} alt="hema-logo" className="xl:w-14 w-12" />
          </Link>
          <div
            className="order-2 xl:flex hidden items-center gap-3 font-semibold h-full  cat-btn"
            onMouseEnter={() => setIsCategoryHovered(true)}
            onMouseLeave={() => setIsCategoryHovered(false)}
          >
            <HiBars3 className="text-xl" />
            <span>categorieën</span>
            <FaAngleDown className="text-xl" />
          </div>
          <form
            onClick={() => setIsOpenTopbar(true)}
            className={`${
              hasScrolled && "md:flex hidden"
            } md:order-3 order-5 md:w-auto md:flex-1 w-full flex items-center bg-[#EFEFEF] hover:bg-[#DFDFDF] transition-all duration-300 rounded-full px-5 py-1`}
          >
            <input
              type="text"
              placeholder="waar ben je naar op zoek?"
              className="flex-1  border-0 bg-transparent"
            />
            <IoSearchOutline className="text-2xl" />
          </form>
          <div className="order-4 flex items-center md:gap-7 gap-4">
            {hasScrolled && (
              <IoSearchOutline
                onClick={() => setIsOpenTopbar(true)}
                className="text-2xl mx-3 md:hidden cursor-pointer"
              />
            )}
            <Link
              className="flex items-center gap-3"
              onClick={() => setIsOpen(true)}
            >
              <img src={user} alt="" className="h-5" />

              <span className="font-semibold md:block hidden">inloggen</span>
            </Link>
            <Link>
              <img src={heart} alt="" className="h-5 md:block hidden" />
            </Link>
            <Link>
              <img src={bag} alt="" className="h-5" />
            </Link>

            <HiBars3 className="text-2xl lg:hidden ms-2" />
          </div>{" "}
        </div>
        <div className="absolute top-full left-0 right-0  bg-white">
          <div
            className="mx-32 cat-btn"
            onMouseEnter={() => setIsCategoryHovered(true)}
            onMouseLeave={() => setIsCategoryHovered(false)}
          >
            <Categories
              className={`${
                isCategoryHovered ? "h-[85vh]" : "h-0"
              } transition-all duration-500 overflow-hidden bg-white`}
            />
          </div>
        </div>
      </div>

      <Sidebar open={isOpen} onClose={handleClose} />
      <Topbar className={className} open={isOpenTopbar} onClose={handleClose} />
    </div>
  );
};

export default Navbar;
