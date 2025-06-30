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
    <div ref={cardRef} className="w-full lg:w-[40%] flex flex-col  mt-3  lg:mt-0">
        <div className="flex items-center justify-between mb-3">
        <BackBtn onClick={handleBack} />
      </div>
      <Heading head="VENTILLATION EFFECT" />
    

   <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-auto mt-6 justify-evenly">
               {CAP_DATA.map((data, index) => {
                 const isSelected = selectedCard?.id === data.id;
 
                 return (
                   <div
                     key={index}
                     onClick={() => handleNext(data)}
                     className={`border relative pt-1 w-[52px] h-[63px] md:w-[80px] md:h-[100px] flex flex-col items-center text-center cursor-pointer 
         border-black bg-white
       `}
                   >
                     {/* Top Label */}
                     <p className="text-[10px] md:text-sm text-black font-covered">
                       {data.text}
                     </p>
 
                     {/* Center Image */}
                     <div className="w-[40px] h-[35px] md:w-[50px] md:h-[45px]">
                       <Image
                         src={data.image}
                         alt="Card image"
                         width={100}
                         height={100}
                         className="object-contain w-full h-full"
                       />
                     </div>
 
                     {/* Bottom Value */}
                     <p
                       className={`absolute bottom-[-6.9px] md:bottom-[-10px] left-1/2 transform -translate-x-1/2 text-[9px] md:text-xs font-futura font-medium ${
                         isSelected ? "text-[#EB1C24]" : "text-black"
                       }`}
                     >
                       {data.small}
                     </p>
                   </div>
                 );
               })}
             </div>

      <div className="flex mx-auto gap-5 mt-8">
        <p className="font-futura text-[10px] md:text-xs text-[#EB1C24] text-center font-medium my-8 w-[100%]">
          PLEASE EXPECT AN ADDITIONAL 3-5 DAYS OF PROCESSING TIME.
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
  },
  {
    id: 2,
    image: image7,
    text: "HAIRLINE",
    small: "PEAK",
    price: 200,
  },
  {
    id: 3,
    image: image7,
    text: "HAIRLINE",
    small: "LAGOS",
    price: 300,
  },
];
