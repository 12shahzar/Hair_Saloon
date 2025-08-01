"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  color1,
  color10,
  color11,
  color12,
  color13,
  color14,
  color15,
  color16,
  color17,
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
  useScrollOnPathChange,
} from "@/component";
import RightSection from "@/component/Section/RightSection";
import { useDispatch, useSelector } from "react-redux";
import { confirmItem } from "@/util/util";

const BuildAWigPage = () => {
  const dispatch = useDispatch()
  const router = useRouter();

  const [selectedCapCard, setSelectedCapCard] = useState(null);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const handleConfirm = () => {
     confirmItem(dispatch, selectedCapCard,"color"); 
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
                   ${selectedCapCard?.price || 0} USD
                </p>
              </div>
            </div>
            <RightSidebarThird
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

export const RightSidebarThird = ({ selectedCard, setSelectedCard ,setIsCardSelected,}) => {
  const router = useRouter(); 
  const cartItems = useSelector((state) => state.wigCart.items); 
    useEffect(() => {
      const matchedCard = COLOR_DATA.find((card) =>
      cartItems.some((item) => item.id === card.id && item.text === card.text)
    );
    
      if (matchedCard) {
        setSelectedCard(matchedCard);      // ✅ Select the matched card
        setIsCardSelected(true);           // ✅ Enable confirm button
      }
    }, [cartItems]);
  const handleBack = () => {
    router.push("/build-wig");
  };
    const cardRef = useRef();
  useScrollOnPathChange(cardRef);
  return (
    <div ref={cardRef} className="w-full lg:w-1/2 flex flex-col mt-3 lg:mt-0 lg:h-[700px]">
        
        {/* <BackBtn onClick={handleBack} /> */}
      
      <Heading head="SINGLE COLOR DYE" className="mt-10"/>
    
      <div className="flex-1 lg:overflow-y-auto space-y-5 px-2 scrollbar-hidden">
        <MembershipSection
          data={COLOR_DATA}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          setIsCardSelected={setIsCardSelected} 
         className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3  "
        />
      </div>

      <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-semibold my-4  w-[80%] mx-auto">
       {selectedCard?.para }
      </p>
    </div>
  );
};

const COLOR_DATA = [
  {
    id: 1,
    image: color1,
    text: "COLOR",
    small: "JET BLACK",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
      width: "44px",
    height: "43px",
    top: "53%",
  },
  {
    id: 2,
    image: color2,
    text: "COLOR",
    small: "OFF BLACK",
    price:200,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT.",
       width: "44px",
    height: "43px",
    top: "53%",
  },
  {
    id: 3,
    image: color3,
    text: "COLOR",
    small: "ESPRESSO",
    price:300,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
       width: "44px",
    height: "43px",
    top: "53%",
  },
  {
    id: 4,
    image: color5,
    text: "COLOR",
    small: "CHESTNUT",
    price:400,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
     width: "44px",
    height: "43px",
    top: "53%",
  },
  {
    id: 5,
    image: color8,
    text: "COLOR",
    small: "HONEY",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
     width: "44px",
    height: "43px",
    top: "53%",
  },
  {
    id: 6,
    image: color7,
    text: "COLOR",
    small: "AUBURN",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
      width: "44px",
    height: "43px",
    top: "53%",

  },
  {
    id: 7,
    image: color6,
    text: "COLOR",
    small: "COPPER",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
      width: "44px",
    height: "43px",
    top: "53%",
  },

  {
    id: 8,
    image: color9,
    text: "COLOR",
    small: "GINGER",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
      width: "44px",
    height: "43px",
    top: "53%",
  },
  {
    id: 9,
    image: color11,
    text: "COLOR",
    small: "SANGRIA",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
    width: "44px",
    height: "43px",
    top: "53%",
  },
  {
    id: 10,
    image: color10,
    text: "COLOR",
    small: "CHERRY",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
      width: "44px",
    height: "43px",
    top: "53%",
  },
  {
    id: 11,
    image: color16,
    text: "COLOR",
    small: "RASPBERRY",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
     width: "44px",
    height: "43px",
    top: "53%",
  },
  {
    id: 12,
    image: color12,
    text: "COLOR",
    small: "PLUM",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
       width: "44px",
    height: "43px",
    top: "53%",
  },
  {
    id: 13,
    image: color13,
    text: "COLOR",
    small: "COBALT",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
       width: "44px",
    height: "43px",
    top: "53%",
  },
  {
    id: 14,
    image: color17,
    text: "COLOR",
   small: "TEAL",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
     width: "44px",
    height: "43px",
    top: "53%",
  },
  {
    id: 15,
    image: color15,
    text: "COLOR",
    small: "CITRINE",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
     width: "44px",
    height: "43px",
    top: "53%",
  },
    {
    id: 16,
    image: color14,
    text: "COLOR",
    small: "SLIME",
    price:100,
    para:"COLOR MATCH IS PROXIMATE, BUT NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
   width: "44px",
    height: "43px",
    top: "53%",
  },
];
