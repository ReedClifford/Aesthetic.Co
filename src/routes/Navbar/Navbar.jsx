import { Fragment, useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/aesthetic-logo.png";
import CartIcon from "../../components/Cart Icon/CartIcon";
import CardDropdown from "../../components/CartDropdown/CartDropdown";
import { DropdownContext } from "../../contexts/cartDropdown.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utls/firebase/firebase.utils";
const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  console.log("No User logged in yet");
  const { isActive } = useContext(DropdownContext);

  return (
    <Fragment>
      <nav className="navbar">
        <div>
          <Link to="/">
            <img src={logo} alt="logo " className="md:w-48 " />
          </Link>
        </div>
        <ul className="navbar-items">
          <li className="nav-link">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {currentUser ? (
            <button className="nav-link" onClick={signOutUser}>
              Sign Out
            </button>
          ) : (
            <li className="nav-link">
              <NavLink to="/signIn">Sign In</NavLink>
            </li>
          )}
          {currentUser && <CartIcon />}
        </ul>
        {isActive && <CardDropdown />}
      </nav>
      <Outlet />
    </Fragment>
  );
};
export default Navbar;
