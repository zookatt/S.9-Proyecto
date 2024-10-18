import PropTypes from "prop-types";
import { useSnapshot } from "valtio";
import state from "../../store";

import { getContrastingColor } from "../3dModelComponent/config/helpers";

export const CustomButton = ({ type, customStyles, handleClick, title }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(["filled", "outline"]).isRequired,
  customStyles: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
