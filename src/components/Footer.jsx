import React from "react";
import rakeenImg from "../assets/logo.png";
import { footerData, servicesData } from "../data";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#4a2827] text-white py-16">
      <div className="container mx-auto px-4 md:px-0 flex flex-col gap-16 ">
        {/* Logo & contact  */}
        <div className="grid md:grid-cols-3 text-center gap-16">
          {/* logo & desc */}
          <div className="flex flex-col gap-8 ">
            <img src={rakeenImg} alt="logo" className="w-[50%] mx-auto logoAnimated" />
            <p className="text-textColor">
              شركة المقاولات المتكاملة الرائدة في مجال البناء والتشييد، تتمتع
              بخبرة عالية وفريق عمل محترف يسعى لتحقيق أعلى مستويات الجودة
              والتميز
            </p>
          </div>
          {/* services List */}
          <div className="flex flex-col gap-16">
            <h1 className="font-bold text-4xl">خدماتنا</h1>
            <ul className="flex flex-col gap-8">
              {servicesData.map((service, index) => {
                if (service.id <= 4) {
                  return (
                    <li key={index}>
                      <a
                        href='#services'
                        
                        className="text-textColor hover:text-white transition-all duration-300 cursor-pointer "
                      >
                        {service.name}
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          {/* contact */}

          <div className="flex flex-col gap-16 items-center">
            <h1 className="font-bold text-4xl">تواصل معنا</h1>

            <div className="flex flex-col  gap-8">
              {footerData[0].map((el, index) => {
                return (
                  <a href={el.link} target="_blank"  className="flex gap-4  items-center  ">
                    <span className="bg-gray-500 p-2 rounded-full animate-pulse">
                      {el.logo}
                    </span>
                    <p className="text-textColor hover:text-white transition-all duration-300"> {el.text} </p>
                  </a>
                );
              })}
            </div>
            <div className="flex gap-8 ">
              {footerData[1].map((el, index) => {
                return (
                  <div key={index} className="flex ">
                    <a
                      href={el.link}
                      target="_blank"
                      rel="noreferrer"
                      className="  w-8 h-8 rounded-full cursor-pointer text-xl font-semibold" 
                    >
                     <img src={el.logo} className="w-full h-full" alt="" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* copyright */}
        <p className="text-center flex items-center justify-center gap-2 text-lg copyright ">
          Created with <span className="text-red-500"> <FaHeart /> </span> by <a href="#home"  target="_blank" rel="noreferrer" className="text-textColor font-smeibold hover:text-white">Ferdjani Ziad  </a> &copy; 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
