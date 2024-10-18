import PropTypes from "prop-types";

export const CarouselButton = ({ onClick, src, alt }) => (
  <button onClick={onClick}>
    <img src={src} alt={alt} style={{ width: "30px" }} />
  </button>
);

CarouselButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
