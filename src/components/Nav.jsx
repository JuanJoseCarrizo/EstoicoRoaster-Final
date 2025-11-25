import React from "react";
import { Container, Nav, Navbar , Button} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {

  const navigate = useNavigate();
  const isAuth = localStorage.getItem('auth') === 'true';

  const cerrarSesion = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  }


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
              <Nav.Link href="#" className="mx-2 fs-6 text-dark" as={Link} to={'/'}
              >
                Inicio
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 fs-6 text-dark" as={Link} to={'/productos'} >
                Productos
              </Nav.Link>
            </div>

            {/* Logo en el centro en desktop, derecha en móvil */}
            <Navbar.Brand
              href="#"
              className="my-2 my-lg-0 mx-0 mx-lg-3 fw-bold fs-2 text-primary" as={Link} to={'/'}
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
              <Nav.Link href="#" className="mx-2 fs-6 text-dark" as={Link} to={'/'}>
                Contacto
              </Nav.Link>



              {/* Links que se muestran si el usuario esta autenticado */}

              {isAuth && (
                <>
                <Nav.Link href="#" className="mx-2 fs-6 text-dark" as={Link} to={'/admin'}>
                  Admin
                </Nav.Link>

                <Nav.Link href="#" className="mx-2 fs-6 text-dark" as={Link} to={'/perfil/usuario123'}>
                  Perfil
                </Nav.Link>
                </>


              )}

              {/* Muetra login o logout segun inicie serion el usuario */}

              {!isAuth ? (
                <Nav.Link href="#" className="mx-2 fs-6 text-dark" as={Link} to={'/login'}>
                  Login
                </Nav.Link>):(

                <Button className="btn btn-outline-light" onClick={cerrarSesion}>Cerrar sesion</Button>

                )
              }

            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;