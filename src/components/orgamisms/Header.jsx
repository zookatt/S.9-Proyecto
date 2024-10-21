import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authContext } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/Button";
import { NavMenu } from "../molecules/NavMenu";
import { UserMenu } from "../molecules/UserMenu";

const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  padding: 1rem 0;

  @media (min-width: 640px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
  }

  .dark & {
    background-color: #1f2937;
  }
`;

const Nav = styled.nav`
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  flex: none;
  font-size: 1.25rem;
  font-weight: 600;
  color: black;
  align-self: flex-start;

  .dark & {
    color: white;
  }

  @media (min-width: 640px) {
    order: 1;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 640px) {
    order: 3;
  }
`;

const CollapseButton = styled(Button)`
  @media (min-width: 640px) {
    display: none;
  }
`;

const NavMenuWrapper = styled.div`
  overflow: hidden;
  transition: all 300ms;
  flex-basis: 100%;
  flex-grow: 1;

  @media (min-width: 640px) {
    flex-grow: 0;
    flex-basis: auto;
    display: block;
    order: 2;
  }
`;

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
    <HeaderWrapper>
      <Nav aria-label="Global">
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <NavActions>
          <CollapseButton
            type="button"
            className="p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={toggleCollapse}
            aria-controls="navbar-alignment"
            aria-label="Toggle navigation"
          >
            <svg
              className={`w-4 h-4 ${isCollapsed ? "" : "hidden"}`}
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
              className={`w-4 h-4 ${isCollapsed ? "hidden" : ""}`}
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </CollapseButton>
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
        </NavActions>
        <NavMenuWrapper
          id="navbar-alignment"
          className={`${isCollapsed ? "hidden sm:block" : ""}`}
        >
          <NavMenu />
        </NavMenuWrapper>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
