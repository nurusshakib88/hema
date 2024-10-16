import React from "react";
import { Link } from "react-router-dom";
import FooterTopData from "../data/FooterTopData.json";
import { LuSearch } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { socialData } from "../data/SocialData";
import nix18 from "../assets/footer/nix18.png";
import waarborg from "../assets/footer/waarborg.png";

import siteLogo from "../assets/logo.svg";

const Footer = ({ className }) => {
  const { footerTop, footerBottom } = FooterTopData;
  return (
    <div className="xl:mt-32 mt-20">
      <div className={className}>
        <h1 className="text-3xl font-bold mb-10">Ontdek alles</h1>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-x-10 gap-y-12">
          {footerTop.categories.map((category) => (
            <div key={category.name} className="col-span-1">
              <h2 className="font-semibold mb-4">{category.name}</h2>
              <ul className="font-[350] text-sm space-y-3">
                {category.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${className} grid grid-cols-3  gap-5 bg-[#A51CF8] text-white py-10 lg:my-16 my-5 colored-footer`}
      >
        <div className="xl:order-1 order-2 xl:col-span-1 col-span-3">
          <h1 className="text-3xl font-bold mb-3">hulp nodig?</h1>
          <ul>
            <li>
              <Link className="border-b hover:border-transparent  hover:text-[#8B6976] transition-color ease-in-out duration-300">
                mijn bestelling
              </Link>
            </li>
            <li>
              <Link className="border-b hover:border-transparent  hover:text-[#8B6976] transition-color ease-in-out duration-300">
                bezorgen of afhalen
              </Link>
            </li>
            <li>
              <Link className="border-b hover:border-transparent  hover:text-[#8B6976] transition-color ease-in-out duration-300">
                ruilen en retourneren
              </Link>
            </li>
          </ul>
        </div>
        <div className="xl:order-2 order-3 xl:col-span-1 col-span-3">
          <h1 className="text-3xl font-bold mb-3">andere vraag?</h1>
          <p>
            ga naar{" "}
            <Link>
              <Link
                to="/klantenservice"
                className="border-b hover:border-transparent  hover:text-[#8B6976] transition-color ease-in-out duration-300"
              >
                onze klantenservice
              </Link>
            </Link>
          </p>
        </div>
        <div className="xl:order-3 order-1 xl:col-span-1 col-span-3">
          <h1 className="text-3xl font-bold mb-3 flex gap-3 items-center">
            <FaLocationDot /> vind een winkel
          </h1>
          <p>zoek een winkel bij jou in de buurt</p>
          <form className="flex items-center justify-between xl:p-4 px-4 py-2 bg-white rounded-lg my-4">
            <input
              type="text"
              className="pe-4 border-0 bg-transparent w-full text-gray-600"
              placeholder="vul postcode of plaats in"
            />
            <LuSearch className="text-black text-xl" />
          </form>
        </div>
      </div>
      <div
        className={`${className} grid grid-cols-3 gap-x-5  md:gap-y-5 gap-y-10 lg:my-10 my-5 `}
      >
        <div className="xl:border-b-0 border-b border-gray-300 xl:py-0 py-5 xl:order-1 order-2 xl:col-span-1 col-span-3">
          <h1 className="xl:text-4xl text-lg font-bold w-full mb-5">
            volg HEMA
          </h1>
          <div className="flex gap-3 items-center">
            {socialData[0].socials.map((socialItem, index) => (
              <Link key={index} to={socialItem.link} target="_blank">
                <img
                  src={socialItem.icon}
                  alt={`social-icon-${index}`}
                  className="w-7"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="xl:border-b-0 border-b border-gray-300 xl:py-0 py-5 xl:order-2 order-3 xl:col-span-1 col-span-3">
          <h1 className="xl:text-4xl text-lg font-bold w-full mb-5">
            makkelijk betalen*
          </h1>
          <div className="flex gap-3 items-center">
            {socialData[1].cards.map((socialItem, index) => (
              <Link key={index} to={socialItem.link} target="_blank">
                <img
                  src={socialItem.icon}
                  alt={`social-icon-${index}`}
                  className="w-7"
                />
              </Link>
            ))}
          </div>
          <p className="mt-3 text-xs font-light text-gray-400">
            *afhankelijk van de gekozen bezorgopties
          </p>
        </div>

        <div className="xl:border-b-0 border-b border-gray-300 xl:py-0 py-5 xl:order-3 order-1 xl:col-span-1 col-span-3">
          <h1 className="xl:text-4xl text-lg font-bold w-full mb-4">
            altijd op de hoogte van onze acties
          </h1>
          <p>
            Schrijf je in voor de HEMA nieuwsbrief. Meermaals per week de
            laatste (online) aanbiedingen. Krijg direct 10% korting na
            aanmelding. Afmelden kan altijd.
          </p>

          <form className="w-full flex md:flex-row flex-col gap-2 h-16 mt-5">
            <input
              type="text"
              placeholder="e-mailadres*"
              className="flex-1 rounded-lg border-2 border-gray-300 md:py-0 py-4 px-5"
            />
            <button className="md:h-full md:py-0 py-4 bg-teal-700 hover:bg-teal-800 transition-colors duration-300 font-bold text-white px-10 rounded-lg">
              aanmelden
            </button>
          </form>
        </div>

        <hr className="xl:order-4 hidden xl:block col-span-3 mt-10 border-gray-300" />
      </div>
      <div className={className}>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-x-10 gap-y-12">
          {footerBottom.categories.map((category) => (
            <div key={category.name} className="col-span-1">
              <h2 className="font-medium mb-4">{category.name}</h2>
              <ul className="font-[350] text-sm space-y-3">
                {category.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.link}
                      className="border-b border-transparent border-spacing-3 hover:border-gray-500 transition-all duration-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <hr className="col-span-full mb-10 border-gray-300" />
        </div>
      </div>
      <div className={className}>
        <div className="flex  flex-wrap items-center xl:gap-20 gap-5 justify-between footer-info text-gray-800">
          <img src={siteLogo} alt="" className="w-20 xl:order-1 order-2" />

          <ul className=" xl:order-2 order-1 flex flex-wrap gap-y-3 lowercase xl:ms-auto text-sm font-semibold gap-1 xl:border-b-0 border-b border-gray-300 xl:pb-0 pb-10">
            <li>
              <Link to="/privacy-statement">Privacy Statement</Link>
            </li>
            <li>
              <Link to="/disclaimer">Disclaimer</Link>
            </li>
            <li>
              <Link to="/security">Security</Link>
            </li>
            <li>
              <Link to="/copyright">Copyright</Link>
            </li>
            <li>
              <Link to="/algemene-voorwaarden">Algemene Voorwaarden</Link>
            </li>
            <li>
              <Link to="/cookies">Cookies</Link>
            </li>
            <li className="flex  gap-3 items-center">
              <Link to="/nix-18">
                <span>NIX 18</span>
              </Link>
              <img src={nix18} alt="" className="w-14" />
            </li>
            <li className="flex  gap-3 items-center">
              <Link to="/nix-18-thuiswinkel-waarborg">
                <span>NIX 18 Thuiswinkel Waarborg</span>
              </Link>
              <img src={waarborg} alt="" className="h-5" />
            </li>
          </ul>
        </div>
        <hr className="w-full xl:my-10 my-5 border-gray-300" />
      </div>
      <div
        className={`${className} xl:text-center text-xs text-gray-700 mb-14`}
      >
        <p>HEMA B.V., NDSM-straat 10,1033 SB Amsterdam</p>
        <p>KvK-nummer: 34215639</p>
        <p>IBAN: HEMA NL67INGB0651607663</p>
        <p>Btw-identificatienummer: NL814217412B01</p>
        <p>E-mailadres klantenservice: hemaklantenservice@hema.nl</p>
      </div>
    </div>
  );
};

export default Footer;
