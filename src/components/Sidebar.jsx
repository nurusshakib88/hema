import { useState } from "react";
import { Drawer, HR } from "flowbite-react";
import { FaCircleCheck, FaRegEnvelope } from "react-icons/fa6";
import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";
import { RiLockLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Prevent input focus loss when clicking on the button/icon
  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      position="right"
      className="w-[28rem] p-5 scrollbar-none"
    >
      <Drawer.Items>
        <div className="space-y-4">
          <button onClick={onClose} className="flex ms-auto">
            <IoClose className="text-3xl mb-3" />
          </button>
          <h1 className="font-bold text-3xl mb-10">inloggen</h1>

          <h2 className="font-bold text-xl">bestaande klanten</h2>

          <div className="flex items-center border-2 rounded-lg">
            <div className="flex-1 relative h-14">
              <input
                type="text"
                className="peer focus:placeholder-transparent ps-12 pe-5 border-0 w-full z-40 transition-all duration-75 h-full"
                placeholder="e-mailadres"
              />
              <label className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0  peer-focus:z-40 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs bg-transparent peer-focus:text-gray-600 -z-10">
                e-mailadres
              </label>

              <FaRegEnvelope className="absolute top-1/2 transform -translate-y-1/2 text-2xl mx-3" />
            </div>
          </div>

          <div className="flex items-center border-2 rounded-lg">
            <div className="flex-1 relative h-14">
              <input
                type={showPassword ? "text" : "password"} // Toggle between text and password
                className="peer focus:placeholder-transparent ps-12 pe-5 border-0 w-full z-40 transition-all duration-75 h-full"
                placeholder="wachtwoord"
              />
              <label className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0  peer-focus:z-40 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs bg-transparent peer-focus:text-gray-600 -z-10">
                wachtwoord*
              </label>
              <RiLockLine className="absolute top-1/2 transform -translate-y-1/2 text-2xl mx-3" />{" "}
              <button
                onClick={handleTogglePassword}
                className="absolute top-1/2 transform -translate-y-1/2 text-2xl mx-3 right-0"
                onMouseDown={handleMouseDown}
              >
                {showPassword ? (
                  <IoEyeOff className="text-2xl" />
                ) : (
                  <IoEye className="text-2xl" />
                )}
              </button>
            </div>
          </div>

          <div>
            <Link to="/signup" className="underline underline-offset-2">
              wachtwoord vergeten?
            </Link>
          </div>

          <button className="w-full bg-[#00828B] hover:bg-[#00565B] text-white rounded-md py-4 transition-all duration-300 font-bold">
            inloggen
          </button>
          <HR.Text text="of" className="bg-gray-300 w-full" />

          <div className="space-y-2">
            <h1 className="font-bold mb-3 text-xl">nieuw bij HEMA </h1>
            <p className="flex items-center gap-3">
              <FaCircleCheck className="text-xl text-lime-800" />
              start met 10% korting
            </p>
            <p className="flex items-center gap-3">
              <FaCircleCheck className="text-xl text-lime-800" />
              spaar met elke euro 1 punt
            </p>
            <p className="flex items-center gap-3">
              <FaCircleCheck className="text-xl text-lime-800" />
              een gratis tompouce op je verjaardag
            </p>
          </div>
          <div className="flex items-center border-2 rounded-lg">
            <div className="flex-1 relative h-14">
              <input
                type="text"
                className="peer focus:placeholder-transparent ps-12 pe-5 border-0 w-full z-40 transition-all duration-75 h-full"
                placeholder="e-mailadres"
              />
              <label className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0  peer-focus:z-40 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs bg-transparent peer-focus:text-gray-600 -z-10">
                e-mailadres
              </label>

              <FaRegEnvelope className="absolute top-1/2 transform -translate-y-1/2 text-2xl mx-3" />
            </div>
          </div>
          <button className="w-full py-4 border-black border-2 font-bold  rounded-lg">
            account aanmaken
          </button>
        </div>
      </Drawer.Items>
    </Drawer>
  );
};

export default Sidebar;
