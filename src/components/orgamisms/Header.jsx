import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/Button";
import { NavMenu } from "../molecules/NavMenu";
import { UserMenu } from "../molecules/UserMenu";

export const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useContext(authContext);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const handleLogout = () => {
    doSignOut().then(() => {
      navigate("/");
    });
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav
        className="max-w-[90rem] w-full mx-auto flex flex-wrap basis-full items-center justify-between"
        aria-label="Global"
      >
        <Link
          to="/"
          className="sm:order-1 flex-none text-xl font-semibold dark:text-white self-start"
        >
          <Logo />
        </Link>
        <div className="sm:order-3 flex items-center gap-x-2">
          <Button
            type="button"
            className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={toggleCollapse}
            aria-controls="navbar-alignment"
            aria-label="Toggle navigation"
          >
            <svg
              className="hs-collapse-open:hidden w-4 h-4"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <svg
              className="hs-collapse-open:block hidden w-4 h-4"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </Button>
          {userLoggedIn ? (
            <UserMenu onLogout={handleLogout} />
          ) : (
            <>
              <Link to="/login">
                <Button className="hover:bg-DarkBlue">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button className="hover:bg-SuperPink">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
        <div
          id="navbar-alignment"
          className={`hs-collapse ${
            isCollapsed ? "hidden" : ""
          } overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2`}
        >
          <NavMenu />
        </div>
      </nav>
    </header>
  );
};
