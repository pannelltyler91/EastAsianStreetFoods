import React from "react";
import {NavLink} from 'react-router-dom'
import {BsCart} from 'react-icons/bs'

function Navbar() {
  return (
      <div>
          <NavLink to='/cart'><BsCart/></NavLink>
      </div>
  );
}

export default Navbar;
