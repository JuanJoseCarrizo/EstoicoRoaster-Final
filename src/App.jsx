import { useState } from 'react'
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
import  UserCard  from './components/UserCard'
import  CargarBotonDeUsuario  from './components/CargarBotonDeUsuario'

function App() {

  return (
    <div>
      <Header />
      <Navigation />
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
      
      <Footer />
    </div>
  )
}

export default App;
