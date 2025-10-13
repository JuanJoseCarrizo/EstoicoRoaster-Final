import { useState } from "react";
import { Container } from "react-bootstrap";


export default function FormularioControlado() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    alert(
      `Datos Enviados Correctamente`
    );
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div>
      <Container className="container d-flex justify-content-center align-items-center">
        <form onSubmit={manejarSubmit}>


          {/* nombre */}
          <div style={{ marginBottom: "10px"}}>
            <label>
              Nombre:{" "}
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Escribe tu nombre"
                required
              />
            </label>
          </div>

          {/* email */}
          <div style={{ marginBottom: "10px" }}>
            <label>
              Mail:{" "}
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tumail@****.com"
                required
              />
            </label>
          </div>

          {/* mensaje| */}
          <div style={{ marginBottom: "10px" }}>
            <label className="d-block">
              Mensaje:{" "}
              <textarea
                type="text"
                className="form-control"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Su mensaje..."
                required
              />
            </label>
          </div>


          <button type="submit" className="form-control">Enviar</button>
        </form>
      </Container>
    </div>

  )


}