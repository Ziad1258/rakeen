import React from "react";
import { citiesData, devSectionsData } from "../data";
import DevTitle from "../components/DevTitle";

import rakeenImg from "../assets/rakeen.png";
import worldImg from "../assets/countries.jpg";

export default function CountriesDev() {
  return (
    <section id="cities" className="mySection">
      <h1 className="title">ركين التنمية</h1>
      <div>
        {/* Header */}
        <div className="flex justify-center relative mb-16  h-16">
          {devSectionsData.map((section) => {
            return (
              <DevTitle
                key={section.id}
                id={section.id}
                active={1}
                name={section.name}
                bgColor={section.bgColor}
              />
            );
          })}
        </div>
        {/* Cities */}
        <div cسlassName="flex flex-col gap-8 ">
          <div className="flex flex-col lg:items-end lg:flex-row gap-y-16 mt-8">
            {/* cities Boxes */}

            <div className="flex flex-col flex-1">
              <div className="mb-8">
                <h3 className=" text-4xl font-bold"> المدن :</h3>
                <p className="text-secondary text-lg my-8 ">
                  من المدن التي عملت فيها شركة ركين:
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4  ">
                {citiesData.map((service) => {
                  return (
                    <div
                      key={service.id}
                      className="cursor-pointer rounded-md overflow-hidden border relative citiesBox  h-full  md:h-60 "
                    >
                      <img
                        src={service.img}
                        alt={service.name}
                        className="md:h-full h-72  w-full object-fit"
                      />
                      <div className=" absolute left-0 right-0 -bottom-full bg-[#f8d6c9] bg-opacity-80 z-10 py-4 flex flex-col items-center gap-2 transition-all duration-300 ">
                        <h3 className="font-semibold text-2xl text-primary">
                          {" "}
                          {service.id}{" "}
                        </h3>
                        <p className=""> {service.name} </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hidden sm:flex relative flex-1   ">
              <img src={worldImg} alt="" className="w-[70%] mx-auto h-full " />
              <img
                src={rakeenImg}
                alt=""
                className="absolute  -left-8 lg:-left-8 h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
