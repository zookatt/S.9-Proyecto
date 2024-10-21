import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background-color: white;
  color: #1f2937;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .dark & {
    background-color: #0f172a;
    border-color: #374151;
    color: white;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #4b5563;
    }
  }

  ${(props) => props.className}
`;

export const Button = ({ onClick, children, className }) => (
  <StyledButton onClick={onClick} className={className}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
