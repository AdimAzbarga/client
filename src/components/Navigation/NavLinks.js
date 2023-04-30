import React ,{useContext} from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import { AuthContext } from "../../shared/Context/authContext";


const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>
        Convert
      </NavLink>
    </li>
    {auth.isLoggedIn &&
    <li>
      <NavLink to="/uid/history">MY History</NavLink>
    </li>}
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
    {auth.isLoggedIn &&
    <li>
      <NavLink to="/logout">Logout</NavLink>
    </li>}
  </ul>
};

export default NavLinks;
