import { useState } from "react";
import freemug from "../assets/images/freemug.png";
import newdesign from "../assets/images/newdesign.png";
import totebagoffer from "../assets/images/totebagoffer.png";
import next from "../assets/images/next.png";
import back from "../assets/images/back.png";
export const Carousel = () => {
  let [current, setCurrent] = useState(0);
  const images = [freemug, newdesign, totebagoffer];
  let previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden rounded-[20px] relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((s, index) => {
          return <img key={index} src={s} alt={`slide-${index}`} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl hidden md:flex">
        <button onClick={previousSlide}>
          <img src={back} alt="back" style={{ width: "30px" }} />
        </button>
        <button onClick={nextSlide}>
          <img src={next} alt="next" style={{ width: "30px" }} />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {images.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full sm:w-3 sm:h-3 w-1 h-1 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
