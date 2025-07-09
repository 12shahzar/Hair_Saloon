"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  color1,
  image7,
  image8,
} from "@/app/assest";
import {
  MembershipSection,
  Buttons,
  HeaderBar,
  WigProduct,
  Heading,
  MembershipCard,
  Modal,
} from "@/component";
import RightSection from "@/component/Section/RightSection";
import { useSelector } from "react-redux";
import Image from "next/image";
import isEqual from "lodash.isequal"; // install lodash.isequal

const BuildAWigPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showOrder, setOrder] = useState(false);
  const cartItems = useSelector((state) => state.wigCart.items);

  // Default cart items (example, adjust as needed)
  const defaultCartItems = [
    {
      id: 1,
      image: image1,
      text: "CAP SIZE",
      small: "M",
      uniqueId: "cap_3",
    },
    {
      id: 2,
      image: image2,
      text: "LENGTH",
      small: "24”",
      uniqueId: "length_5",
    },
    {
      id: 3,
      image: image3,
      text: "DENSITY",
      small: "200%",
      uniqueId: "density_3",
    },
    {
      id: 4,
      image: image4,
      text: "LACE",
      small: "13X6",
      uniqueId: "lace_6",
    },
    {
      id: 5,
      image: image5,
      text: "TEXTURE",
      small: "SILKY",
      uniqueId: "texture_1",
    },
    {
      id: 6,
      image: color1,
      text: "COLOR",
      small: "OFFBLACK",
      uniqueId: "color_2",
    },
    {
      id: 7,
      image: image7,
      text: "HAIRLINE",
      small: "NATURAL",
      uniqueId: "hairline_1",
    },
  ];

