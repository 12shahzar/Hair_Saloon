"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  MembershipSection,
  Buttons,
  HeaderBar,
  WigProduct,
  Heading,
  MembershipCard,
  NextBtn,
  BackBtn,
} from "@/component";
import RightSection from "@/component/Section/RightSection";
import { style1, style2, style3, style4 } from "@/app/assest";
import { confirmItem } from "@/util/util";
import { useDispatch } from "react-redux";

const BuildAWigPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [basicSelected, setBasicSelected] = useState(null);
  const [premiumSelected, setPremiumSelected] = useState(null);
  const [isCardSelected, setIsCardSelected] = useState(false);

  const totalPrice = (basicSelected?.price || 0) + (premiumSelected?.price || 0);

  useEffect(() => {
    setIsCardSelected(basicSelected !== null && premiumSelected !== null);
  }, [basicSelected, premiumSelected]);

  const handleConfirm = () => {
    if (!basicSelected || !premiumSelected) return;

    const mergedCard = {
      ...basicSelected,
      premium: premiumSelected,
    };

    confirmItem(dispatch, mergedCard, "extraStyle");
    router.push("/build-wig");
  };

  return (
    <main className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-5">
        <div className="flex basis-[70%] flex-col ">
          <HeaderBar />

          <div className="border border-black flex flex-col lg:flex-row py-10 px-5 mb-2 lg:h-[800px] overflow-hidden custom-gradient">
            <div className="w-full lg:w-[60%] flex items-center flex-col">
              <WigProduct />
              <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-semibold my-5 w-[80%] sm:block hidden ">
                PLEASE NOTE: EACH CUSTOM UNIT IS MADE TO ORDER. WE ENSURE ALL DETAILS ARE ACCURATE + PRECISE. EXPECT 2-4 WEEKS OF PROCESSING TIME FOR THIS UNIT.
              </p>
              <div className="text-center hidden md:block">
                <p className="font-futura text-sm text-[#909090] font-medium">TOTAL DUE</p>
                <p className="font-futura text-base text-black font-medium">${totalPrice} USD</p>
              </div>
            </div>

            <RightSidebarFirst
              basicSelected={basicSelected}
              setBasicSelected={setBasicSelected}
              premiumSelected={premiumSelected}
              setPremiumSelected={setPremiumSelected}
            />

            <p className="font-futura text-[9px] leading-[15px] uppercase text-[#EB1C24] text-center font-medium mt-8 w-[90%] sm:hidden block mx-auto ">
              PLEASE EXPECT AN ADDITIONAL 5-7 DAYS OF PROCESSING TIME.
            </p>
            <div className="text-center block md:hidden md:mt-0 mt-8">
              <p className="font-futura text-[12px] text-[#909090] font-medium">TOTAL DUE</p>
              <p className="font-futura text-[13px] text-black font-medium">${totalPrice} USD</p>
            </div>
          </div>

          <Buttons text="CONFIRM SELECTION" onClick={handleConfirm} disabled={!isCardSelected} />
        </div>

        <RightSection />
      </div>
    </main>
  );
};

export default BuildAWigPage;




export const RightSidebarFirst = ({
  basicSelected,
  setBasicSelected,
  premiumSelected,
  setPremiumSelected,
}) => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/build-wig");
  };

  return (
    <div className="w-full lg:w-[40%] flex flex-col mt-3 lg:mt-0 lg:h-[700px]">
      <div className="flex items-center justify-between mb-3">
        <BackBtn onClick={handleBack} />
      </div>

      {/* BASIC MEMBERSHIP */}
      <div className="flex flex-col gap-5 mx-auto mt-5">
        <Heading head="SALON TREATMENTS" />
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 g:gap-8 mx-auto justify-evenly">
          {BASIC_MEMBERSHIP.map((data, index) => (
            <MembershipCard
              key={index}
              data={data}
              isSelected={basicSelected?.id === data.id}
              onSelect={() => setBasicSelected(data)}
            />
          ))}
        </div>
      </div>

      {/* PREMIUM MEMBERSHIP */}
      <div className="flex flex-col gap-5 mx-auto mt-8">
        <Heading head="PART SELECTION" />
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 mx-auto justify-evenly">
          {PREMIUM_MEMBERSHIP.map((data, index) => {
            const isSelected = premiumSelected?.id === data.id;
            const isDisabled = !basicSelected;

            return (
              <div
                key={index}
                onClick={() => {
                  if (!isDisabled) setPremiumSelected(data);
                }}
                className={`border relative pt-1 w-[52px] h-[63px] md:w-[80px] md:h-[100px] flex flex-col bg-white items-center text-center cursor-pointer border-black ${
                  isDisabled ? " cursor-not-allowed" : ""
                }`}
              >
                <p className="text-[10px] md:text-sm text-black font-covered">{data.text}</p>
                <div
                  className={`flex items-center justify-center w-full h-full ${
                    isSelected ? "text-[#EB1C24]" : "text-black"
                  }`}
                >
                  <p className="text-xl font-futura font-light mb-5">{data.image}</p>
                </div>
                <p
                  className={`absolute bottom-[-7px] md:bottom-[-10px] left-1/2 transform -translate-x-1/2 text-[9px] md:text-xs font-futura font-medium ${
                    isSelected ? "text-[#EB1C24]" : "text-black"
                  }`}
                >
                  {data.small }
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


const BASIC_MEMBERSHIP = [
  { id: 1, image: style1, text: "STYLING", small: "BANGS", price: 100 },
  { id: 2, image: style2, text: "STYLING", small: "CRIMPS", price: 100 },
  { id: 3, image: style3, text: "STYLING", small: "FLATIRON", price: 100 },
  { id: 4, image: style4, text: "STYLING", small: "LAYERS", price: 100 },
];

const PREMIUM_MEMBERSHIP = [
  { id: 1, image: "F", text: "STYLING", small: "FREE", price: 100 },,
  { id: 1, image: "L", text: "STYLING", small: "LEFT", price: 100 },
  { id: 2, image: "M", text: "STYLING", small: "MIDDLE", price: 100 },
  { id: 3, image: "R", text: "STYLING", small: "RIGHT", price: 100 },
];

