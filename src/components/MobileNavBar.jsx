import React, { useContext } from "react";
import { RakeenContext } from "../context/ContextProvider";
import { navbarData } from "../data";
import { FaChevronDown } from "react-icons/fa6";
import { rakeenDev } from "../data";
import { IoLogoWhatsapp } from "react-icons/io";

function MobileNavBar() {
  const { showNav, showdorpNav } = useContext(RakeenContext);
  return (
    showNav && (
      <div className="absolute left-0 right-0 top-0 bottom-0 cursor-pointer bg-[#000000a6]   flex items-center p-5    z-[1000000]">
        <div className="w-full sm:w-[80%] mx-auto   bg-[#4a2827] rounded-md shadow-lg">
          <ul className="flex flex-col">
            {navbarData.map((navLink, index) => {
              return (
                <li key={index} className=" border-b border-gray-500 ">
                  <a
                    href={navLink.href}
                    className="text-gray-300 hover:text-white w-full h-full flex p-4"
                  >
                    {navLink.name}
                  </a>
                </li>
              );
            })}
            <div className="relative ">
              <li
                id="rakeen"
                className=" text-gray-300 hover:text-white cursor-pointer    h-full   flex items-center gap-2 p-4 border-b border-gray-500  "
              >
                ركين التنمية
                <FaChevronDown className="   mt-1 " />
              </li>
              <ul
                style={{
                  opacity: showdorpNav ? "1" : "0",
                  scale: showdorpNav ? "1" : "0",
                }}
                className="absolute top-full right-0 mt-1  bg- w-48 bg-[#4b2928] border border-gray-500 rounded-md flex flex-col transition-all duration-300 ease-linear  "
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
            <li className="text-gray-300 hover:text-white  h-full flex items-center text-lg  ">
              <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=966509270172&text=" className="flex gap-2 w-full h-full p-4">
                تواصل معنا
                <IoLogoWhatsapp
                  size={24}
                  fill="green"
                  className="w-8 h-8 p-[1px] bg-white rounded-full "
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  );
}

export default MobileNavBar;
