// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Anavbar = () => {
  const get = localStorage.getItem('user');

  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "#33d7ff" }}>
      <Container>
        <Navbar.Brand>
          <Link to='/shome' style={{ color: "black", textDecoration: "BOLD" }}>BOOKSTORE (ADMIN)</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/ahome">
              <Button variant="outline-light" style={{ margin: "5px" }}>Home</Button>
            </Link>
            <Link to="/users">
              <Button variant="outline-light" style={{ margin: "5px" }}>Users</Button>
            </Link>
            <Link to="/sellers">
              <Button variant="outline-light" style={{ margin: "5px" }}>Sellers</Button>
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

export default Anavbar;
