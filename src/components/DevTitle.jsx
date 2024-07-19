import React from "react";

function DevTitle({id , active ,  name , bgColor }) {
  return (
    <div className={  ` ${active === id ? `z-10 ${bgColor}` : id === 2 && id !== active ? `z-[5]  ${bgColor} bg-opacity-95    ` : `${bgColor}   z-[2] bg-opacity-50 ` }  absolute  w-48 h-16 p-4   font-bold text-2xl text-white flex justify-center items-center rounded-full   ${id === 1 ? "-mr-40" : id === 3 ? "-ml-40" : ""}`}>
      {name}
    </div>
  );
}

export default DevTitle;
