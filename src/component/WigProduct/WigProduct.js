"use client";
import { imagehair1, imagehair2, imagehair3, leaf } from "@/app/assest";
import Image from "next/image";
import { useState } from "react";

const WigProduct = () => {
  const images = [imagehair1, imagehair2, imagehair3];
  const [selectedImage, setSelectedImage] = useState(images[1]);

  return (
    <div>
      <div
        className="relative w-[250px] h-[350px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${leaf.src})` }}
      >
        <p className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-5xl sm:text-6xl font-covered text-[#EB1C24] z-20">
          NOIR
        </p>

        <Image
          src={selectedImage}
          alt="Selected Wig"
          width={240}
          height={390}
          className="absolute left-1/2 top-[57%] -translate-x-1/2 -translate-y-1/2 z-10"
        />
      </div>

      <div className="flex justify-center space-x-2 mb-3 mt-2">
        {images.map((img, index) => (
          <div
            key={index}
            className={`border-1 py-[3px] px-[1px] cursor-pointer  ${
              selectedImage === img ? "border-black" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(img)}
          >
            <div
              className="relative w-[54px] h-[74px] bg-cover bg-center flex items-center justify-center "
              style={{ backgroundImage: `url(${leaf.src})` }}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={60}
                height={80}
                className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 z-10"
              />
            </div>
            {/* <p className="text-xs text-center mt-1">Style {index + 1}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WigProduct;
