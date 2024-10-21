import PropTypes from "prop-types";
import { CarouselButton } from "../atoms/CarouselButton";
import back from "../../assets/images/back.png";
import next from "../../assets/images/next.png";
import freemug from "../../assets/images/freemug.png";
import newdesign from "../../assets/images/newdesign.png";
import totebagoffer from "../../assets/images/totebagoffer.png";
import { useState } from "react";

export const CarouselControls = ({ onPrevious, onNext }) => {
  const [current, setCurrent] = useState(0);
  const images = [freemug, newdesign, totebagoffer];
  const [previousSlide, setPreviousSlide] = useState(0);

  const handlePreviousSlide = () => {
    onPrevious(); // Call the onPrevious function
    setPreviousSlide(
      previousSlide === 0 ? images.length - 1 : previousSlide - 1,
    );
  };

  const nextSlide = () => {
    onNext(); // Call the onNext function
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl hidden md:flex">
    <CarouselButton onClick={handlePreviousSlide} src={back} alt="back" />
    <CarouselButton onClick={nextSlide} src={next} alt="next" />
  </div>;
};
CarouselControls.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};
