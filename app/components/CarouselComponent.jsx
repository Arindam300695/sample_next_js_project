import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/image_2.jpeg",
  "/image_3.jpeg",
  "/image_4.jpeg",
  "/image_5.jpeg",
];

const imageWidth = 800; // Set your desired width
const imageHeight = 600; // Set your desired height

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="carouselComponent w-full"
        style={{
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
          position: "relative",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carouselComponent-item relative w-full h-full ${
              currentSlide === index ? "block" : "hidden"
            }`}
          >
            <Image
              src={image}
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button className="btn btn-circle" onClick={prevSlide}>
                ❮
              </button>
              <button className="btn btn-circle" onClick={nextSlide}>
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
