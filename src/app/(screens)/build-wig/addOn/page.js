"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { addOn1, addOn2, addOn3, image1, image5, image7 } from "@/app/assest";
import {
  MembershipSection,
  Buttons,
  HeaderBar,
  WigProduct,
  Heading,
  BackBtn,
  NextBtn,
  MembershipCard,
} from "@/component";
import RightSection from "@/component/Section/RightSection";
import { useDispatch, useSelector } from "react-redux";
import { confirmItem } from "@/util/util";

const BuildAWigPage = () => {
  const [selectedCapCard, setSelectedCapCard] = useState(null);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleConfirm = () => {
    confirmItem(dispatch, selectedCapCard);
    router.push("/build-wig");
  };
  return (
    <main className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-5">
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
                  ${selectedCapCard?.price || 0} USD
                </p>
              </div>
            </div>
            <RightSidebarSecond
              selectedCard={selectedCapCard}
              setSelectedCard={setSelectedCapCard}
              setIsCardSelected={setIsCardSelected}
            />
            <div className="text-center block md:hidden md:mt-0 ">
              <p className="font-futura text-[12px] text-[#909090] font-medium">
                TOTAL DUE
              </p>
              <p className="font-futura text-[13px] text-black font-medium">
               ${selectedCapCard?.price || 0} USD
              </p>
            </div>
          </div>


          <Buttons
            text="CONFIRM SELECTION"
            onClick={handleConfirm}
            disabled={!isCardSelected}
          />
        </div>

        <RightSection />
      </div>
    </main>
  );
};

export default BuildAWigPage;

const GAP_DATA = [
  {
    id: 1,
    image: addOn1,
    text: "ADD-ON",
    small: "BLEACH",
    price: 100,
  },
  {
    id: 2,
    image: addOn2,
    text: "ADD-ON",
    small: "PLUCK",
    price: 200,
  },
  {
    id: 3,
    image: addOn3,
    text: "ADD-ON",
    small: "CLIPENDX",
    price: 300,
  },
];

export const RightSidebarSecond = ({ selectedCard, setSelectedCard ,setIsCardSelected,}) => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/build-wig");
  };
  return (
    <div className="w-full lg:w-1/2 flex flex-col  mt-3 lg:mt-0">
       <div className="flex items-center justify-between mb-3">
        <BackBtn onClick={handleBack} />
      </div>
      <Heading head="CUSTOMIZATION KIT" />
     
      <div className="flex flex-col gap-5  mx-auto mt-5 ">
        <div className="flex-1 lg:overflow-y-auto space-y-5 px-2 scrollbar-hidden">
          <div className="flex flex-col gap-5  mx-auto ">
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-auto justify-evenly">
              {GAP_DATA.map((data, index) => (
                <MembershipCard
                  key={index}
                  data={data}
                  isSelected={selectedCard?.id === data.id}
                   onSelect={() => {
    setSelectedCard(data);
    setIsCardSelected(true); // ✅ update this
  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="font-futura text-[10px] md:text-xs text-[#EB1C24] text-center font-medium my-8 w-[100%]">
        PLEASE EXPECT AN ADDITIONAL 5-7 DAYS OF PROCESSING TIME.
      </p>
    </div>
  );
};
