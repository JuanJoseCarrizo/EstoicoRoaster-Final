import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';


const Footer = () => {

  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <Container>
        <Row className="mb-3">
          {/* Enlaces */}
          <Col md={4} className="text-center text-md-start mb-2 mb-md-0">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Inicio</a></li>
              <li><a href="#servicios" className="text-white text-decoration-none">Servicios</a></li>
              <li><a href="#contacto" className="text-white text-decoration-none">Contacto</a></li>
            </ul>
          </Col>

          {/* Contacto */}
          <Col md={4} className="text-center mb-2 mb-md-0">
            <h5>Contacto</h5>
            <p className="mb-0">Email: estoicoRoaste@gmail.com</p>
            <p>Tel: +54 9 11 1234-5678</p>
          </Col>

          {/* Redes sociales */}
          <Col md={4} className="text-center text-md-end">
            <h5>Síguenos</h5>
            <a href="https://facebook.com" className="text-white me-3"><BsFacebook size={24} /></a>
            <a href="https://instagram.com" className="text-white me-3"><BsInstagram size={24} /></a>
            <a href="https://twitter.com" className="text-white"><BsTwitter size={24} /></a>
          </Col>
        </Row>
        <p className="mb-0">Derechos reservados</p>
      </Container>
    </footer>
  );

};

export default Footer;