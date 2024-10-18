import PropTypes from "prop-types";

export const CarouselImage = ({ src, alt }) => <img src={src} alt={alt} />;

CarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
