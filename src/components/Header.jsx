import React from "react";
import { Container } from "react-bootstrap";



const Header = () => {

    return (
        <header className="bg-black text-white py-2 shadow-sm">
            <Container>
                <h1 className="fw-light fs-5 lead text-center text-white">DEL GRANO A LA TAZA</h1>
            </Container>
        </header>
    );
};

export default Header;