import React from "react";
import BackgoundImage from "../assets/background.jpg";
import rakeen from "../assets/home-logo.png";
function Home() {
  return (
    <section
      className="absolute left-0 right-0 top-0 bottom-0 z-20 flex  justify-center items-center "
      id="home"
      style={{
        backgroundImage: `url(${BackgoundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center  relative h-full ">
        <img className="w-[40%] md:w-[40%] " src={rakeen} alt="rakeen" />
        <h2 className="text-gray-300 text-xl font-semibold p-2 bg-green-600 flex justify-center items-center rounded-lg   ">
          يدك اليمين
        </h2>
        <div className="absolute bottom-10 text-center xs:left-8 text-white">عضو الهيئة السعودية للمقاولين</div>
      </div>
    </section>
  );
}

export default Home;
