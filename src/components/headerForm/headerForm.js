import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Form } from 'react-bootstrap';
import './headerForm.css';
import logoZoo from '../header/logo-zoo.png';

const HeaderForm = () => {


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
                <li className="nav-item class_li" style={{ marginRight: '20px' }}>
                  <Link
                    to="/"
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <i class="bi bi-house-door-fill"> Inicio</i>
                  </Link>
                </li>
                <li className="nav-item class_li" style={{ marginRight: '20px' }}>
                  <Link
                    to="/historia"
                    className="nav-link text-white"
                  >
                    <i className="bi bi-book-fill"> Historia</i>
                  </Link>
                </li>
                <li className="nav-item class_li" style={{ marginRight: '20px' }}>
                  <Link
                    to="/zoologicos"
                    className="nav-link text-white"
                  >
                    <i class="bi bi-info-circle-fill"> Zoologicos</i>
                  </Link>
                </li>
                <li className="nav-item class_li" style={{ marginRight: '20px' }}>
                  <Link
                    to="/animales"
                    className="nav-link text-white"
                  >
                    <i class="bi bi-binoculars-fill"> Animales</i>
                  </Link>
                </li>
                <li className="nav-item class_li" style={{ marginRight: '20px' }}>
                  <Link
                    to="/tienda"
                    className="nav-link text-white"
                  >
                    <i class="bi bi-bag-check-fill"> tienda</i>
                  </Link>
                </li>
                <li className="nav-item class_li" style={{ marginRight: '20px' }}>
                  <Link
                    to="/contactos"
                    className="nav-link text-white"
                  >
                    <i class="bi bi-telephone-fill"> Contactanos</i>
                  </Link>
                </li>
              </ul>

              <Form className={``}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export { HeaderForm };
