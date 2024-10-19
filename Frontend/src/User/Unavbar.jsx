// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Unavbar = () => {
  const get = localStorage.getItem('user');
  
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "#33d7ff" }}>
      <Container>
        <Navbar.Brand>
          <Link to='/uhome' style={{ color: 'black', fontweight: 'bold',}}>BOOKSTORE</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/uhome">
              <Button variant="outline-light" style={{ margin: "5px" }}>Home</Button>
            </Link>
            <Link to="/uproducts">
              <Button variant="outline-light" style={{ margin: "5px" }}>Books</Button>
            </Link>
            <Link to="/wishlist">
              <Button variant="outline-light" style={{ margin: "5px" }}>Wishlist</Button>
            </Link>
            <Link to="/myorders">
              <Button variant="outline-light" style={{ margin: "5px" }}>My Orders</Button>
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

export default Unavbar;
