import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="#051b34" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="brand">
            Enow Divine
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link className="nav-links" href="#deets">
                <span>01. </span>
                About
              </Nav.Link>
              <Nav.Link className="nav-links" href="#deets">
                <span>02. </span>
                Services
              </Nav.Link>
              <Nav.Link className="nav-links" href="#deets">
                <span>03. </span>
                Portfolio
              </Nav.Link>
              <Nav.Link className="nav-links" href="#deets">
                <span>04. </span>
                Contacts
              </Nav.Link>
              <Nav.Link>
                <button className="resume">Resume</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavigationBar;
