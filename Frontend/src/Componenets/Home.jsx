// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "#33d7ff" }}>
      <Container>
        <Navbar.Brand>
        <Navbar.Brand style={{ color: 'black', fontWeight: 'bold',}}>BOOKSTORE</Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/login" style={{ margin: "10px" }}>
              <Button variant="outline-light">User</Button>
            </Link>
            <Link to="/slogin" style={{ margin: "10px" }}>
              <Button variant="outline-light">Seller</Button>
            </Link>
            <Link to="/alogin" style={{ margin: "10px" }}>
              <Button variant="outline-light">Admin</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Home;
