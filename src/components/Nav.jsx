import React from "react";
import { Container , Nav , Navbar } from "react-bootstrap";


const Navigation = () => {
  return (
    <Navbar expand="lg" bg="white" variant="light" className="py-1">
      <Container className="d-flex justify-content-between align-items-center">

        {/* IZQUIERDA */}
        <Nav className="d-flex flex-row">
          <Nav.Link href="#" className="mx-2 fs-5 text-dark">
            Inicio
          </Nav.Link>
          <Nav.Link href="#" className="mx-2 fs-5 text-dark">
            Servicios
          </Nav.Link>
        </Nav>

        {/* CENTRO (LOGO / NOMBRE) */}
        <Navbar.Brand href="#" className="mx-auto fw-bold fs-3 text-primary">
          <img
            src="/imagenes/logo.png"
            alt="Logo"
            width="50"
            height="75"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* DERECHA */}
        <Nav className="d-flex flex-row">
          <Nav.Link href="#" className="mx-2 fs-5 text-dark">
            Nosotros
          </Nav.Link>
          <Nav.Link href="#" className="mx-2 fs-5 text-dark">
            Contacto
          </Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  );
};

export default Navigation;