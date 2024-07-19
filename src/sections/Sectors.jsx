import React from "react";
import { sectorsData, devSectionsData } from "../data";
import DevTitle from "../components/DevTitle";

import rakeenImg from "../assets/rakeen.png";
import workImg from "../assets/skyScrapper.jpg";
function Sectors() {
  return (
    <section id="sectors" className="mySection">
      <h1 className="title">ركين التنمية</h1>
      <div>
        {/* Header */}
        <div className="flex justify-center relative mb-16  h-16">
          {devSectionsData.map((section) => {
            return (
              <DevTitle
                key={section.id}
                id={section.id}
                active={2}
                name={section.name}
                bgColor={section.bgColor}
              />
            );
          })}
        </div>
        {/* Sectors */}
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col  lg:flex-row gap-16 mt-8">
            {/* sectors Boxes */}
            <div className="flex flex-1 flex-col">
              <div className="mb-8">
                <h3 className=" text-4xl font-bold text-red-700"> القطاعات :</h3>
                <p className="text-secondary text-lg my-8 ">
                  {" "}
                  تعمل الشركة في عدة قطاعات، ومنها:
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4  w-full ">
                {sectorsData.map((sector) => {
                  return (
                    <div
                      key={sector.id}
                      className="cursor-pointer bg-gray-100 rounded-md overflow-hidden border relative citiesBox  w-full p-4 flex flex-col gap-4 items-center hover:shadow-lg hover:scale-105 transition-all duration-300  "
                    >
                      <img src={sector.img} alt="" className="w-24 h-24" />
                      <p className="font-bold text-2xl text-primary">
                        {" "}
                        {sector.name}{" "}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hidden sm:flex relative flex-1  ">
              <img
                src={workImg}
                alt=""
                className="sm:w-[70%] w-full h-full mx-auto "
              />
              <img
                src={rakeenImg}
                alt=""
                className="absolute hidden sm:block -left-0 lg:-left-16 h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectors;
