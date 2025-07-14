"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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
  useScrollOnPathChange,
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

          <div className="border-1 border-black flex flex-col lg:flex-row pt-10 pb-4 px-5 mb-2 lg:h-[800px] overflow-hidden  custom-gradient">
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
  const router = useRouter();
  const cardRef = useRef();
  useScrollOnPathChange(cardRef);

  const handleBack = () => {
    router.push("/build-wig");
  };


 useEffect(() => {
  const allOptions = [...CAP_DATA, ...CAP_DATA_2];
  console.log(allOptions);
  
  const matchedCard = allOptions.find((card) =>
  cartItems.some((item) => item.id === card.id && item.text === card.text)
);

  if (matchedCard) {
    setSelectedCard(matchedCard);      // ✅ Select the matched card
    setIsCardSelected(true);           // ✅ Enable confirm button
  }
}, [cartItems]);



  return (
    <div ref={cardRef} className="w-full lg:w-[40%] flex flex-col lg:mt-0">
    
        <BackBtn onClick={handleBack} />
     

      <Heading head="CUSTOM SIZING" className="mt-10" />

      <MembershipSection
        data={CAP_DATA}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        setIsCardSelected={setIsCardSelected}
        className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3"
      />

      <div className="mt-5">
        <Heading head="FLEXIBLE SIZING" />
        <MembershipSection
          data={CAP_DATA_2}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          setIsCardSelected={setIsCardSelected}
          className="flex items-center"
        />
      </div>

      <div className="flex mx-auto gap-5 my-4">
        {["XXS: 19”", "XS: 20”", "S: 21”", "M: 22”", "L: 23”"].map((text, idx) => (
          <p
            key={idx}
            className="text-[9px] font-semibold text-[#EB1C24] font-futura"
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

const CAP_DATA_2 = [
  {
    id: 5,
    image: image1,
    text: "CAP SIZE",
    small: "XXS/XS/S",
    price: 100,
  },
  {
    id: 6,
    image: image1,
    text: "CAP SIZE",
    small: "S/M/L",
    price: 200,
  },

];

