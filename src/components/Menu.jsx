import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <nav className="flex-container bg-green padding-1 font-karla text-white">
      <FontAwesomeIcon icon={faSeedling} size="xl" />
      <div>
        <NavLink className="center link padding-1 text-lg" to="home">
          Grow Native Nebraska
        </NavLink>
      </div>
      <div className="r-align flex container line-height">
        <NavLink className="center link padding-1" to="why">
          Why grow native?
        </NavLink>
        <NavLink className="center link padding-1" to="search">
          Browse native plants
        </NavLink>
        <NavLink className="center link padding-1" to="mailing-list">
          Mailing List
        </NavLink>
      </div>
    </nav>
  );
}

export default Menu;
