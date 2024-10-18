import { useState } from "react";
import { CarouselImage } from "../atoms/CarouselImage";
import { CarouselControls } from "../molecules/CarouselControls";
import { CarouselDots } from "../molecules/CarouselDots";
import freemug from "../../assets/images/freemug.png";
import newdesign from "../../assets/images/newdesign.png";
import totebagoffer from "../../assets/images/totebagoffer.png";

export const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const images = [freemug, newdesign, totebagoffer];

  const previousSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="overflow-hidden rounded-[20px] relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <CarouselImage key={index} src={src} alt={`slide-${index}`} />
        ))}
      </div>

      <CarouselControls onPrevious={previousSlide} onNext={nextSlide} />
      <CarouselDots
        images={images}
        currentIndex={current}
        onDotClick={setCurrent}
      />
    </div>
  );
};
