"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { image1, image5, image7 } from "@/app/assest";
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
import { confirmItem } from "@/util/util";
import { useDispatch, useSelector } from "react-redux";

const BuildAWigPage = () => {
  const dispatch = useDispatch()
     const cartItems = useSelector((state) => state.wigCart.items);
  
  
  const totalPrice = cartItems.length
    ? cartItems.reduce((acc, item) => acc + (item.price || 0), 0)
    : 0;
  const router = useRouter();
  const [selectedCapCard, setSelectedCapCard] = useState(null);
  const handleConfirm = () => {
      confirmItem(dispatch, selectedCapCard,"texture"); 
       router.push("/build-wig");
    };
  return (
    <main className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-10">
        <div className="flex basis-[70%] flex-col ">
          <HeaderBar />

          <div className="border border-black flex flex-col lg:flex-row py-10 px-5 mb-2 lg:h-[800px] overflow-hidden custom-gradient">
            <div className="w-full lg:w-1/2 flex items-center flex-col">
              <WigProduct />
              <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-semibold my-5 w-[80%] md:block hidden">
                PLEASE NOTE: EACH CUSTOM UNIT IS MADE TO ORDER. WE ENSURE ALL
                DETAILS ARE ACCURATE + PRECISE. EXPECT 2-4 WEEKS OF PROCESSING
                TIME FOR THIS UNIT.
              </p>
              <div className="text-center hidden md:block">
                <p className="font-futura text-sm text-[#909090] font-medium">
                  TOTAL DUE
                </p>
                <p className="font-futura text-base text-black font-medium">
                  ${totalPrice} USD
                </p>
              </div>
            </div>

            <RightSidebarSecond
              selectedCard={selectedCapCard}
              setSelectedCard={setSelectedCapCard}
            />
            <div className="text-center block md:hidden md:mt-0 ">
              <p className="font-futura text-[13px] text-[#909090] font-medium">
                TOTAL DUE
              </p>
              <p className="font-futura text-[13px] text-black font-medium">
                ${totalPrice} USD
              </p>
            </div>
          </div>

      <Buttons text="CONFIRM SELECTION" onClick={handleConfirm} />
        </div>

        <RightSection />
      </div>
    </main>
  );
};

export default BuildAWigPage;

export const RightSidebarSecond = ({ selectedCard, setSelectedCard }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/build-wig");
  };
  return (
    <div className="w-full lg:w-1/2 flex flex-col  mt-5 lg:mt-0">
      <Heading head="STRAND SHAFT" />
      <div className="flex items-center justify-between">
        <BackBtn onClick={handleBack} />
      </div>
      <MembershipSection
        data={GAP_DATA}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />

      <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-semibold my-8 w-[100%]">
        HAIR STRANDS ARE SILKY WITH MEDIUM TO HIGH GLOSS & LUSTER.
      </p>
    </div>
  );
};

const GAP_DATA = [
  {
    id: 1,
    image: image5,
    text: "TEXTURE",
    small: "SILKY",
    price:100
  },

  {
    id: 2,
    image: image5,
    text: "TEXTURE",
    small: "KINKY",
    price:100
  },
];
