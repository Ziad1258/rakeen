import React from "react";
import gear1Img from "../assets/gear1.png";
import gear2Img from "../assets/gear2.png";

import { extentionsData } from "../data";
function Extentions() {
  return (
    <section id="extentions" className="mySection">
      <h1 className="title">القيمة المضافة</h1>
      <h3 className="text-primary font-medium text-lg mb-12 ">
        لماذا ركين التنمية؟
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {extentionsData.map((el, index) => {
          return (
            <div
              key={index}
              className=" cursor-pointer flex flex-col items-center bg-gray-100 rounded-lg p-8 gap-8 extention-box"
            >
              <div className="relative flex justify-center items-center ">
                <img
                  src={index % 2 === 0 ? gear2Img : gear1Img}
                  alt="gear"
                  className="h-full w-full spinner"
                />
                <img
                  src={el.icon}
                  alt={el.text}
                  className="absolute h-8 w-8 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 "
                />
              </div>
              <p
                className={` text-lg text-center leading-relaxed font-bold  ${
                  index % 2 === 0 ? 'text-black' : "text-primary"
                } `}
              >
                {el.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Extentions;
