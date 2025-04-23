import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => (
  <div>
    <h2>Available Courses</h2>
    <ul>
      <li><Link to="/courses/react">React for Beginners</Link></li>
      <li><Link to="/courses/js">JavaScript Mastery</Link></li>
    </ul>
  </div>
);

export default Courses;
