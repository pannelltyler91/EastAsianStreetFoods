import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container'

function Navbar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">EASF</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/menu">Menu</Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbar;
