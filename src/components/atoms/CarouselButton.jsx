import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`;

const ButtonImage = styled.img`
  width: 30px;
  height: auto;
`;

export const CarouselButton = ({ onClick, src, alt }) => (
  <StyledButton onClick={onClick}>
    <ButtonImage src={src} alt={alt} />
  </StyledButton>
);

CarouselButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CarouselButton;
