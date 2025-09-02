"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Buttons,
  HeaderBar,
  WigProduct,
  Heading,
  useScrollOnPathChange,
} from "@/component";
import RightSection from "@/component/Section/RightSection";
import { style1, style2, style3, style4 } from "@/app/assest";
import { confirmItem } from "@/util/util";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const BuildAWigPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [basicSelected, setBasicSelected] = useState([]);
  const [premiumSelected, setPremiumSelected] = useState(null);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const cardRef = useRef();
  useScrollOnPathChange(cardRef);

  const totalPrice =
    basicSelected.reduce((sum, item) => sum + item.price, 0) +
    (basicSelected.some((item) => item.small === "BANGS")
      ? 0
      : premiumSelected?.price || 0);

  useEffect(() => {
    const hasBangs = basicSelected.some((item) => item.small === "BANGS");
    setIsCardSelected(
      basicSelected.length > 0 && (hasBangs || premiumSelected !== null)
    );
  }, [basicSelected, premiumSelected]);

const handleConfirm = () => {
  if (basicSelected.length === 0) return;

  const hasBangs = basicSelected.some((item) => item.small === "BANGS");
  // non-BANGS case me premium lazmi
  if (!hasBangs && !premiumSelected) return;

  const finalObject = {
    id: basicSelected.length === 1 ? basicSelected[0].id : "MIXED",
    text: "STYLING",
    small:
      hasBangs && basicSelected.length > 1
        ? "BANGS + 1"
        : basicSelected[0].small,
    price:
      basicSelected.reduce((sum, c) => sum + c.price, 0) +
      (hasBangs ? 0 : (premiumSelected?.price || 0)), // ✅ BANGS par premium FREE
    image: basicSelected[0]?.image,
    selectedStyles: [
      ...basicSelected.map(({ id, small, price }) => ({
        id,
        small,
        price,
        kind: "basic",
      })),
      ...(premiumSelected
        ? [
            {
              id: premiumSelected.id,
              small: premiumSelected.small,
              price: premiumSelected.price,
              kind: "premium",
            },
          ]
        : []),
    ],
  };

  confirmItem(dispatch, finalObject, "extraStyle");
  router.push("/build-wig");
};


  return (
    <main className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-5">
        <div className="flex basis-[70%] flex-col ">
          <HeaderBar />
          <div className="border border-black flex flex-col lg:flex-row pt-10 pb-4 px-5 mb-2 lg:h-[800px] overflow-hidden custom-gradient">
            <div className="w-full lg:w-[60%] flex items-center flex-col">
              <WigProduct />
              <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-semibold my-5 w-[80%] sm:block hidden ">
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

            <RightSidebarFirst
              basicSelected={basicSelected}
              setBasicSelected={setBasicSelected}
              premiumSelected={premiumSelected}
              setPremiumSelected={setPremiumSelected}
              setIsCardSelected={setIsCardSelected}
            />

            <p className="font-futura text-[9px] leading-[15px] uppercase text-[#EB1C24] text-center font-semibold mt-7 mb-4 w-[90%] sm:hidden block mx-auto ">
              {(() => {
                const hasBangs = basicSelected.some(
                  (item) => item.small === "BANGS"
                );
                const other = basicSelected.find(
                  (item) => item.small !== "BANGS"
                );

                if (basicSelected.length === 0) {
                  return "UNIT COMES CO-WASHED IN ITS NATURAL STATE. STANDARD PROCESSING TIME APPLIES.";
                }
                if (basicSelected.length === 1) {
                  return basicSelected[0].para;
                }
                if (hasBangs && other) {
                  if (other.small === "FLAT IRON") {
                    return "CURTAIN BANGS WITH BONE STRAIGHT HAIR. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.";
                  }
                  if (other.small === "LAYERS") {
                    return "CURTAIN BANGS WITH LAYERED CURLS. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.";
                  }
                  if (other.small === "CRIMPS") {
                    return "TEXTURED DEEP WAVES USING HOT TOOLS. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.";
                  }
                }
                return "";
              })()}
            </p>

            <div className="text-center block md:hidden md:mt-0 ">
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

export const RightSidebarFirst = ({
  basicSelected,
  setBasicSelected,
  premiumSelected,
  setPremiumSelected,
  setIsCardSelected,
}) => {
  const router = useRouter();
  const cardRef = useRef();
  useScrollOnPathChange(cardRef);

  const cartItems = useSelector((state) => state.wigCart.items);

  // Latest STYLING se restore; first-load pe MIDDLE select
  useEffect(() => {
    const styleItem = [...(cartItems || [])]
      .reverse()
      .find((it) => it.text === "STYLING");

    if (styleItem && Array.isArray(styleItem.selectedStyles) && styleItem.selectedStyles.length) {
      const ids = new Set(styleItem.selectedStyles.map((s) => Number(s.id)));

      const matchedBasic = BASIC_MEMBERSHIP.filter((card) => ids.has(card.id));
      let matchedPremium = PREMIUM_MEMBERSHIP.find((card) => ids.has(card.id)) || null;

      setBasicSelected(matchedBasic);

      const hasBangs = matchedBasic.some((b) => b.small === "BANGS");
      if (hasBangs && !matchedPremium) {
        matchedPremium = PREMIUM_MEMBERSHIP.find((p) => p.small === "MIDDLE") || null;
      }
      setPremiumSelected(matchedPremium);

      setIsCardSelected(matchedBasic.length > 0 && (hasBangs || !!matchedPremium));
      return;
    }

    // first load (cart empty) → default MIDDLE
    if (!premiumSelected) {
      const middle = PREMIUM_MEMBERSHIP.find((p) => p.small === "MIDDLE");
      if (middle) setPremiumSelected(middle);
    }
  }, [cartItems]); // sirf cart par run

  const onBasicClick = (data) => {
    const isBangs = data.small === "BANGS";
    const isStyleOption = ["CRIMPS", "FLAT IRON", "LAYERS"].includes(data.small);
    const isAlreadySelected = basicSelected.some((item) => item.id === data.id);
    const bangsSelected = basicSelected.some((item) => item.small === "BANGS");

    let updatedSelection = [];

    if (isAlreadySelected) {
      // toggle off
      updatedSelection = basicSelected.filter((item) => item.id !== data.id);
    } else if (isBangs) {
      // BANGS → drop other style options, keep BANGS
      updatedSelection = basicSelected.filter(
        (item) => !["CRIMPS", "FLAT IRON", "LAYERS"].includes(item.small)
      );
      updatedSelection.push(data);
    } else if (isStyleOption && bangsSelected) {
      // BANGS present → allow exactly one other style with it
      updatedSelection = basicSelected.filter(
        (item) => !["CRIMPS", "FLAT IRON", "LAYERS"].includes(item.small)
      );
      updatedSelection.push(data);
    } else {
      // Non-BANGS alone → single selection
      updatedSelection = [data];
    }

    setBasicSelected(updatedSelection);

    const hasBangsNow = updatedSelection.some((item) => item.small === "BANGS");
    if (hasBangsNow) {
      // BANGS ke sath premium free → auto MIDDLE highlight
      const middle = PREMIUM_MEMBERSHIP.find((p) => p.small === "MIDDLE");
      if (middle) setPremiumSelected(middle);
    }
    // IMPORTANT: Non-BANGS case me premium ko null **mat** karo.
    // Parent effect (BuildAWigPage) already isCardSelected ko manage kar raha.
  };

  const onPremiumClick = (data) => {
    if (basicSelected.length === 0) return; // basic ke baghair premium na do
    setPremiumSelected(data);
    setIsCardSelected(true); // optional (parent effect bhi set karega)
  };

  return (
    <div
      ref={cardRef}
      className="w-full lg:w-[40%] flex flex-col mt-3 lg:mt-0 lg:h-[700px]"
    >
      {/* BASIC MEMBERSHIP */}
      <div className="flex flex-col gap-2 mx-auto">
        <Heading head="SALON TREATMENTS" className="mt-10" />
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-8 mx-auto justify-evenly">
          {BASIC_MEMBERSHIP.map((data, index) => {
            const isSelected = basicSelected.some((item) => item.id === data.id);
            return (
              <div
                key={index}
                onClick={() => onBasicClick(data)}
                className={`border relative w-[60px] h-[70px] md:w-[80px] md:h-[100px] flex flex-col items-center text-center justify-center cursor-pointer ${
                  isSelected ? "border-[#EB1C24]" : "border-black"
                } bg-white mb-3 sm:mb-0`}
              >
                <p className="text-[10px] md:text-sm text-black font-covered absolute top-0">
                  {data.text}
                </p>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999]"
                  style={{ width: data.width, height: data.height, top: data.top }}
                >
                  <Image
                    src={data.image}
                    alt="Card image"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p
                  className={`absolute bottom-[-6.9px] md:bottom-[-10px] left-1/2 transform -translate-x-1/2 text-[9px] w-full md:text-xs font-futura font-medium ${
                    isSelected ? "text-[#EB1C24]" : "text-black"
                  }`}
                >
                  {data.small}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* PREMIUM MEMBERSHIP */}
 {/* PREMIUM MEMBERSHIP */}
<div className="flex flex-col gap-2 mx-auto mt-8">
  <Heading head="PART SELECTION" />
  <div className="flex items-center gap-3 mx-auto justify-evenly">
    {PREMIUM_MEMBERSHIP.map((data, index) => {
      const isSelected = premiumSelected?.id === data.id;

      return (
        <div
          key={index}
          onClick={() => onPremiumClick(data)}
          className={`border bg-white relative w-[60px] h-[70px] md:w-[80px] md:h-[100px] flex items-center text-center justify-center cursor-pointer ${
            isSelected ? "border-[#EB1C24]" : "border-black"
          }`}
        >
          <p className="text-[10px] md:text-sm text-black font-covered absolute top-0">
            {data.text}
          </p>
          <div className="flex items-center justify-center w-full h-full">
            <p
              className={`text-xl font-futura ${
                isSelected ? "text-[#EB1C24] font-normal" : "text-black font-light"
              }`}
            >
              {data.image}
            </p>
          </div>
          <p
            className={`absolute bottom-[-6.9px] md:bottom-[-10px] left-1/2 transform -translate-x-1/2 w-full text-[9px] md:text-xs font-futura font-medium ${
              isSelected ? "text-[#EB1C24]" : "text-black"
            }`}
          >
            {data.small}
          </p>
        </div>
      );
    })}
  </div>
</div>

    </div>
  );
};


// ================= DATA =================

const BASIC_MEMBERSHIP = [
  {
    id: 1,
    image: style1,
    text: "STYLING",
    small: "BANGS",
    price: 100,
    para: "CURTAIN BANGS WITH FACE FRAMING LAYERS USING HOT TOOLS. STANDARD PROCESSING TIME APPLIES.",
    width: "31px",
    height: "28px",
    top: "53%",
  },
  {
    id: 2,
    image: style2,
    text: "STYLING",
    small: "CRIMPS",
    price: 100,
    para: "CURTAIN BANGS WITH TEXTURED WAVES. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
    width: "30px",
    height: "29px",
    top: "53%",
  },
  {
    id: 3,
    image: style3,
    text: "STYLING",
    small: "FLAT IRON",
    price: 100,
    para: "PRESSED BONE STRAIGHT USING HOT TOOLS. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
    width: "29px",
    height: "29px",
    top: "53%",
  },
  {
    id: 4,
    image: style4,
    text: "STYLING",
    small: "LAYERS",
    price: 100,
    para: "BOUNCY, LAYERED CURLS USING HOT TOOLS. PLEASE EXPECT AN ADDITIONAL WEEK OF PROCESSING TIME.",
    width: "30px",
    height: "27px",
    top: "53%",
  },
];

const PREMIUM_MEMBERSHIP = [
  { id: 5, image: "L", text: "STYLING", small: "LEFT", price: 100 },
  { id: 6, image: "M", text: "STYLING", small: "MIDDLE", price: 100 },
  { id: 7, image: "R", text: "STYLING", small: "RIGHT", price: 100 },
];
