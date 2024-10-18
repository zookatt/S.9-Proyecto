import SocialLinks from "../atoms/SocialLinks";
import FooterSection from "../atoms/FooterSection";

export const FooterBottom = () => {
  return (
    <section className="mt-4 md:flex justify-around md:gap-10 text-white">
      <FooterSection title="Torino Print" link="/home" isInternalLink>
        <p
          className="text-white font-bold mt-2"
          style={{
            background:
              "linear-gradient(to right, #69C7EA 20%, #E8D20E 50%, #D71987 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Choose the design, <br /> we print it for you.
        </p>
      </FooterSection>

      <FooterSection
        title="Visit us"
        link="https://maps.app.goo.gl/NF1gDD6PexJeXR7w9"
      >
        <p className="text-white mt-2">
          C/ de Mallorca, 370 <br /> Local, Eixample <br /> 08013 Barcelona
        </p>
      </FooterSection>

      <FooterSection title="Our contact" link="/contact" isInternalLink>
        <p className="text-white mt-2">torinoprint@gmail.com</p>
        <p className="text-white">Tel. +34 696 96 96 96</p>
      </FooterSection>

      <FooterSection title="Follow us">
        <SocialLinks />
      </FooterSection>
    </section>
  );
};

export default FooterBottom;
