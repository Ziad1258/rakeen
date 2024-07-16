import React from "react";
import workImg from "../assets/workTeam.jpeg";
import rakeenImg from "../assets/rakeen.png";

function Definition() {
  return (
    <section
      id="definition"
      className="mySection"
      style={{ marginTop: "calc(100vh - 70px)" }}
    >
      <h1 className="title">نبذة تعريفية</h1>
      <div className="flex flex-col flex-1 lg:flex-row md:items-center gap-16 lg:gap-0">
        <p
          style={{ lineHeight: "2.5" }}
          className="text-base md:text-lg lg:text-xl xl:text-2xl font-thin md:px-5 flex-1"
        >
          أسست شركة 'ركين التنمية العقارية' علي يد خبراء متخصصين في مجالات
          الإستثمار العقاري والمقاولات، مستثمرة الخبرات الطويلة والعلاقات
          الممتدة داخل المجال، ما جعلها تنمو نمواً متسارعاً وتستقطب مزيدًا من
          الكفاءات المهنية العالية، وتمتلك الأصول والموارد لمسيرتها والمحققة
          لتطلّعات عملائها
        </p>
        <div className="flex flex-1  justify-center h-full">
          <div className="relative h-72 md:h-[350px] lg:h-[300px] xl:h-[350px]">
            <img
              className="rounded-lg aspect-square h-full"
              src={workImg}
              alt="work team"
            />
            <img
              src={rakeenImg}
              alt="rakeen logo"
              className="absolute  hidden xs:block -left-[30%] top-0 h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Definition;
