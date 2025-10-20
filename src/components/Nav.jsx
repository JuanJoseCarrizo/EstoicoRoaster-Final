import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="sm" sticky="top" bg="white" variant="light" className="py-1">
      <Container>

        {/* Botón hamburguesa */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto w-100 justify-content-between align-items-center flex-lg-row text-center">
            {/* Links de la izquierda */}
            <div className="d-flex flex-column flex-lg-row">
              <Nav.Link href="#" className="mx-2 fs-6 text-dark">
                Inicio
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 fs-6 text-dark">
                Servicios
              </Nav.Link>
            </div>

            {/* Logo en el centro en desktop, derecha en móvil */}
            <Navbar.Brand
              href="#"
              className="my-2 my-lg-0 mx-0 mx-lg-3 fw-bold fs-2 text-primary"
            >
              <img
                src={`${import.meta.env.BASE_URL}imagenes/logo.png`}
                alt="Logo"
                width="30"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>

            {/* Links de la derecha */}
            <div className="d-flex flex-column flex-lg-row">
              <Nav.Link href="#" className="mx-2 fs-6 text-dark">
                Nosotros
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 fs-6 text-dark">
                Contacto
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;