import React, { useState, useEffect } from "react";
import caro1Img from "../assets/caro1.jpg";
import caro2Img from "../assets/caro2.jpg";
import caro3Img from "../assets/caro3.jpg";
import caro4Img from "../assets/caro4.jpg";
import caro5Img from "../assets/caro5.jpg";

const images = [caro1Img, caro2Img, caro3Img, caro4Img, caro5Img];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);

  // Optional: Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-[80vh] sm:h-[60vh] min-h-[300px] overflow-hidden">
      <img
        src={images[current]}
        className="w-full h-full object-cover transition-all duration-500"
        alt={`Slide ${current + 1}`}
      />
      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full text-xl z-10"
      >
        ←
      </button>
      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full text-xl z-10"
      >
        →
      </button>
    </div>
  );
};

export default Carousel;
