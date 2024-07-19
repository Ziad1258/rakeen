import React from "react";
import { devSectionsData } from "../data";
import DevTitle from "../components/DevTitle";
import { assetsData } from "../data";
import rakeenImg from "../assets/rakeen.png";
import workImg from "../assets/image24.jpeg";

export default function Assets() {
  return (
    <section id="assets" className="mySection">
      <h1 className="title">ركين التنمية</h1>
      {/* header */}
      <div className="flex justify-center relative mb-16  h-16">
        {devSectionsData.map((section) => {
          return (
            <DevTitle
              key={section.id}
              id={section.id}
              active={3}
              name={section.name}
              bgColor={section.bgColor}
            />
          );
        })}
      </div>

      <div cسlassName="flex flex-col gap-8 ">
        <div className="flex flex-col    lg:flex-row gap-16 mt-8">
          {/* assets Boxes */}
          <div className="flex flex-col flex-1">
            <div className="mb-8">
              <h3 className=" text-4xl font-bold text-blue-500"> الأصول :</h3>
              <p className="text-secondary text-lg my-8 ">
                {" "}
                نمو الأصول المملوكة للشركة:
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 flex-1  ">
              {assetsData.map((asset, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer bg-gray-100 rounded-md overflow-hidden border relative citiesBox   p-6 flex flex-col gap-4 items-center text-center hover:shadow-lg hover:scale-105 transition-all duration-300  "
                  >
                    <p className="font-bold text-2xl text-black">
                      {" "}
                      {asset.text}{" "}
                    </p>
                    <p className="font-bold text-2xl text-primary">
                      {" "}
                      {asset.quantity}{" "}
                    </p>
                    <p className="font-bold text-2xl text-secondary">
                      {" "}
                      {asset.value}{" "}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden sm:flex relative flex-1   ">
            <img
              src={workImg}
              alt=""
              className="sm:w-[70%] w-full h-full mx-auto "
            />

            <img
              src={rakeenImg}
              alt=""
              className="absolute hidden sm:block -left-8 lg:-left-8 h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
