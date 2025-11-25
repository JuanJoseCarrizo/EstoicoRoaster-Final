import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Main = () => {
    return (
        <main className="py-5" style={{ backgroundColor: "#D9DFCC" }}>
            <div>
                <img
                    src={`${import.meta.env.BASE_URL}imagenes/Tarjeta-Logo.png`}
                    alt="imagenen de logo principal"
                    className="w-100 mb-5"
                />
            </div>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="mb-3">
                        <img src={`${import.meta.env.BASE_URL}/imagenes/catalogo div 1.png`} alt="Imagen random"
                            className="img-fluid rounded shadow"
                        />
                    </Col>
                    <Col md={6} className="mb-3">
                        <img src={`${import.meta.env.BASE_URL}/imagenes/catalogo div 2.png`} alt="Imagen random"
                            className="img-fluid rounded shadow"
                        />
                    </Col>
                </Row>
                <Row className="align-items-stretch d-flex d-flex justify-content-around">
                    {/* Columna 1 */}
                    <Col md={6} className="d-flex flex-column mb-3">
                        <img
                            src={`${import.meta.env.BASE_URL}/imagenes/catalogo div 3.png`}
                            alt="Imagen random"
                            className="img-fluid rounded shadow flex-grow-1"
                        />
                    </Col>

                    {/* Columna 2 */}
                    <Col md={6} className="d-flex flex-column rounded" style={{ backgroundColor: "#F1EDEB" }}>
                        <div className="d-flex flex-column flex-grow-1 justify-content-between">
                            <div>
                                <i className="bi bi-globe me-1"></i>
                                <Nav.Link
                                    href="https://www.instagram.com/estoicoroaster?utm_source=ig_web_button_share_sheet&igsh=MWR3NnVtN2UyZmw4OQ=="
                                >
                                    @estoicoroaster
                                </Nav.Link>

                                <i className="bi bi-instagram me-1"></i>
                                <Nav.Link href="https://estoicoroaster.empretienda.com.ar/#">
                                    https://estoicoroaster.empretienda.com.ar/#
                                </Nav.Link>
                            </div>

                            <img
                                src={`${import.meta.env.BASE_URL}/imagenes/catalogo div 4.png`}
                                alt="Imagen Div 4"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Main;