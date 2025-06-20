"use client";
import React, { useState } from "react";
import Image from "next/image";
import { back, search, tv, heart, head, menu, cart } from "@/app/assest";

const HeaderBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="border-1 border-black flex justify-between items-center py-4 w-full mb-8 px-4 custom-gradient">
        <div className="flex gap-5">
          <Image src={back} alt="Back" width={10} height={10} />
          <Image src={search} alt="Search icon" width={16} height={15} />
        </div>

        <p className="font-futura text-sm sm:text-lg">
          {"BUILD-A-WIG >"} <span className="text-[#EB1C24]">NOIR</span>
        </p>

        <div className="gap-3 hidden md:flex">
          <Image
            src={tv}
            alt="TV icon"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={heart}
            alt="Favorites"
            width={23}
            height={19}
            className="cursor-pointer"
          />
          <Image
            src={head}
            alt="Profile"
            width={18}
            height={21}
            className="cursor-pointer"
          />
        </div>

        <div className="gap-5 flex md:hidden">
          <Image
            src={cart}
            alt="Cart"
            width={20}
            height={20}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          />
          <Image
            src={menu}
            alt="Menu"
            width={15}
            height={12}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Menu Panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#00000080] bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 w-[90%] h-[300px] overflow-auto">
            <h1 className="text-xl font-futura text-center font-medium">PRICE LIST</h1>
            <ul className="space-y-3 text-sm font-futura text-black">
              
              <li className="cursor-pointer">Profile</li>
              <li className="cursor-pointer">Favorites</li>
              <li className="cursor-pointer">Orders</li>
              <li className="cursor-pointer">Settings</li>
              <li className="cursor-pointer">Support</li>
              <li className="cursor-pointer">Logout</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderBar;
