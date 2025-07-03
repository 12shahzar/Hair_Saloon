"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { image1, image7 } from "@/app/assest";
import {
  MembershipSection,
  Buttons,
  HeaderBar,
  WigProduct,
  Heading,
  NextBtn,
  BackBtn,
  useScrollOnPathChange,
} from "@/component";
import RightSection from "@/component/Section/RightSection";
import { confirmItem } from "@/util/util";
import { useDispatch, useSelector } from "react-redux";

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
  const cardRef = useRef();
  useScrollOnPathChange(cardRef);
  return (
    <div
      ref={cardRef}
      className="w-full lg:w-[40%] flex flex-col  mt-3  lg:mt-0"
    >
      <div className="flex items-center justify-between  ml-[25px] md:ml-0">
        <BackBtn onClick={handleBack} />
      </div>
      <Heading head="VENTILLATION EFFECT" />

      <MembershipSection
        data={CAP_DATA}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        setIsCardSelected={setIsCardSelected}
        className="flex items-center"
      />

      <div className="flex mx-auto gap-5 mt-8">
        <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-medium my-8 w-[100%]">
          {selectedCard?.para ||
            "PLEASE EXPECT AN ADDITIONAL 3-5 DAYS OF PROCESSING TIME. "}
        </p>
      </div>
    </div>
  );
};

const CAP_DATA = [
  {
    id: 1,
    image: image7,
    text: "HAIRLINE",
    small: "NATURAL",
    price: 100,
    para: "HAIRLINE IS ROUNDED & SOFT.",
  },
  {
    id: 2,
    image: image7,
    text: "HAIRLINE",
    small: "PEAK",
    price: 200,
    para: "HAIRLINE HAS A WIDOW’S PEAK.",
  },
  {
    id: 3,
    image: image7,
    text: "HAIRLINE",
    small: "LAGOS",
    price: 300,
    para: "NATURAL HAIRLINE WITH LOW TEMPLES ON BOTH SIDES.",
  },
];

// lagos + peak: HAIRLINE HAS A WIDOW’S PEAK WITH LOW TEMPLES ON BOTH SIDES.
