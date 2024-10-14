import React from 'react';
import { Offcanvas, Navbar, Nav } from 'react-bootstrap';
import './Nav.css';

const OffcanvasNavbar = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="/logo.jpg"
            alt="logo"
            style={{ height: '50px', width: 'auto' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} />
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={handleClose}>About</Nav.Link>
            <Nav.Link href="#services" onClick={handleClose}>Services</Nav.Link>
            <Nav.Link href="#contact" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasNavbar;
