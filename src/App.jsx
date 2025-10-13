import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/nav'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import FormularioControlado from './components/formularios/FormularioControlado';

function App() {

  return (
    <div>
      <Header />
      <Navigation />
      <Main />
      <Gallery />
      <FormularioControlado/>
      <Footer />
    </div>
  )
}

export default App;
