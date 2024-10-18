import PropTypes from "prop-types";

export const Button = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={`py-2 px-4 inline-flex items-center hover:text-white gap-x-2 text-sm font-bold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${className}`}
  >
    {children}
  </button>
);
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
