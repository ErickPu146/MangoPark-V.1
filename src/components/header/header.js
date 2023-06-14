import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Form, Button } from 'react-bootstrap';
import {
  HouseDoorFill,
  BookFill,
  InfoCircleFill,
  BinocularsFill,
  BagCheckFill,
  TelephoneFill,
} from 'react-bootstrap-icons';
import './header.css';
import logoZoo from './logo-zoo.png';

const Header = () => {

    const [show, setShow] = useState(false);
    console.log(show)

    const mostrar = () => {
        setShow(true);
    };

    const noMostrar = () => {
        setShow(false);
    }

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
                />
                MangoPark
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarMangoPark" className="white" />
            <Navbar.Collapse id="navbarMangoPark">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
                <li className="nav-item class_li" style={{ marginRight: '20px' }}>
                  <Link
                    to="/"
                    className="nav-link text-white"
                    onClick={noMostrar}
                    aria-current="page"
                  >
                    <HouseDoorFill fontSize={20} />
                    <span>Inicio</span>
                  </Link>
                </li>
                <li className="nav-item class_li" style={{ marginRight: '20px' }}>
                  <Link
                    to="/historia"
                    className="nav-link text-white"
                    onClick={noMostrar}
                  >
                    <i className="bi bi-book-fill"></i>
                    <BookFill fontSize={20} />
                    Historia
                  </Link>
                </li>
                <li className="nav-item class_li" style={{ marginRight: '20px' }}>
                  <Link
                    to="/zoologicos"
                    className="nav-link text-white"
                    onClick={mostrar}
                  >
                    <InfoCircleFill fontSize={20} />
                    Zoologicos
                  </Link>
                </li>
                <li className="nav-item class_li" style={{ marginRight: '20px' }}>
                  <Link
                    to="/animales"
                    className="nav-link text-white"
                    onClick={mostrar}
                  >
                    <BinocularsFill fontSize={20} />
                    Animales
                  </Link>
                </li>
                <li className="nav-item class_li" style={{ marginRight: '20px' }}>
                  <Link
                    to="/tienda"
                    className="nav-link text-white"
                    onClick={mostrar}
                  >
                    <BagCheckFill fontSize={20} />
                    tienda
                  </Link>
                </li>
                <li className="nav-item class_li" style={{ marginRight: '20px' }}>
                  <Link
                    to="/contactos"
                    className="nav-link text-white"
                    onClick={noMostrar}
                  >
                    <TelephoneFill fontSize={20} />
                    Contactanos
                  </Link>
                </li>
              </ul>

              <Form className={`${show === true ? 'd-flex' : 'd-none'}`}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export { Header };
