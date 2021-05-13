import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const NavBar = () => {
  return (
    <nav>
      <div>
        <h1> Gamer Paradise</h1>
      </div>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  );
};

export default NavBar;
