import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
   <li>
      <NavLink to="/" exact>Convert</NavLink>
    </li>
    <li>
      <NavLink to="/uid/history" >MY History</NavLink>
    </li>
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
    <li>
      <NavLink to="/logout">Logout</NavLink>
    </li>
  </ul>
};

export default NavLinks;