useEffect(() => {
  const extractEssentials = (arr) =>
    arr.map((item) => ({ text: item.text, small: item.small }));

  const simplifiedCart = extractEssentials(cartItems);
  const simplifiedDefault = extractEssentials(defaultCartItems);

  const isDifferent = !isEqual(simplifiedCart, simplifiedDefault);
  setOrder(isDifferent);
}, [cartItems]);

  console.log('====================================');
  console.log(showOrder);
  console.log('====================================');
  const totalPrice = cartItems.length
    ? cartItems.reduce((acc, item) => acc + (item.price || 0), 0)
    : 0;

  return (
    <>
      <main className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 py-5">
          <div className="flex basis-[70%] flex-col ">
            <HeaderBar />

            <div className="border-1 border-black flex flex-col lg:flex-row pt-10  px-5 mb-2 lg:h-[800px] overflow-hidden custom-gradient">
              <div className="w-full lg:w-[60%] flex items-center flex-col">
                <WigProduct />
                <p className="font-futura text-[9px] md:text-xs text-[#EB1C24] text-center font-semibold my- w-[80%] sm:block hidden ">
                  PLEASE NOTE: EACH CUSTOM UNIT IS MADE TO ORDER. WE ENSURE ALL
                  DETAILS ARE ACCURATE + PRECISE. EXPECT 2 - 4 WEEKS OF
                  PROCESSING TIME FOR THIS UNIT.
                </p>
                <div className="text-center hidden md:block">
                  <p className="font-futura text-sm text-[#909090] font-medium">
                    TOTAL DUE
                  </p>
                  <p className="font-futura text-base text-black font-medium">
                    ${totalPrice > 0 ? totalPrice : 860} USD
                  </p>
                </div>
                <div className=" w-[90%] my-5  sm:block hidden">
                  <div className="overflow-y-auto scrollbar-hidden h-[100px]">
                    {cartItems.length === 0 ? (
                      <p></p>
                    ) : (
                      cartItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 my-2"
                        >
                          <p className="text-[9px] text-[#EB1C24] font-semibold font-futura">
                            <span className="text-black">Service: </span>
                            {item.text || "N/A"}
                          </p>
                          <p className="text-[9px] text-[#EB1C24] font-semibold font-futura">
                            <span className="text-black">
                              {item.text || null}:{" "}
                            </span>
                            {item.small || "N/A"}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
              <RightSidebarFirst setShowModal={setShowModal} />

              <p className="font-futura text-[9px] leading-[15px] uppercase text-[#EB1C24] text-center font-medium my-6 w-[90%] sm:hidden block mx-auto ">
                PLEASE NOTE: EACH CUSTOM UNIT IS MADE TO ORDER. <br /> WE ENSURE
                ALL DETAILS ARE ACCURATE + PRECISE. <br /> EXPECT 6 - 8 WEEKS OF
                PROCESSING TIME FOR THIS UNIT.
              </p>
              <div className="text-center block md:hidden md:mt-0 ">
                <p className="font-futura text-[12px] text-[#909090] font-medium">
                  TOTAL DUE
                </p>
                <p className="font-futura text-[13px] text-black font-medium">
                  ${totalPrice > 0 ? totalPrice : 860} USD
                </p>
              </div>

              <div className=" w-[100%] my-2  sm:hidden block">
                <div className="flex flex-col items-center">
                  {showOrder &&
                    cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 my-1 text-center"
                      >
                        <p className="text-[9px] text-[#EB1C24] font-semibold font-futura text-center">
                          <span className="text-black">SERVICE: </span>
                          {item.text || "N/A"}
                        </p>
                        <p className="text-[9px] text-[#EB1C24] font-semibold font-futura text-center">
                          <span className="text-black">
                            {item.text || null}:{" "}
                          </span>
                          {item.small || "N/A"}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <Buttons text="ADD TO BAG" />
          </div>

          <RightSection />
        </div>
      </main>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full z-[9999] bg-[#00000080] flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <Modal />
        </div>
      )}
    </>
  );
};

export default BuildAWigPage;

export const RightSidebarFirst = ({ setShowModal }) => {
  const cartItems = useSelector((state) => state.wigCart.items);
  const [selectedCard, setSelectedCard] = useState(null);
  const mergedMembership = (defaultCards) => {
    return defaultCards.map((card) => {
      const match = cartItems.find((item) => item.text === card.text);
      return match
        ? { ...card, small: match.small, image: match.image || card.image } // override small if matched
        : card;
    });
  };

  const basicWithCartData = mergedMembership(BASIC_MEMBERSHIP);
  const premiumWithCartData = mergedMembership(PREMIUM_MEMBERSHIP);

  const router = useRouter();

  const handleNext = (data) => {
    setSelectedCard(data);
    router.push(`/build-wig${data.link}`);
  };
  useEffect(() => {
    if (cartItems.length > 0) {
      const allItems = [...BASIC_MEMBERSHIP, ...PREMIUM_MEMBERSHIP];
      const matched = allItems.find((card) =>
        cartItems.some((item) => item.text === card.text)
      );
      if (matched) {
        setSelectedCard(matched);
      }
    }
  }, [cartItems]);

  return (
    <>
      <div className="w-full lg:w-[40%] flex flex-col mt-3 lg:mt-0  lg:h-[700px]">
        <Heading head="SELECT ICONS BELOW" />
        <div className="flex-1 lg:overflow-y-auto space-y-5 px-2 scrollbar-hidden">
          <div className="flex flex-col gap-3 mt-4  mx-auto ">
            <p className="text-[8px] sm:text-sm font-medium font-futura text-black text-center">
              BASIC MEMBERSHIP OPTIONS:
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-auto justify-evenly">
              {basicWithCartData.map((data, index) => {
                const isSelected = selectedCard?.id === data.id;
                const isInCart = cartItems.some(
                  (item) => item.small === data.small
                );
                return (
                  <div
                    key={index}
                    onClick={() => handleNext(data)}
                    className={`border relative pt-[0.5px] w-[52px] h-[63px] md:w-[80px] md:h-[100px] flex flex-col items-center text-center cursor-pointer 
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
                      className={`absolute bottom-[-4px] md:bottom-[-10px] left-1/2 transform -translate-x-1/2 text-[5px] md:text-xs font-futura font-medium ${
                        isInCart ? "text-[#EB1C24]" : "text-black"
                      }`}
                    >
                      {data.small}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-6 mx-auto ">
            <p className="text-[8px] sm:text-sm font-medium font-futura text-black text-center">
              PREMIUM MEMBERSHIP OPTIONS:
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-auto justify-evenly">
              {premiumWithCartData.map((data, index) => {
                const isSelected = selectedCard?.id === data.id;
                const isInCart = cartItems.some(
                  (item) => item.small === data.small
                );
                return (
                  <div
                    key={index}
                    onClick={() => handleNext(data)}
                    className={`border relative  w-[52px] h-[63px] md:w-[80px] md:h-[100px] flex flex-col items-center text-center cursor-pointer 
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
                      className={`absolute bottom-[-6px] md:bottom-[-10px] left-1/2 transform -translate-x-1/2 text-[8px] md:text-xs font-futura font-medium ${
                        isInCart ? "text-[#EB1C24]" : "text-black"
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
      </div>
    </>
  );
};

const BASIC_MEMBERSHIP = [
  {
    id: 1,
    image: image1,
    text: "CAP SIZE",
    small: "M",
    uniqueId: "cap_3",
    link: "/gap",
  },
  {
    id: 2,
    image: image2,
    text: "LENGTH",
    small: "24”",
    uniqueId: "length_5",
    link: "/length",
  },
  {
    id: 3,
    image: image3,
    text: "DENSITY",
    small: "200%",
    uniqueId: "density_3",
    link: "/density",
  },
];
const PREMIUM_MEMBERSHIP = [
  {
    id: 4,
    image: image4,
    text: "LACE",
    small: "13X6",
    uniqueId: "lace_6",
    link: "/lace",
  },
  {
    id: 5,
    image: image5,
    text: "TEXTURE",
    small: "SILKY",
    uniqueId: "texture_1",
    link: "/texture",
  },
  {
    id: 6,
    image: color1,
    text: "COLOR",
    small: "OFFBLACK",
    uniqueId: "color_2",
    link: "/color",
  },
  {
    id: 7,
    image: image7,
    text: "HAIRLINE",
    small: "NATURAL",
    uniqueId: "hairline_1",
    link: "/hairline",
  },
  {
    id: 8,
    image: image8,
    text: "STYLING",
    small: "NONE",
    uniqueId: "extraStyle_0",
    link: "/extraStyle",
  },
  {
    id: 9,
    image: image8,
    text: "ADD-ON",
    small: "NONE",
    uniqueId: "addOn_0",
    link: "/addOn",
  },
];
