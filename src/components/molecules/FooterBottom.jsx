import styled from "styled-components";
import SocialLinks from "../atoms/SocialLinks";
import FooterSection from "../atoms/FooterSection";

// Styled Components
const FooterBottomWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2.5rem;
    padding: 1.25rem;
  }

  @media (min-width: 768px) {
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    gap: 5rem;
  }
`;

const GradientText = styled.p`
  margin-top: 0.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #69c7ea 20%, #e8d20e 50%, #d71987 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

// Main Component
export const FooterBottom = () => {
  return (
    <FooterBottomWrapper>
      <FooterSection title="Torino Print" link="/home" isInternalLink>
        <GradientText>
          Choose the design, <br /> we print it for you.
        </GradientText>
      </FooterSection>

      <FooterSection
        title="Visit us"
        link="https://maps.app.goo.gl/NF1gDD6PexJeXR7w9"
      >
        <p>
          C/ de Mallorca, 370 <br /> Local, Eixample <br /> 08013 Barcelona
        </p>
      </FooterSection>

      <FooterSection title="Our contact" link="/contact" isInternalLink>
        <p>torinoprint@gmail.com</p>
        <p>Tel. +34 696 96 96 96</p>
      </FooterSection>

      <FooterSection title="Follow us">
        <SocialLinks />
      </FooterSection>
    </FooterBottomWrapper>
  );
};

export default FooterBottom;
