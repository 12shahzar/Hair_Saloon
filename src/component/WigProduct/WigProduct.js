"use client";
import { imagehair1, imagehair2, imagehair3, leaf } from "@/app/assest";
import Image from "next/image";
import { useState } from "react";
import { BackBtn } from "..";
import { useRouter ,usePathname} from "next/navigation";
const WigProduct = () => {
  const images = [imagehair1, imagehair2, imagehair3];
  const [selectedImage, setSelectedImage] = useState(images[1]);
  const router = useRouter();
  const pathname = usePathname(); 
   const handleBack = () => {
    router.push("/build-wig");
  };
  return (
    <div>
      <div
        className="relative w-[250px] h-[350px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${leaf.src})` }}
      >
        <p className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-5xl sm:text-6xl font-covered text-[#EB1C24] z-20">
          NOIR
        </p>

        <img 
  src={selectedImage.src} 
  alt="Selected Wig"
  className="absolute left-1/2 top-[49%] -translate-x-1/2 -translate-y-1/2 z-10"
  style={{ width: "230px", height: "355px", objectFit: "cover" }}
/>

      </div>

      <div className="flex justify-center space-x-2 mb-3 mt-2">
        {images.map((img, index) => (
          <div
            key={index}
            className={`border-1 py-[3px] pl-[0.6899px] pr-[0.7px] cursor-pointer  ${
              selectedImage === img ? "border-black" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(img)}
          >
            <div
              className="relative w-[64px] h-[84px] bg-cover bg-center flex items-center justify-center "
              style={{ backgroundImage: `url(${leaf.src})` }}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={60}
                height={80}
                className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 z-10"
              />
            </div>
            {/* <p className="text-xs text-center mt-1">Style {index + 1}</p> */}
          </div>
        ))}
      </div>


      
       {pathname !== "/build-wig" && (
        <div>
          {/* 
        <Image
          src={selectedImage}
          alt="Selected Wig"
          width={230}
          height={380}
          className="absolute left-1/2 top-[51.5%] -translate-x-1/2 -translate-y-1/2 z-10"
        /> */}
      <BackBtn onClick={handleBack} />
      </div>
      )}

    </div>
  );
};

export default WigProduct;
