import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default () => {
  return (
    <header>
      <h1>PCS Mongo React Socket IO Blog</h1>
      <h2>Welcome to the blog!</h2>
      <NavLink to="/">Home</NavLink> | <NavLink to="/addPost">Add Post</NavLink>
    </header>
  );
}