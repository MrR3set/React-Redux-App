import React from 'react';
import {
    NavLink
  } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navContainer">
        <div className="navbar">
            <NavLink to="swapi">Stars wars</NavLink>
            <NavLink to="rick-n-morty">Rick and Morty</NavLink>
        </div>
    </div>
  );
}

export default Navbar;


