import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="font-bold text-gray-800 hover:text-DarkBlue dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
