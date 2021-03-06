import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function ASNavbar(){
  return(
    <div className="container" id="container">
    <Navbar  bg="light" expand="lg">
<Container>
  <Navbar.Brand href="/">League Tools</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title="Ability Summaries" id="basic-nav-dropdown">
        <NavDropdown.Item href="/abilitysummaries/champion">Champion</NavDropdown.Item>

        <NavDropdown.Divider />
        <NavDropdown.Item href="/abilitysummaries/livegame">Live Game</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    </div>
  )
}

export default ASNavbar;

// import React from "react";
// import {Link} from "react-router-dom"
// import "./Navbar.css";
// function Navbar(){
//   return (
//     <nav class="navbar navbar-expand-lg bg-light container">
//   <div class="container-fluid">
//     <h5><Link className="navbar-brand link" to="/">LT.GG</Link></h5>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <h5><Link className="nav-link active link" to="/page1">Home</Link></h5>
//         </li>
//         <li class="nav-item">
//           <h5><Link className="nav-link active link" to="/">Simple Spells</Link></h5>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"></hr></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     // <nav className="navbar bg-light container">
//     //   <h4><Link className="link" to="/">Home</Link></h4>
//     //   <h4><Link className="link" to="/page1">Simple Spells</Link></h4>
//     //   <input></input>
//     // </nav>
//   )
// }
// export default Navbar;
