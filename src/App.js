import React from 'react';
import Cards from './components/Cards';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsuariosListar from './components/UsuariosList';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import UsuariosCreate from './components/UsuariosCreate';
import UsuariosUpdate from './components/UsuariosUpdate';
import UsuariosRead from './components/UsuariosRead';
import UsuariosDelete from './components/UsuariosDelete';
import Logo_Inditex from './assets/Logo_Inditex.png';

function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">Indetex</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Inicio
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Nosotros">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contactanos">Contactanos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/UsuariosList">Usuarios</a>
              </li>
            </ul>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/Registrarse">Registrarse</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Inicio Sesion">Inicio Sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} exact></Route>
          <Route path='/Nosotros' element={<Nosotros />} exact></Route>
          <Route path='/Contactanos' element={<Cards />} exact></Route>
          <Route path='/Inicio Sesion' element={<Cards />} exact></Route>
          <Route path='/Registrarse' element={<UsuariosCreate />} exact></Route>

          <Route path='/UsuariosCreate' element={<UsuariosCreate />} exact></Route>
          <Route path='/UsuariosRead/:_id' element={<UsuariosRead />} exact></Route>
          <Route path='/UsuariosList' element={<UsuariosListar />} exact></Route>
          <Route path='/UsuariosUpdate/:_id' element={<UsuariosUpdate />} exact></Route>
          <Route path='/UsuariosDelete/:_id' element={<UsuariosDelete />} exact></Route>
        </Routes>
      </BrowserRouter>

      <footer className="bd-footer py-4 py-md-5 mt-5 bg-primary">
        <div className="container py-4 py-md-5 px-4 px-md-3">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/">
                <img src={Logo_Inditex} alt="" width='150' height='50' className='img-fluid' />

              </a>
              <ul className="list-unstyled small text-muted">
                <li className="mb-2">Todo lo expuesto en esta aplicación web es con fines educativos.</li>
                <li className="mb-2">Todas Las imagenes y contenidos son de la autoria y propiedad intelectual de <a href="https://www.inditex.com/itxcomweb/es/home" target="_blank" rel="noreferrer">Indetex</a></li>
                <li className="mb-2">2022</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/">Inicio</a></li>
                <li className="mb-2"><a href="Nosotros">Nosotros</a></li>
                <li className="mb-2"><a href="Contactanos">Contactanos</a></li>
                <li className="mb-2"><a href="Iniciar Sesion">Iniciar Sesión</a></li>
                <li className="mb-2"><a href="Regristrarse">Registrarse</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Guides</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a></li>
                <li className="mb-2"><a href="https://bootswatch.com/" target="_blank" rel="noreferrer">Bootswatch</a></li>
                <li className="mb-2"><a href="https://sweetalert2.github.io/" target="_blank" rel="noreferrer">Sweetalert2</a></li>
                <li className="mb-2"><a href="https://animate.style/" target="_blank" rel="noreferrer">Animate</a></li>
                <li className="mb-2"><a href="https://uigradients.com/" target="_blank" rel="noreferrer">Uigradients</a></li>
                <li className="mb-2"><a href="https://www.mongodb.com/es" target="_blank" rel="noreferrer">MongoDB</a></li>
                <li className="mb-2"><a href="https://nodejs.org/es/" target="_blank" rel="noreferrer">Nodejs</a></li>
                <li className='mb-2'><a href='https://reactjs.org/' target="_blank" rel="noreferrer">React</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Projects</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="https://trello.com/es/login" target="_blank" rel="noreferrer">Trello</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;