import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-12 border-b">
      <ul className=" w-full flex justify-center px-2 gap-6 h-full items-center">
        <NavLink className="hover:text-sky-500" to="/home">
          Home
        </NavLink>
        <NavLink className="hover:text-sky-500" to="/users">
          Users
        </NavLink>
        <NavLink className="hover:text-sky-500" to="/settings">
          Settings
        </NavLink>
        <NavLink className="hover:text-sky-500" to="/contact">
          Contact
        </NavLink>
        <NavLink className="hover:text-sky-500" to="/about-us">
          About us
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
