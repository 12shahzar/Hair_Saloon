
import React from "react";

import { Buttons } from "..";
import { Background } from "@/app/assest";
const Modal = () => {
  return (
    <div
    onClick={(e) => e.stopPropagation()} 
      className="bg-cover bg-center bg-no-repeat w-[95%] h-[180px] gap-3 flex items-center justify-center flex-col pt-2 pb-5 px-5 border border-black"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <h1 className="font-futura text-2xl font-medium text-[#EB1C24] text-center">BUILD-A-WIG</h1>
      <p className="text-sm font-futura font-medium text-black text-center">PREMIUM MEMBERSHIP REQUIRED TO CUSTOMIZE THIS FEATURE </p>
      <Buttons text="UPGRADE SUBSCRIPTION" />
    </div>
  );
};

export default Modal;