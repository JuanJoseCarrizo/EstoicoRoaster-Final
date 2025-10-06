import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/nav'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <div>
      <Header />
      <Navigation />
      <Main />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App;
