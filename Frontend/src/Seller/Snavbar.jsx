// src/components/Navbar.js
// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Snavbar = () => {
  const get = localStorage.getItem('user');

  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "#33d7ff" }}>
      <Container>
        <Navbar.Brand>
          <Link to='/shome' style={{ color: "black", textDecoration: "bold" }}>BOOKSTORE (SELLER)</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/shome">
              <Button variant="outline-light" style={{ margin: "5px" }}>Home</Button>
            </Link>
            <Link to="/myproducts">
              <Button variant="outline-light" style={{ margin: "5px" }}>My Products</Button>
            </Link>
            <Link to="/addbook">
              <Button variant="outline-light" style={{ margin: "5px" }}>Add Books</Button>
            </Link>
            <Link to="/orders">
              <Button variant="outline-light" style={{ margin: "5px" }}>Orders</Button>
            </Link>
            <Link to="/">
              <Button variant="outline-light" style={{ margin: "5px" }}>Logout</Button>
            </Link>
            <h4 style={{ color: "white", paddingTop: "0px", marginLeft: "10px" }}>({JSON.parse(get).name})</h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Snavbar;


