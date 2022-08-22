import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './planet.png';
import navStyle from './Nav.module.css';

const Nav = () => (
  <nav className={navStyle.nav}>
    <div className={navStyle.navLeft}>
      <img src={planet} alt="logo" className={navStyle.logo} />
      <navLink to="/">
        <h1>Space Travellers Hub</h1>
      </navLink>
    </div>
    <div className={navStyle.navRight}>
      <ul className={navStyle.navLinks}>
        <li>
          <NavLink to="/" className={navStyle.navLink}>
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="missions" className={navStyle.navLink}>
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink to="myprofile" className={navStyle.navLink} id={navStyle.profile}>
            Profile
          </NavLink>
        </li>
      </ul>

    </div>
  </nav>
);

export default Nav;
