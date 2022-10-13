import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/aesthetic-logo.png";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="min-w-fit" />
          </Link>
        </div>
        <ul className="navbar-items">
          <li className="nav-link">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/signIn">Sign In</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </React.Fragment>
  );
};
export default Navbar;
