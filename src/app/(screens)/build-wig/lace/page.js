"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { image1, image4, image7 } from "@/app/assest";
import {
  MembershipSection,
  Buttons,
  HeaderBar,
  WigProduct,
  Heading,
  BackBtn,
  NextBtn,
  useScrollOnPathChange,
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
    confirmItem(dispatch, selectedCapCard, "lace");
    router.push("/build-wig");
  };

  return (
    <main className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-5">
        <div className="flex basis-[70%] flex-col ">
          <HeaderBar />

          <div className="border-1 border-black flex flex-col lg:flex-row pt-10 pb-4 px-5 mb-2 lg:h-[800px] overflow-hidden custom-gradient">
            <div className="w-full lg:w-1/2 flex items-center flex-col">
              <WigProduct />
              <p className="font-futura text-xs text-[#EB1C24] text-center font-semibold my-5 w-[80%] md:block hidden">
                PLEASE NOTE: EACH CUSTOM UNIT IS MADE TO ORDER. WE ENSURE ALL
                DETAILS ARE ACCURATE + PRECISE. EXPECT 2-4 WEEKS OF PROCESSING
                TIME FOR THIS UNIT.
              </p>
              <div className="text-center md:block hidden">
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

export const RightSidebarSecond = ({
  selectedCard,
  setSelectedCard,
  setIsCardSelected,
}) => {
  const cartItems = useSelector((state) => state.wigCart.items);
  useEffect(() => {
    const matchedCard = GAP_DATA.find((card) =>
      cartItems.some((item) => item.id === card.id && item.text === card.text)
    );

    if (matchedCard) {
      setSelectedCard(matchedCard); // ✅ Select the matched card
      setIsCardSelected(true); // ✅ Enable confirm button
    }
  }, [cartItems]);
  const router = useRouter();
  const handleBack = () => {
    router.push("/build-wig");
  };
  const cardRef = useRef();
  useScrollOnPathChange(cardRef);
  return (
    <div ref={cardRef} className="w-full lg:w-1/2 flex flex-col  mt-3 lg:mt-0">
      <BackBtn onClick={handleBack} />

      <Heading head="HD TOPPER SIZE" className="mt-10" />

      <MembershipSection
        data={GAP_DATA}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        setIsCardSelected={setIsCardSelected}
        className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3  "
      />

      <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-semibold my-4 w-[80%] mx-auto">
        {/*  */}
        {selectedCard?.para}
      </p>
    </div>
  );
};

const GAP_DATA = [
  {
    id: 1,
    image: image4,
    text: "LACE",
    small: "4X4",
    price: 200,
    para: "GLUELESS CLOSURE UNIT MEASURING 4 INCHES EAR TO EAR + 4 INCHES FRONT TO BACK.",
    width: "58px",
    height: "39px",
    top: "50%",
  },
  {
    id: 2,
    image: image4,
    text: "LACE",
    small: "5X5",
    price: 300,
    para: "GLUELESS CLOSURE UNIT MEASURING 5 INCHES EAR TO EAR + 5 INCHES FRONT TO BACK.",
    width: "58px",
    height: "39px",
    top: "50%",
  },
  {
    id: 3,
    image: image4,
    text: "LACE",
    small: "6X6",
    price: 500,
    para: "GLUELESS CLOSURE UNIT MEASURING 6 INCHES EAR TO EAR + 6 INCHES FRONT TO BACK.",
    width: "58px",
    height: "39px",
    top: "50%",
  },
  {
    id: 4,
    image: image4,
    text: "LACE",
    small: "7X7",
    price: 100,
    para: "GLUELESS CLOSURE UNIT MEASURING 7 INCHES EAR TO EAR + 7 INCHES FRONT TO BACK.",
    width: "58px",
    height: "39px",
    top: "50%",
  },
  {
    id: 5,
    image: image4,
    text: "LACE",
    small: "13X4",
    price: 100,
    para: "FRONTAL UNIT MEASURING 13 INCHES EAR TO EAR + 4 INCHES FRONT TO BACK.",
    width: "58px",
    height: "39px",
    top: "50%",
  },
  {
    id: 6,
    image: image4,
    text: "LACE",
    small: "13X6",
    price: 100,
    para: "FRONTAL UNIT MEASURING 13 INCHES EAR TO EAR + 6 INCHES FRONT TO BACK.",
    width: "58px",
    height: "39px",
    top: "50%",
  },
  {
    id: 7,
    image: image4,
    text: "LACE",
    small: "360",
    price: 100,
    para: "FRONTAL UNIT WITH LACE AROUND THE PERIMETER. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
    width: "58px",
    height: "39px",
    top: "50%",
  },
  {
    id: 8,
    image: image4,
    text: "LACE",
    small: "FULL",
    price: 100,
    para: "HD LACE THROUGHOUT THE ENTIRE CAP. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
    width: "58px",
    height: "39px",
    top: "50%",
  },
];
