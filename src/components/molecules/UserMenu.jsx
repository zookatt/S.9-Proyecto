import { Link } from "react-router-dom";
import { Button } from "../atoms/Button";
import user from "../../assets/images/user.png";
import PropTypes from "prop-types";

export const UserMenu = ({ onLogout }) => (
  <div className="flex gap-2">
    <div className="nav-item">
      <Link to="/user">
        <span className="nav-link mx-2 flex font-bold text-gray-800 ">
          <img
            src={user}
            alt="user"
            className="me-3"
            style={{ width: "20px" }}
          />
          My profile
        </span>
      </Link>
    </div>
    <div className="nav-item">
      <Button
        onClick={onLogout}
        className="nav-link font-bold text-gray-800 hover:text-SuperPink"
      >
        LOG OUT
      </Button>
    </div>
  </div>
);

UserMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
