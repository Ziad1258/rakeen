// Navbar.jsx

import logo from "../assets/logo.png";
import { navbarData, rakeenDev } from "../data";
import { FaChevronDown } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import { RakeenContext } from "../context/ContextProvider";

function Navbar() {
  const { showdorpNav , toggleRef } = useContext(RakeenContext);

  return (
    <div className="bg-black h-[70px] relative z-10 bg-transparent ">
      <div className="flex md:flex-col lg:flex-row container px-4 md:mx-0 md:items-start lg:items-center mx-auto h-full ">
        {/* Logo */}
        <img src={logo} alt="logo" className="md:max-h-full" />
        {/* Menu */}
        <ul className="hidden  md:flex flex-1  justify-center gap-8 h-full">
          {/* Main Links */}
          {navbarData.map((link, index) => {
            return (
              <li
                key={index}
                className="text-gray-300  h-full flex items-center text-lg navLink"
              >
                <a href={link.href}> {link.name}</a>
              </li>
            );
          })}

          {/* Dropdown */}
          <div className="relative ">
            <li
              id="rakeen"
              className="text-gray-300 cursor-pointer   h-full  text-lg flex items-center gap-2 navLink "
            >
              ركين التنمية
              <FaChevronDown className="   mt-1 " />
            </li>
            <ul
              style={{
                opacity: showdorpNav ? "1" : "0",
                scale: showdorpNav ? "1" : "0",
              }}
              className="absolute top-full left-0 mt-2   bg- w-48 bg-[#4b2928] border rounded-md flex flex-col transition-all duration-300 ease-linear  "
            >
              {rakeenDev.map((el, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      index !== rakeenDev.length - 1 ? "border-b" : ""
                    } p-2 text-gray-300 hover:text-white `}
                  >
                    <a href={el.href}>{el.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Whatsapp */}
          <li className="text-gray-300  h-full flex items-center text-lg navLink ">
            <a href="#" className="flex gap-2">
              تواصل معنا
              <IoLogoWhatsapp
                size={24}
                fill="green"
                className="w-8 h-8 p-[1px] bg-white rounded-full "
              />
            </a>
          </li>
        </ul>
        {/* Toggle Menu */}
        <div className="flex flex-1 justify-end items-center h-full md:hidden text-white">
          <div
            id="toggle-icon"
            className="h-full flex items-center cursor-pointer"
          >
            <FaBars size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
