import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
    <Link to="/">Home</Link> | <Link to="/courses">Courses</Link> | <Link to="/profile">Profile</Link>
  </nav>
);

export default Navbar;
