"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  color1,
  color10,
  color11,
  color12,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  color8,
  color9,
  image1,
} from "@/app/assest";
import {
  MembershipSection,
  Buttons,
  HeaderBar,
  WigProduct,
  Heading,
  BackBtn,
  NextBtn,
} from "@/component";
import RightSection from "@/component/Section/RightSection";
import { useDispatch } from "react-redux";
import { confirmItem } from "@/util/util";

const BuildAWigPage = () => {
  const dispatch = useDispatch()
  const [selectedCapCard, setSelectedCapCard] = useState(null);
  const handleConfirm = () => {
     confirmItem(dispatch, selectedCapCard); 
   };
  return (
    <main className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-10">
        <div className="flex basis-[70%] flex-col ">
          <HeaderBar />

          <div className="border-1 border-black flex flex-col lg:flex-row py-10 px-5 mb-2 lg:h-[800px] overflow-hidden custom-gradient">
            <div className="w-full lg:w-1/2 flex items-center flex-col">
              <WigProduct />
              <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-semibold my-5 w-[80%] md:block hidden">
                PLEASE NOTE: EACH CUSTOM UNIT IS MADE TO ORDER. WE ENSURE ALL
                DETAILS ARE ACCURATE + PRECISE. EXPECT 2-4 WEEKS OF PROCESSING
                TIME FOR THIS UNIT.
              </p>
              <div className="text-center md:block hidden">
                <p className="font-futura text-sm text-[#909090] font-medium">
                  TOTAL DUE
                </p>
                <p className="font-futura text-base text-black font-medium">
                  $680 USD
                </p>
              </div>
            </div>
            <RightSidebarThird
              selectedCard={selectedCapCard}
              setSelectedCard={setSelectedCapCard}
            />
            <div className="text-center block md:hidden md:mt-0 ">
              <p className="font-futura text-[13px] text-[#909090] font-medium">
                TOTAL DUE
              </p>
              <p className="font-futura text-[13px] text-black font-medium">
                $680 USD
              </p>
            </div>
          </div>

          {selectedCapCard ? (
            <Buttons text="CONFIRM SELECTION" onClick={handleConfirm} />
          ) : (
            <Buttons text="ADD TO BAG" disabled />
          )}
        </div>

        <RightSection />
      </div>
    </main>
  );
};

export default BuildAWigPage;

export const RightSidebarThird = ({ selectedCard, setSelectedCard }) => {
  const router = useRouter(); // add this inside RightSidebarThird

  const handleBack = () => {
    router.push("/build-wig");
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col mt-5 lg:mt-0 lg:h-[700px]">
      <Heading head="STRAND SHAFT" />
      <div className="flex items-center justify-between">
        <BackBtn onClick={handleBack} />
      </div>
      <div className="flex-1 lg:overflow-y-auto space-y-5 px-2 scrollbar-hidden">
        <MembershipSection
          data={COLOR_DATA}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </div>

      <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-semibold my-8 w-[80%] mx-auto">
        COLOR MATCH IS PROXIMATE, BUT NOT EXACT. EXPECT AN ADDITIONAL 2 WEEKS OF
        PROCESSING TIME.
      </p>
    </div>
  );
};

const COLOR_DATA = [
  {
    id: 1,
    image: color1,
    text: "COLOR",
    small: "JETBLACK",
  },
  {
    id: 2,
    image: color2,
    text: "COLOR",
    small: "OFFBLACK",
  },
  {
    id: 3,
    image: color3,
    text: "COLOR",
    small: "ESPRESSO",
  },
  {
    id: 4,
    image: color4,
    text: "COLOR",
    small: "ESPRESSO",
  },
  {
    id: 5,
    image: color5,
    text: "COLOR",
    small: "CHESTNUT",
  },
  {
    id: 6,
    image: color6,
    text: "COLOR",
    small: "COPPER",
  },
  {
    id: 7,
    image: color7,
    text: "COLOR",
    small: "AUBURN",
  },

  {
    id: 8,
    image: color8,
    text: "COLOR",
    small: "HONEY",
  },
  {
    id: 9,
    image: color9,
    text: "COLOR",
    small: "GINGER",
  },
  {
    id: 10,
    image: color10,
    text: "COLOR",
    small: "SCARLETT",
  },
  {
    id: 11,
    image: color11,
    text: "COLOR",
    small: "BURGUNDY",
  },
  {
    id: 12,
    image: color12,
    text: "COLOR",
    small: "PLUM",
  },
  {
    id: 13,
    image: color12,
    text: "COLOR",
    small: "PLUM",
  },
  {
    id: 14,
    image: color1,
    text: "COLOR",
    small: "PLUM",
  },
  {
    id: 15,
    image: color2,
    text: "COLOR",
    small: "PLUM",
  },
];
