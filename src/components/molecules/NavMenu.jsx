import { NavLink } from "../atoms/NavLink";

export const NavMenu = () => (
  <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
    <NavLink to="/">HOME</NavLink>
    <NavLink to="/about">ABOUT</NavLink>
    <NavLink to="/design">DESIGN NOW</NavLink>
    <NavLink to="/products">PRODUCTS</NavLink>
    <NavLink to="/contact">CONTACT</NavLink>
  </div>
);
