import { Outlet } from 'react-router-dom';
import '../../App.jsx' //outlet
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Img/Logo.png'
import './NavTop.css';


export function NavTop(){
    return (
      <>
        <Navbar expand="lg" className="mb-3" id="nav-top">
          <Container>
            <Navbar.Brand href="/home">
                <img
                  alt=""
                  src={Logo}
                  width="150"
                  height="50"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="/home">Início</Nav.Link>
                  <Nav.Link href="/home/livrosLidos">Livros Lidos</Nav.Link>
                  <Nav.Link disabled href="#">Livros não finalizados</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
      <Outlet/>
      </>
    )
}