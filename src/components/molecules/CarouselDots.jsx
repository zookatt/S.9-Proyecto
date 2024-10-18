import PropTypes from "prop-types";
import { CarouselDot } from "../atoms/CarouselDot";

export const CarouselDots = ({ images, currentIndex, onDotClick }) => (
  <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
    {images.map((_, i) => (
      <CarouselDot
        key={`dot-${i}`}
        isActive={i === currentIndex}
        onClick={() => onDotClick(i)}
      />
    ))}
  </div>
);
CarouselDots.propTypes = {
  images: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  onDotClick: PropTypes.func.isRequired,
};
