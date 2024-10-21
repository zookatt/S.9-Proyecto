import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const SectionWrapper = styled.div`
  padding: 1rem;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
    padding-left: 0;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  color: inherit;
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff69b4;
  }

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
`;

// Main Component
const FooterSection = ({ title, children, link, isInternalLink }) => {
  const TitleComponent = link ? (isInternalLink ? Link : "a") : "div";
  const titleProps = link
    ? isInternalLink
      ? { to: link }
      : { href: link }
    : {};

  return (
    <SectionWrapper>
      <TitleComponent {...titleProps}>
        <Title>{title}</Title>
      </TitleComponent>
      {children}
    </SectionWrapper>
  );
};

FooterSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  isInternalLink: PropTypes.bool,
};

export default FooterSection;
