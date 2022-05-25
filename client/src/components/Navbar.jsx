import React from "react";
import {Link} from "react-router-dom"
function Navbar(){
  return (
    <nav className="navbar bg-info container">
      <h4><Link className="link" to="/">Page0</Link></h4>
      <h4><Link className="link" to="/page1">Page1</Link></h4>
    </nav>
  )
}
export default Navbar;
