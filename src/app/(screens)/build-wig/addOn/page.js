"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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
  useScrollOnPathChange,
} from "@/component";
import RightSection from "@/component/Section/RightSection";
import { useDispatch, useSelector } from "react-redux";
import { confirmItem } from "@/util/util";

const BuildAWigPage = () => {
  const [selectedCapCards, setSelectedCapCards] = useState([]);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleConfirm = () => {
    if (selectedCapCards.length === 0) return;

    const finalObject = {
      text: "ADD-ON",
      // small: selectedCapCards.map((c) => c.small).join(", "),
      small:
        selectedCapCards.length === 1 ? selectedCapCards[0].small : "MIXED",

      price: selectedCapCards.reduce((sum, c) => sum + c.price, 0),
      image: selectedCapCards[0]?.image,
    };

    confirmItem(dispatch, finalObject, "addOn");
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
                  ${selectedCapCards.reduce((sum, c) => sum + c.price, 0)} USD
                </p>
              </div>
            </div>
            <RightSidebarSecond
              selectedCapCards={selectedCapCards}
              setSelectedCapCards={setSelectedCapCards}
            />
            <div className="text-center block md:hidden md:mt-0 ">
              <p className="font-futura text-[12px] text-[#909090] font-medium">
                TOTAL DUE
              </p>
              <p className="font-futura text-[13px] text-black font-medium">
                ${selectedCapCards.reduce((sum, c) => sum + c.price, 0)} USD
              </p>
            </div>
          </div>

          <Buttons
            text="CONFIRM SELECTION"
            onClick={handleConfirm}
            disabled={selectedCapCards.length === 0}
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
    text: "ADD-ONS",
    small: "BLEACH",
    price: 100,
    para: "KNOTS WILL BE LIFTED + TONED USING SALON PRODUCTS. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
    width:"15px",
    height:"30px",
    top:"50%"
  },
  {
    id: 2,
    image: addOn2,
    text: "ADD-ONS",
    small: "PLUCK",
    price: 200,
    para: "HAIRLINE WILL BE TWEEZED + FULLY CUSTOMIZED. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
       width:"25px",
    height:"30px",
    top:"50%"
  },
  {
    id: 3,
    image: addOn3,
    text: "ADD-ONS",
    small: "CLIP ENDS",
    price: 300,
    para: "ENDS WILL BE CUT BLUNT. REMOVES 2-4 INCHES BUT HAIR WILL MAINTAIN ITS LENGTH.",
       width:"28px",
    height:"30px",
    top:"50%"
  },
];

export const RightSidebarSecond = ({
  selectedCapCards,
  setSelectedCapCards,
}) => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.wigCart.items);
  const handleBack = () => {
    router.push("/build-wig");
  };
  const cardRef = useRef();
  useScrollOnPathChange(cardRef);

  useEffect(() => {
    const matchedCard = GAP_DATA.find((card) =>
      cartItems.some((item) => item.id === card.id && item.text === card.text)
    );

    if (matchedCard) {
      setSelectedCapCards(matchedCard); // ✅ Select the matched card
      setIsCardSelected(true); // ✅ Enable confirm button
    }
  }, [cartItems]);

  const toggleCard = (card) => {
    setSelectedCapCards((prev) => {
      const exists = prev.find((item) => item.id === card.id);
      if (exists) {
        return prev.filter((item) => item.id !== card.id);
      } else if (prev.length < 3) {
        return [...prev, card];
      }
      return prev;
    });
  };
  return (
    <div ref={cardRef} className="w-full lg:w-1/2 flex flex-col  mt-3 lg:mt-0">
    
        <BackBtn onClick={handleBack} />
   

      <Heading head="CUSTOMIZATION KIT" className="mt-10" />

      <div className="flex flex-col gap-5  mx-auto mt-2 ">
        <div className="flex-1 lg:overflow-y-auto space-y-5 px-2 scrollbar-hidden">
          <div className="flex flex-col gap-5  mx-auto ">
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-auto justify-evenly">
              {GAP_DATA.map((data) => (
                <MembershipCard
                  key={data.id}
                  data={data}
                  isSelected={selectedCapCards.some(
                    (item) => item.id === data.id
                  )}
                  onSelect={() => toggleCard(data)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-semibold my-4 w-[100%]">
        {/* */}
        {selectedCapCards[selectedCapCards.length - 1]?.para}
      </p>
    </div>
  );
};
