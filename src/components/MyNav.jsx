import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

import { NavLink } from "react-router-dom";

const MyNav = () => {
  /* state = {
    showAccount: false,
    showSettings: false,
  }; */
  return (
    <>
      <Navbar expand="lg" className="navbar" variant="none" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" style={{ width: "100px", height: "55px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarContent" />
          <Navbar.Collapse id="navbarContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/tv-shows" className="nav-link">
                TV Shows
              </NavLink>
              <NavLink to="/" className="nav-link">
                Movies
              </NavLink>
              <NavLink to="/" className="nav-link">
                Recently Added
              </NavLink>
              <NavLink to="/" className="nav-link">
                My List
              </NavLink>
            </Nav>
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-search icons text-white"></i>
              <div id="kids" className="fw-bold text-white">
                KIDS
              </div>
              <i className="bi bi-bell icons text-white"></i>
              <NavLink to="/account" className="btn" id="accountBtn">
                <i className="bi bi-person-circle icons text-white"></i>
              </NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
