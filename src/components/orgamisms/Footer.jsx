import styled from "styled-components";
import { FooterBottom } from "../molecules/FooterBottom";

// Styled Components
const FooterWrapper = styled.footer`
  background-color: #0b3d91;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
    margin: 3rem 0;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;
  padding: 0.25rem;

  iframe {
    width: 100%;
    height: 300px;
    border-radius: 20px;
    border: none;
  }

  @media (min-width: 768px) {
    iframe {
      height: 450px;
    }
  }

  @media (min-width: 1024px) {
    iframe {
      height: 500px;
    }
  }
`;

const FooterBottomContainer = styled.div`
  width: 100%;
  max-width: 1290px;
  padding: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 1.5rem;
    text-align: start;
  }
`;

// Main Component
export const Footer = () => {
  return (
    <FooterWrapper>
      <MapContainer>
        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.7553060992404!2d2.1702543765666626!3d41.40112009514261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3ed7f13ece3%3A0x605aa28767510871!2sTorino%20Print!5e0!3m2!1ses!2ses!4v1709573277676!5m2!1ses!2ses"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>

      <FooterBottomContainer>
        <FooterBottom />
      </FooterBottomContainer>
    </FooterWrapper>
  );
};
