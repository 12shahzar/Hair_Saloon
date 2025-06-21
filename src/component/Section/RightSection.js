import React from "react";
import Image from "next/image";
import { cardimage, facebook, insta, tittok, twitter } from "@/app/assest";
import NavLinkItem from "../smallComponent/NavLinkITem";
import { Buttons } from "..";

const RightSection = () => {
  
  return (
    <div className="basis-[30%] flex-col gap-6 hidden lg:flex ">
      <div className="flex flex-col gap-2">
        <div className="border-1 border-black p-4 flex flex-col gap-4 custom-gradient">
          <ul className="flex items-center justify-center gap-4">
            {navLinks.map((item, index) => (
              <NavLinkItem
                classes="text-2xl font-covered"
                key={index}
                path={item.path}
                text={item.text}
              />
            ))}
          </ul>
          <ul className="flex flex-col">
            {subLinks.map((item, index) => (
              <NavLinkItem
                classes="font-futura text-lg font-medium"
                key={index}
                path={item.path}
                text={item.text}
              />
            ))}
          </ul>
          <ul className="flex items-center justify-center gap-4">
            <Image src={twitter} alt="Twitter" width={24} height={24} />
            <Image src={insta} alt="Instagram" width={28} height={28} />
            <Image src={facebook} alt="Facebook" width={30} height={30} />
            <Image src={tittok} alt="TikTok" width={28} height={28} />
          </ul>
        </div>
        <Buttons text="SIGN OUT" />
      </div>

            

       <div className="flex flex-col gap-2">
        <div className="border-1 border-black p-4 flex flex-col gap-4 h-[462px] overflow-hidden custom-gradient">
          <p className="text-2xl font-normal font-covered text-center text-black">
            YOUR BAG
          </p>
          <p className="text-xs text-[#EB1C24] font-medium text-center">
            CHANGE CURRENCY &gt; USD
          </p>
          <div className="grid grid-cols-2 gap-5 overflow-y-auto scrollbar-hidden">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Buttons text="SIGN OUT" />
      </div> 
    </div>
  );
};
const Card = () => {
  return (
    <div>
      <div className="border-1 border-black items-center justify-center flex flex-col py-5">
        <p className="text-xl text-black font-covered text-center">NOIR</p>
        <Image
          src={cardimage}
          alt="cardimage"
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>
      <p className="font-futura text-xs text-center font-medium text-[#909090] mt-2">
        EDIT in BUILD-A-WIG
      </p>
    </div>
  );
};
// Navigation Links
const navLinks = [
  { path: "#", text: "SHOP" },
  { path: "#", text: "TOOLS" },
  { path: "#", text: "BRAND" },
];

const subLinks = [
  { path: "#", text: "ABOUT US" },
  { path: "#", text: "CONTACT" },
  { path: "#", text: "CARE & STORAGE" },
  { path: "#", text: "BECOME A MEMBER" },
  { path: "#", text: "FAQ" },
  { path: "#", text: "PAYMENT + SHIPPING" },
  { path: "#", text: "REVIEWS" },
  { path: "#", text: "TERMS OF SERVICE" },
];

export default RightSection;
