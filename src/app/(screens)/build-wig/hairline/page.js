"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MembershipSection,
  Buttons,
  HeaderBar,
  WigProduct,
  Heading,
  BackBtn,
  useScrollOnPathChange,
  MembershipCard,
} from "@/component";
import RightSection from "@/component/Section/RightSection";
import { confirmItem } from "@/util/util";
import { useDispatch } from "react-redux";
import { image7 } from "@/app/assest";

const BuildAWigPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedCards, setSelectedCards] = useState([]);
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleConfirm = () => {
    selectedCards.forEach((card) => confirmItem(dispatch, card, "hairline"));
    router.push("/build-wig");
  };

  const totalPrice = selectedCards.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-5">
        <div className="flex basis-[70%] flex-col">
          <HeaderBar />

          <div className="border-1 border-black flex flex-col lg:flex-row pt-10 pb-4 px-5 mb-2 lg:h-[800px] overflow-hidden custom-gradient">
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
                  ${totalPrice} USD
                </p>
              </div>
            </div>

            <RightSidebarSecond
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
              setIsCardSelected={setIsCardSelected}
            />

            <div className="text-center block md:hidden md:mt-0">
              <p className="font-futura text-[12px] text-[#909090] font-medium">
                TOTAL DUE
              </p>
              <p className="font-futura text-[13px] text-black font-medium">
                ${totalPrice} USD
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
  selectedCards,
  setSelectedCards,
  setIsCardSelected,
}) => {
  const router = useRouter();
  const cardRef = React.useRef();
  useScrollOnPathChange(cardRef);

  const handleBack = () => {
    router.push("/build-wig");
  };

  const showCustomPara =
    selectedCards.some((c) => c.small === "LAGOS") &&
    selectedCards.some((c) => c.small === "PEAK");

  const handleSelect = (card) => {
    const isLagos = card.small === "LAGOS";
    const isPeak = card.small === "PEAK";

    const hasLagos = selectedCards.some((c) => c.small === "LAGOS");
    const hasPeak = selectedCards.some((c) => c.small === "PEAK");
    const isAlreadySelected = selectedCards.some((c) => c.id === card.id);

    let updatedSelection = [];

    if (isAlreadySelected) {
      updatedSelection = selectedCards.filter((c) => c.id !== card.id);
    } else if (isLagos || isPeak) {
      if ((isLagos && hasPeak) || (isPeak && hasLagos)) {
        updatedSelection = [...selectedCards, card];
      } else {
        updatedSelection = [
          ...selectedCards.filter(
            (c) => c.small === "LAGOS" || c.small === "PEAK"
          ),
          card,
        ];
      }
    } else {
      updatedSelection = [card];
    }

    setSelectedCards(updatedSelection);
    setIsCardSelected(updatedSelection.length > 0);
  };

  return (
    <div ref={cardRef} className="w-full lg:w-[40%] flex flex-col mt-3 lg:mt-0">
      <div className="flex items-center justify-between ml-[25px] md:ml-0">
        <BackBtn onClick={handleBack} />
      </div>

      <Heading head="VENTILLATION EFFECT" className="mt-5" />

      <div className="flex flex-col gap-5 mx-auto mt-2">
        <div className="mx-auto justify-evenly xl:grid-cols-3 gap-3 md:gap-8 flex flex-wrap">
          {CAP_DATA.map((card, index) => {
            const isSelected = selectedCards.some((c) => c.id === card.id);

            return (
              <MembershipCard
                key={index}
                data={card}
                isSelected={isSelected}
                onSelect={() => handleSelect(card)}
              />
            );
          })}
        </div>
      </div>

      <div className="flex mx-auto gap-5 my-4">
        <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-medium w-[100%]">
          {showCustomPara
            ? "HAIRLINE HAS A WIDOW’S PEAK WITH LOW TEMPLES ON BOTH SIDES."
            : selectedCards[0]?.para}
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
