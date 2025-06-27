"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { image1 } from "@/app/assest";
import {
  MembershipSection,
  Buttons,
  HeaderBar,
  WigProduct,
  Heading,
  NextBtn,
  BackBtn,
} from "@/component";
import RightSection from "@/component/Section/RightSection";
import { useDispatch, useSelector } from "react-redux";
import { confirmItem } from "@/util/util";

const BuildAWigPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedCapCard, setSelectedCapCard] = useState(null);
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleConfirm = () => {
    confirmItem(dispatch, selectedCapCard, "cap");
    router.push("/build-wig");
  };

  return (
    <main className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-5">
        <div className="flex basis-[70%] flex-col ">
          <HeaderBar />

          <div className="border-1 border-black flex flex-col lg:flex-row py-10 px-5 mb-2 lg:h-[800px] overflow-hidden  custom-gradient">
            <div className="w-full lg:w-[60%] flex items-center flex-col">
              <WigProduct />
              <p className="font-futura text-xs text-[#EB1C24] text-center font-semibold my-5 w-[80%] md:block hidden">
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

            <div className="text-center block md:hidden md:mt-0 mt-8">
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

export const RightSidebarSecond = ({
  selectedCard,
  setSelectedCard,
  setIsCardSelected,
}) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/build-wig");
  };

  return (
    <div className="w-full lg:w-[40%] flex flex-col  mt-3  lg:mt-0">
         <div className="flex items-center justify-between mb-3">
        <BackBtn onClick={handleBack} />
      </div>
      <Heading head="HEAD CIRCUMFERENCE" />
   

      <MembershipSection
        data={CAP_DATA}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        setIsCardSelected={setIsCardSelected} // ✅ new prop
      />
      <div className="flex mx-auto gap-5 mt-8">
        {["XS: 20”", "S: 21”", "M: 22”", "L: 23”"].map((text, idx) => (
          <p
            key={idx}
            className="text-[9px] font-medium text-[#EB1C24] font-futura"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

const CAP_DATA = [
  {
    id: 1,
    image: image1,
    text: "CAP SIZE",
    small: "XS",
    price: 100,
  },
  {
    id: 2,
    image: image1,
    text: "CAP SIZE",
    small: "S",
    price: 200,
  },
  {
    id: 3,
    image: image1,
    text: "CAP SIZE",
    small: "M",
    price: 400,
  },
  {
    id: 4,
    image: image1,
    text: "CAP SIZE",
    small: "L",
    price: 100,
  },
];
