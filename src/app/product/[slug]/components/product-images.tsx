"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col">
      <div className="bg-accent h-[380px] flex w-full items-center justify-center">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`bg-accent rounded-lg flex justify-center items-center h-[100px]
            ${
              imageUrl === currentImage &&
              "border-2 border-primary border-solid"
            }
          `}
          onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
