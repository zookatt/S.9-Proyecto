import PropTypes from "prop-types";

export const CarouselDot = ({ isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`rounded-full sm:w-3 sm:h-3 w-1 h-1 cursor-pointer ${
      isActive ? "bg-white" : "bg-gray-500"
    }`}
  ></div>
);

CarouselDot.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
