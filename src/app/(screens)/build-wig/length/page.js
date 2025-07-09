"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { image1, image2, length, length2 } from "@/app/assest";
import {
  MembershipSection,
  Buttons,
  HeaderBar,
  WigProduct,
  BackBtn,
  NextBtn,
  Heading,
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
    confirmItem(dispatch, selectedCapCard,"length"); 
    router.push("/build-wig");
    
  };
  return (
    <main className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-5">
        <div className="flex basis-[70%] flex-col ">
          <HeaderBar />

          <div className="border-1 border-black flex flex-col lg:flex-row pt-10 pb-4 px-5 mb-2 lg:h-[800px] overflow-hidden custom-gradient">
            <div className="w-full lg:w-[60%] flex items-center flex-col">
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

export const RightSidebarSecond = ({ selectedCard, setSelectedCard,setIsCardSelected, }) => {
  console.log(selectedCard)
  const router = useRouter();

  const handleBack = () => {
    router.push("/build-wig");
  };

  const cardRef = useRef();
  useScrollOnPathChange(cardRef);

  return (
    <div ref={cardRef} className="w-full lg:w-[40%] flex flex-col  mt-3 lg:mt-0">
         <div className="flex items-center justify-between  ml-[25px] md:ml-0">
        <BackBtn onClick={handleBack} />
      </div>
      <Heading head="HAIR MEASUREMENTS" className="mt-5"/>
   
      <MembershipSection
        data={GAP_DATA}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        setIsCardSelected={setIsCardSelected}
        className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3  "
      />
     <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-medium my-4 w-[100%]">
  {selectedCard?.para }
</p>

    </div>
  );
};

const GAP_DATA = [
  {
    id: 1,
    image: length,
    text: "LENGTH",
    small: "16”",
    price:100,
    para :`  3D MODEL IS FOR VISUAL PURPOSES ONLY, MEASUREMEANTS ARE NOT EXACT. `,
  },
  {
    id: 2,
    image: length,
    text: "LENGTH",
    small: "18”",
    price:200,
      para :` 3D MODEL IS FOR VISUAL PURPOSES ONLY, MEASUREMEANTS ARE NOT EXACT. `,
  },
  {
    id: 3,
    image: length,
    text: "LENGTH",
    small: "20”",
    price:100,
     para :` 3D MODEL IS FOR VISUAL PURPOSES ONLY, MEASUREMEANTS ARE NOT EXACT. `,
  },
  {
    id: 4,
    image: length,
    text: "LENGTH",
    small: "22”",
    price:100,
     para :` 3D MODEL IS FOR VISUAL PURPOSES ONLY, MEASUREMEANTS ARE NOT EXACT. `,
  },
  {
    id: 5,
    image: image2,
    text: "LENGTH",
    small: "24”",
    price:100,
     para :` 3D MODEL IS FOR VISUAL PURPOSES ONLY, MEASUREMEANTS ARE NOT EXACT. `,
  },
  {
    id: 6,
    image: image2,
    text: "LENGTH",
    small: "26”",
    price:100,
     para :` 3D MODEL IS FOR VISUAL PURPOSES ONLY, MEASUREMEANTS ARE NOT EXACT. `,
  },
  {
    id: 7,
    image: image2,
    text: "LENGTH",
    small: "28”",
    price:100,
     para :` 3D MODEL IS FOR VISUAL PURPOSES ONLY, MEASUREMEANTS ARE NOT EXACT. `,
  },
  {
    id: 8,
    image: image2,
    text: "LENGTH",
    small: "30”",
    price:100,
     para :`3D MODEL IS FOR VISUAL PURPOSES ONLY, MEASUREMEANTS ARE NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.`,
  },
  {
    id: 9,
    image: length2,
    text: "LENGTH",
    small: "32”",
    price:100,
     para :`3D MODEL IS FOR VISUAL PURPOSES ONLY, MEASUREMEANTS ARE NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.`,
  },
  {
    id: 10,
    image: length2,
    text: "LENGTH",
    small: "34”",
    price:100,
     para :`3D MODEL IS FOR VISUAL PURPOSES ONLY, MEASUREMEANTS ARE NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.`,
  },
  {
    id: 11,
    image: length2,
    text: "LENGTH",
    small: "36”",
    price:100,
     para :`3D MODEL IS FOR VISUAL PURPOSES ONLY, MEASUREMEANTS ARE NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.`,
    
  },
  {
    id: 12,
    image: length2,
    text: "LENGTH",
    small: "40”",
    price:100,
     para :`3D MODEL IS FOR VISUAL PURPOSES ONLY, MEASUREMEANTS ARE NOT EXACT. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.`,
  },
];
