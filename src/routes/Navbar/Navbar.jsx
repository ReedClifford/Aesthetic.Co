import { Fragment, useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/aesthetic-logo.png";
import { UserContext } from "../../contexts/user.context";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  console.log("No User logged in yet");
  return (
    <Fragment>
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
    </Fragment>
  );
};
export default Navbar;
