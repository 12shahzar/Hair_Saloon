import Image from "next/image";
import React from "react";

const MembershipCard = ({ data, isSelected, onSelect }) => {
  
  return (
    <div
      onClick={onSelect}
      className={`border relative  w-[52px] h-[63px] md:w-[80px] md:h-[100px] flex flex-col items-center text-center cursor-pointer 
       ${isSelected ? "border-[#EB1C24]" : "border-black"}  bg-white mb-3 sm:mb-0
      `}
    >
      {/* Top Label */}
      <p className="text-[10px] md:text-sm text-black font-covered">
        {data.text}
      </p>

      {/* Center Image */}
      <div className="w-[40px] h-[35px] md:w-[50px] md:h-[45px]">
        <Image
          src={data.image}
          alt="Card image"
          width={100}
          height={100}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Bottom Value */}
      <p
        className={`absolute bottom-[-5px] md:bottom-[-10px] left-1/2 transform -translate-x-1/2 text-[6px] md:text-xs font-futura font-medium  ${
        isSelected ? "text-[#EB1C24]" : "text-black"
      }`}
      >
        {data.small}
      </p>
    </div>
  );
};

export default MembershipCard;
