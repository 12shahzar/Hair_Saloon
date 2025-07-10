"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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
    confirmItem(dispatch, selectedCapCard, "texture");
    router.push("/build-wig");
  };
  return (
    <main className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-5">
        <div className="flex basis-[70%] flex-col ">
          <HeaderBar />

          <div className="border border-black flex flex-col lg:flex-row pt-10 pb-4 px-5 mb-2 lg:h-[800px] overflow-hidden custom-gradient">
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

export const RightSidebarSecond = ({
  selectedCard,
  setSelectedCard,
  setIsCardSelected,
}) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/build-wig");
  };
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
  const cardRef = useRef();
  useScrollOnPathChange(cardRef);
  return (
    <div ref={cardRef} className="w-full lg:w-1/2 flex flex-col  mt-3 lg:mt-0">
      <div className="flex items-center justify-between  ml-[25px] md:ml-0">
        <BackBtn onClick={handleBack} />
      </div>
      <Heading head="HAIR TYPE" className="mt-5" />

      <MembershipSection
        data={GAP_DATA}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        setIsCardSelected={setIsCardSelected}
        className="flex items-center"
      />

      <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-semibold my-4 w-[100%]">
        {selectedCard?.para}
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
    price: 100,
    para: "HAIR STRANDS ARE SILKY WITH MEDIUM TO HIGH GLOSS & LUSTER.",
  },

  {
    id: 2,
    image: image5,
    text: "TEXTURE",
    small: "KINKY",
    price: 200,
    para: "HAIR STRANDS ARE COARSE WITH LOW TO MEDIUM GLOSS & LUSTRE.",
  },
];
