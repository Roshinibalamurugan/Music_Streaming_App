import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/playlist">Playlist</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;
