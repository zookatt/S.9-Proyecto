import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FooterSection = ({ title, children, link, isInternalLink }) => {
  const TitleComponent = link ? (isInternalLink ? Link : "a") : "div";
  const titleProps = link
    ? isInternalLink
      ? { to: link }
      : { href: link }
    : {};

  return (
    <div className="pl-6 mb-4">
      <TitleComponent {...titleProps}>
        <h2 className="font-bold hover:text-SuperPink cursor-pointer text-2xl max-w-xs">
          {title}
        </h2>
      </TitleComponent>
      {children}
    </div>
  );
};

FooterSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  isInternalLink: PropTypes.bool,
};

export default FooterSection;
