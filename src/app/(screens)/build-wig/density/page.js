"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { image1, image2, image3 } from "@/app/assest";
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
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedCapCard, setSelectedCapCard] = useState(null);
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleConfirm = () => {
    confirmItem(dispatch, selectedCapCard, "density");
    router.push("/build-wig");
  };

  return (
    <main className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-5">
        <div className="flex basis-[70%] flex-col ">
          <HeaderBar />

          <div className="border border-black flex flex-col lg:flex-row py-10 px-5 mb-2 lg:h-[800px] overflow-hidden custom-gradient">
            <div className="w-full lg:w-1/2 flex items-center flex-col">
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

export const RightSidebarSecond = ({ selectedCard, setSelectedCard, setIsCardSelected, }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/build-wig");
  };
      const cardRef = useRef();
  useScrollOnPathChange(cardRef);
  return (
    <div ref={cardRef} className="w-full lg:w-1/2 flex flex-col  mt-3 lg:mt-0">
        <div className="flex items-center justify-between mb-3">
        <BackBtn onClick={handleBack} />
      </div>
      <Heading head="HAIR VOLUME" />
    
      <MembershipSection
        data={GAP_DATA}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        setIsCardSelected={setIsCardSelected}
      />
      <div className="flex mx-auto flex-col gap-1 mt-8">
        {density_data.map((item, index) => (
          <p
            className="text-[10px] sm:text-xs font-medium text-[#EB1C24] font-futura"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

const density_data = [
  "150% EQUIVALENT TO 1-2 BUNDLES FOR LENGTHS OVER 16”",
  "180% EQUIVALENT TO 2 BUNDLES FOR LENGTHS OVER 18”",
  "200% EQUIVALENT TO 2-3 BUNDLES FOR LENGTHS OVER 22”",
  "250% EQUIVALENT TO 3 BUNDLES FOR LENGTHS OVER 26”",
  "300% EQUIVALENT TO 3-4 BUNDLES FOR LENGTHS OVER 30”",
  "350% EQUIVALENT TO 4 BUNDLES FOR LENGTHS OVER 36”",
  "400% EQUIVALENT TO 4-5 BUNDLES FOR LENGTHS OVER 40”",
];

const GAP_DATA = [
  {
    id: 1,
    image: image3,
    text: "DENSITY",
    small: "150",
    price: 100,
  },
  {
    id: 2,
    image: image3,
    text: "DENSITY",
    small: "180",
    price: 200,
  },
  {
    id: 3,
    image: image3,
    text: "DENSITY",
    small: "200",
    price: 300,
  },
  {
    id: 4,
    image: image3,
    text: "DENSITY",
    small: "250",
    price: 500,
  },
  {
    id: 5,
    image: image3,
    text: "DENSITY",
    small: "300",
    price: 100,
  },
  {
    id: 6,
    image: image3,
    text: "DENSITY",
    small: "350",
    price: 100,
  },
  {
    id: 7,
    image: image3,
    text: "DENSITY",
    small: "400",
    price: 100,
  },
];
