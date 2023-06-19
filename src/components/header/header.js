import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import './header.css';
import logoZoo from './logo-zoo.png';

const Header = () => {

    return (
      <>
        <header className="sticky-top">
          <Navbar expand="lg" className="navAndFooter">
            <Container fluid>
              <Navbar.Brand>
                <Link
                  to="/"
                  className="navbar-brand text-light fs-2 d-none d-sm-block"
                  style={{ fontWeight: 'bold' }}
                >
                  <img
                    src={logoZoo}
                    className="rounded-circle"
                    alt="logo"
                    style={{ height: '60px' }}
                  /> MangoPark
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarMangoPark" className="white" />
              <Navbar.Collapse id="navbarMangoPark">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
                  <li className="nav-item class_li" >
                    <Link
                      to="/"
                      className="nav-link text-white"
                      aria-current="page"
                    >
                      <i class="bi bi-house-door-fill"> Inicio</i>
                    </Link>
                  </li>
                  <li className="nav-item class_li" >
                    <Link
                      to="/historia"
                      className="nav-link text-white"
                    >
                      <i className="bi bi-book-fill"> Historia</i>
                    </Link>
                  </li>
                  <li className="nav-item class_li" >
                    <Link
                      to="/zoologicos"
                      className="nav-link text-white"
                    >
                      <i class="bi bi-info-circle-fill"> Zoologicos</i>
                    </Link>
                  </li>
                  <li className="nav-item class_li" >
                    <Link
                      to="/animales"
                      className="nav-link text-white"
                    >
                      <i class="bi bi-binoculars-fill"> Animales</i>
                    </Link>
                  </li>
                  <li className="nav-item class_li" >
                    <Link
                      to="/tienda"
                      className="nav-link text-white"
                    >
                      <i class="bi bi-bag-check-fill"> tienda</i>
                    </Link>
                  </li>
                  <li className="nav-item class_li" >
                    <Link
                      to="/contactos"
                      className="nav-link text-white"
                    >
                      <i class="bi bi-telephone-fill"> Contactanos</i>
                    </Link>
                  </li>
                </ul>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  };
  

export { Header };
