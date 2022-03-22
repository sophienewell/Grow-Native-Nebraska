import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="flex-container bg-green padding-1 font-karla text-white">
      <NavLink className="center flex-item link" to="home">
        Home
      </NavLink>
      <NavLink className="flex-item center link" to="why">
        Why grow native?
      </NavLink>
      <NavLink className="center flex-item link" to="search">
        Browse native plants
      </NavLink>
      <NavLink className="center flex-item link" to="tips">
        Tips
      </NavLink>
    </nav>
  );
}

export default Menu;
