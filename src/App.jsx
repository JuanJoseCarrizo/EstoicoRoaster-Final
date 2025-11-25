import Header from './components/Header'
import Navigation from './components/nav'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

import FormularioControlado from './components/formularios/FormularioControlado';
import { Container } from 'react-bootstrap'
import { UserProvider } from './Context/UserContext'
import UserCard from './components/UserCard'
import CargarBotonDeUsuario from './components/CargarBotonDeUsuario'

/*****  Navegador con ruta protegida  *****/
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './paginas/Inicio';
import Login from './paginas/Login';
import Productos from './paginas/Productos';
import Perfil from './paginas/Perfil';
import Administracion from './paginas/Administracion';
import NoEncontrado from './paginas/NoEncontrado';
import RutaProtegida from './components/RutaProtegida';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Navigation />

      <Routes>
        <Route
          path="/" element={
            <>
              <Inicio />
              <Main />
              <Gallery />
              <FormularioControlado />

              <UserProvider>
                <Container>
                  <h1 className='text-center'>Clientes</h1>
                  <UserCard />
                  <CargarBotonDeUsuario />
                </Container>
              </UserProvider>
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos />} />

        {/* Rutas protegidas */}
        <Route path="/perfil/:id" element={
          <RutaProtegida>
            <Perfil />
          </RutaProtegida>
        } />

        <Route path="/admin" element={
          <RutaProtegida>
            <Administracion />
          </RutaProtegida>
        } />

        {/* Si se va a una ruta incorrecta voy a mostrar no encontrado */}
        <Route path="*" element={<NoEncontrado />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;