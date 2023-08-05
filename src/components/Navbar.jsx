import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="h-16 flex items-center justify-between px-4">
        <div>
          <p>Limo</p>
        </div>
        <div className="flex items-center space-x-4 m-auto">
          <NavLink
            to="/"
            exact
            className="text-sm hover:text-gray-600"
            activeClassName="text-red-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/vehicles"
            exact
            className="text-sm hover:text-gray-600"
            activeClassName="text-red-600"
          >
            Vehicles
          </NavLink>
          <NavLink
            to="/about"
            exact
            className="text-sm hover:text-gray-600"
            activeClassName="text-red-600"
          >
            About us
          </NavLink>
          <NavLink
            to="Contacts"
            exact
            className="text-sm hover:text-gray-600"
            activeClassName="text-red-600"
          >
            Contacts
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
