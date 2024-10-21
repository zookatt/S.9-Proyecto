import styled from "styled-components";
import PropTypes from "prop-types";

const DotContainer = styled.div`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 9999px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "white" : "#6B7280")};
  transition: background-color 0.3s ease;

  @media (min-width: 640px) {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    background-color: ${(props) => (props.isActive ? "white" : "#9CA3AF")};
  }
`;

export const CarouselDot = ({ isActive, onClick }) => (
  <DotContainer isActive={isActive} onClick={onClick} />
);

CarouselDot.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CarouselDot;
