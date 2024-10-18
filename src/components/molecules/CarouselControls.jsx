import PropTypes from "prop-types";
import { CarouselButton } from "../atoms/CarouselButton";
import back from "../../assets/images/back.png";
import next from "../../assets/images/next.png";

export const CarouselControls = ({ onPrevious, onNext }) => (
  <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl hidden md:flex">
    <CarouselButton onClick={onPrevious} src={back} alt="back" />
    <CarouselButton onClick={onNext} src={next} alt="next" />
  </div>
);
CarouselControls.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};
