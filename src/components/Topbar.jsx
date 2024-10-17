import { Drawer } from "flowbite-react";
import { IoArrowBack, IoClose, IoSearchOutline } from "react-icons/io5";
import SiteLogo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Topbar = ({ open, onClose, className }) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      position="top"
      className={`${className} md:py-6 w-full xl:h-max h-screen`}
    >
      <Drawer.Items>
        <div className="xl:grid grid-cols-5 xl:gap-x-40 ">
          <Link>
            <img
              src={SiteLogo}
              alt="hema-logo"
              className="xl:w-14 h-14 hidden xl:block"
            />
          </Link>
          <div className="col-span-3">
            <form className="md:w-auto sm:flex-1 w-full flex items-center bg-[#EFEFEF] hover:bg-[#DFDFDF] transition-all duration-300 rounded-full px-5 h-12 my-2">
              <button onClick={onClose} type="button">
                <IoArrowBack className="text-xl" />
              </button>
              <input
                type="text"
                placeholder="waar ben je naar op zoek?"
                className="flex-1  border-0 bg-transparent"
              />
              <IoSearchOutline className="text-2xl hidden md:block" />
            </form>
            <div className="mt-12 text-gray-700">
              <h1 className="font-bold text-xl mb-10">populair</h1>
              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <IoSearchOutline className="text-2xl" /> <span>denim</span>
                </li>
                <li className="flex items-center gap-3">
                  <IoSearchOutline className="text-2xl" /> <span>nijntje</span>
                </li>
                <li className="flex items-center gap-3">
                  <IoSearchOutline className="text-2xl" /> <span>pyjama</span>
                </li>
                <li className="flex items-center gap-3">
                  <IoSearchOutline className="text-2xl" />{" "}
                  <span>magnetische</span>
                </li>
                <li className="flex items-center gap-3">
                  <IoSearchOutline className="text-2xl" /> <span>takkie</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-full hidden xl:block">
            <button
              onClick={onClose}
              className="ms-auto  h-14 flex items-center gap-3"
            >
              <span className="font-semibold">annuleren</span>
              <IoClose className="text-3xl" />
            </button>
          </div>
        </div>
      </Drawer.Items>
    </Drawer>
  );
};

export default Topbar;
