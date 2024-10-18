import PropTypes from "prop-types";
import email from "../../assets/images/email.png";
import instagram from "../../assets/images/instagram.png";
import whats from "../../assets/images/whats.png";

const SocialLink = ({ href, src, alt }) => (
  <div>
    <a href={href}>
      <img src={src} className="w-[35px]" alt={alt} />
    </a>
  </div>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const SocialLinks = () => (
  <div className="flex justify-evenly mt-2">
    <SocialLink href="https://wa.me/653539287" src={whats} alt="WhatsApp" />
    <SocialLink href="mailto:zotova.ea@gmail.com" src={email} alt="Email" />
    <SocialLink
      href="https://www.instagram.com/torinoprint370/"
      src={instagram}
      alt="Instagram"
    />
  </div>
);

export default SocialLinks;
