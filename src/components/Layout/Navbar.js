import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="main-nav">
    <Link to="/">Home</Link>
    <Link to="/teams">Teams</Link>
    <Link to="/players">Players</Link>
    <Link to="/seasonleaders">Season Leaders</Link>
    <Link to="/games">Games</Link>
  </nav>
);

export default Navbar;