import Header from './components/Header'
import Navigation from './components/Nav'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

import FormularioControlado from './components/formularios/FormularioControlado';
import Contacto from './paginas/Contacto';
import { Container } from 'react-bootstrap'
import { UserProvider } from './Context/UserContext'
import UserCard from './components/UserCard'
import CargarBotonDeUsuario from './components/CargarBotonDeUsuario'

import { AuthProvider } from './paginas/AuthContext';

/*****  Navegador con ruta protegida  *****/
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './paginas/Inicio';
import Login from './paginas/Login';
import Productos from './paginas/Productos';

import Ofertas from './components/Ofertas';
import Infaltables from './components/Infaltables';

import { CartProvider } from './components/CartContext';

import Carrito from './components/Carrito';
import CrudProductos from './components/CrudProductos';

import Perfil from './paginas/Perfil';
import Administracion from './paginas/Administracion';
import NoEncontrado from './paginas/NoEncontrado';
import RutaProtegida from './components/RutaProtegida';
import Dashboard from './Dashboard';

function App() {

  return (

    <AuthProvider>
      
      <CartProvider>
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
          <Route path="/contacto" element={<Contacto />} />

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

          <Route path="/dashboard" element={
            <RutaProtegida>
              <Dashboard />
            </RutaProtegida>
          } />


          <Route path="/administracion"
            element={<Login
            />} />


          {/* Crud y Productos */}
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/infaltables" element={<Infaltables />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/crud" element={<CrudProductos />} />


          {/* Si se va a una ruta incorrecta voy a mostrar no encontrado */}
          <Route path="*" element={<NoEncontrado />} />

        </Routes>

        


        <Footer />
      </BrowserRouter>
      </CartProvider>

    </AuthProvider>
  )
}

export default App;