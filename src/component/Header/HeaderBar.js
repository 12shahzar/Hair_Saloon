"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  back,
  search,
  tv,
  heart,
  head,
  menu,
  cart,
  cardimage,
  twitter,
  insta,
  facebook,
  tittok,
} from "@/app/assest";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/redux/slices/cartSlices";
import { Buttons, NavLinkItem } from "..";

const HeaderBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropOpen, setisDropOpen] = useState(false);
  const cartItems = useSelector((state) => state.wigCart.items);
  const dispatch = useDispatch();
  return (
    <>
      <div className="border-1 border-black flex justify-between items-center py-3 w-full mb-5 px-5 custom2">
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
            width={25}
            height={25}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          />
          <Image
            src={menu}
            alt="Menu"
            width={20}
            height={5}
            onClick={() => setisDropOpen(!isDropOpen)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Menu Panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#00000080] bg-opacity-50 flex justify-center items-center">
          <div className="bg-white px-5 pt-10 w-full h-screen relative">
            {/* Cross Icon */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-[50px] right-4 text-black text-2xl font-bold"
            >
              &times;
            </button>

            <h1 className="text-xl font-covered mb-5  text-center font-medium">
              YOUR BAG
            </h1>

            <div className="grid grid-cols-2 gap-2">
              {cartItems.map((item, index) => (
                <Card key={index} item={item} dispatch={dispatch}/>
              ))}
            </div>
          </div>
        </div>
      )}
        {isDropOpen && (
        <div className="fixed inset-0 z-50 bg-[#00000080] bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 w-full h-screen relative">
            {/* Cross Icon */}
            <button
              onClick={() => setisDropOpen(false)}
              className="absolute top-4 right-4 text-black text-2xl font-bold"
            >
              &times;
            </button>

         <div className=" p-4 flex flex-col gap-4 ">
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
          <ul className="flex flex-col gap-5">
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
            {/* <Image src={insta} alt="Instagram" width={28} height={28} /> */}
            <Image src={facebook} alt="Facebook" width={30} height={30} />
            <Image src={tittok} alt="TikTok" width={28} height={28} />
          </ul>
        </div>
        <div className="absoulte bottom-0">
        <Buttons text="SIGN OUT" />
        </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderBar;

const Card = ({ item,dispatch }) => {
  return (
    <div className="border border-black flex flex-row gap-3 items-center p-2 relative">
      <div className="w-[50px] h-[50px]">
        <Image
          src={item?.image || cardimage}
          alt="cardimage"
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col">
        <p className="font-covered text-lg font-normal">NOIR</p>
        <p className="font-futura text-[12px] text-[#EB1C24]">{item.text}</p>
        <p className="font-futura text-[12px] text-[#909090] flex">
          <span>{item.text}</span> : {item.small}
        </p>
        <p className="font-futura text-[12px] text-[#909090]">
          $ {item.price} USD
        </p>
      </div>

      {/* ❌ Cross icon for remove */}
      <button
        onClick={() => dispatch(removeFromCart(item.uniqueId))}
        className="absolute top-[-8px] right-2 text-black text-2xl  font-bold"
      >
        &times;
      </button>
    </div>
  );
};

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