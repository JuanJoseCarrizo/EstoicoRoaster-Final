import React from "react";
import { Container, Nav, Navbar , Button , Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../paginas/AuthContext';

/* AGREGADO */
import { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';



const Navigation = () => {

  const { carrito } = useContext(CartContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const { token, logout } = useAuth();   // token viene del contexto
  const isAuth = !!token;                // <-- ESTO FALTABA
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar expand="sm" sticky="top" bg="white" variant="light" className="py-1">
      <Container>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto w-100 justify-content-between align-items-center flex-lg-row text-center">

            {/* Izquierda */}
            <div className="d-flex flex-column flex-lg-row">
              <Nav.Link as={Link} to="/" className="mx-2 fs-6 text-dark">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/productos" className="mx-2 fs-6 text-dark">Productos</Nav.Link>
              
              <Nav.Link as={Link} to="/infaltables" className="mx-2 fs-6 text-dark">Infaltables</Nav.Link>
              
              
            </div>

            {/* Logo */}
            <Navbar.Brand as={Link} to="/" className="my-2 my-lg-0 mx-0 mx-lg-3 fw-bold fs-2 text-primary">
              <img
                src={`${import.meta.env.BASE_URL}imagenes/logo.png`}
                alt="Logo"
                width="30"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>

            {/* Derecha */}
            <div className="d-flex flex-column flex-lg-row">
              <Nav.Link as={Link} to="/ofertas" className="mx-2 fs-6 text-dark">Ofertas</Nav.Link>
              <Nav.Link as={Link} to="/contacto" className="mx-2 fs-6 text-dark">Contacto</Nav.Link>


              {isAuth && (
                <>
                  <Nav.Link as={Link} to="/admin" className="mx-2 fs-6 text-dark">Admin</Nav.Link>
                  <Nav.Link as={Link} to="/perfil" className="mx-2 fs-6 text-dark">Perfil</Nav.Link>
                </>
              )}

              {!isAuth ? (
                <Nav.Link as={Link} to="/login" className="mx-2 fs-6 text-dark">
                  Login
                </Nav.Link>
              ) : (
                <Button className="btn btn-outline-light" onClick={handleLogout}>
                  Cerrar sesión
                </Button>
              )}

              <Link to="/carrito" className="text-dark position-relative">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {totalItems > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </Badge>
              )}
            </Link>

            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;