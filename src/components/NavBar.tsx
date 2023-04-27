import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
}

export default NavBar;
