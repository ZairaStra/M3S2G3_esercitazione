import { Button, Container, Nav, Navbar, Dropdown, Row, Col, ListGroup } from "react-bootstrap";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { Component } from "react";

class MyNav extends Component {
  state = {
    showAccount: false,
    showSettings: false,
  };

  render() {
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
                <Nav.Link className="fw-bold" active href="#">
                  Home
                </Nav.Link>
                <Nav.Link className="fw-bold" href="#">
                  TV Shows
                </Nav.Link>
                <Nav.Link className="fw-bold" href="#">
                  Movies
                </Nav.Link>
                <Nav.Link className="fw-bold" href="#">
                  Recently Added
                </Nav.Link>
                <Nav.Link className="fw-bold" href="#">
                  My List
                </Nav.Link>
              </Nav>
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-search icons text-white"></i>
                <div id="kids" className="fw-bold text-white">
                  KIDS
                </div>
                <i className="bi bi-bell icons text-white"></i>
                <Button className="btn" id="accountBtn" onClick={() => this.setState({ showAccount: !this.state.showAccount })}>
                  <i className="bi bi-person-circle icons text-white"></i>
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {this.state.showAccount && (
          <Container>
            <Row className="g-2 g-md-3 g-xl-4">
              <Col xs={12} md={8} lg={7}>
                <h1 className="display-3 text-white">Edit Profile</h1>
                <hr />
                <Row>
                  <Col xs={9} sm={4} lg={3}>
                    <img src={avatar} alt="avatar" className="rounded d-block" width={100} />
                    <Button
                      className="btn d-block border border-secondary my-3"
                      id="settingBtn"
                      onClick={() => this.setState({ showSettings: !this.state.showSettings })}
                    >
                      <i class="bi bi-gear-wide-connected"></i>
                    </Button>
                  </Col>
                  <Col xs={9} sm={8} lg={9}>
                    <h3 className="bg-secondary px-3 py-1 text-white">Strive Student</h3>
                    <div>
                      <h3 className="text-secondary mt-5">Language:</h3>
                      <Dropdown className="border-bottom border-secondary mb-4 pb-3 text-white">
                        <Dropdown.Toggle
                          className="btn text-white bg-black btn-outline-light rounded-0 px-4 py-1 languageBtn"
                          type="button"
                          aria-expanded="false"
                        >
                          English
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#" active>
                            English
                          </Dropdown.Item>
                          <Dropdown.Item href="#">Spanish</Dropdown.Item>
                          <Dropdown.Item href="#">French</Dropdown.Item>
                          <Dropdown.Item href="#">Italian</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="border-bottom border-secondary">
                      <h3 className="text-secondary mt-3 mb-3">Maturity Settings:</h3>
                      <h6 className="bg-secondary px-3 py-2 text-white">ALL MATURITY RATINGS</h6>
                      <p className="text-white py-2">Show titles of all maturity ratings for this profile</p>
                      <Button type="button" className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary mb-3 flexBtn">
                        EDIT
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-secondary my-3">Autoplay Controls:</h3>
                      <p className="text-secondary">
                        <i className="bi bi-check-square"></i> Autoplay next episode in a series on all devices
                      </p>
                      <p className="text-secondary">
                        <i className="bi bi-check-square"></i> Autoplay preview while browsing on all devices
                      </p>
                    </div>
                  </Col>
                </Row>

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 py-5">
                  <Button className="btn btn-dark btn-lg rounded-0  text-secondary px-4 flexBtn">SAVE</Button>
                  <Button className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary px-4 flexBtn">CANCEL</Button>
                  <Button className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary px-4 flexBtn">DELETE PROFILE</Button>
                </div>
              </Col>
            </Row>
          </Container>
        )}
        {this.state.showSettings && (
          <Container>
            <Row className="g-2 g-md-3 g-xl-4">
              <Col xs={12} md={8} className="justify-content-center">
                <h1 className="display-3 text-white">Settings</h1>
                <hr />

                <h3 className="bg-secondary px-3 py-1 text-white">Strive Student</h3>
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className="text-secondary mt-5">Country</h3>
                    <Dropdown className="border-bottom border-secondary mb-4 pb-3 text-white">
                      <Dropdown.Toggle
                        className="btn text-white bg-black btn-outline-light rounded-0 px-4 py-1 languageBtn"
                        type="button"
                        aria-expanded="false"
                      >
                        Ireland
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">UK</Dropdown.Item>
                        <Dropdown.Item href="#" active>
                          Ireland
                        </Dropdown.Item>
                        <Dropdown.Item href="#">Spain</Dropdown.Item>
                        <Dropdown.Item href="#">France</Dropdown.Item>
                        <Dropdown.Item href="#">Italia</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    <h3 className="text-secondary mt-5">Audio</h3>
                    <Dropdown className="border-bottom border-secondary mb-4 pb-3 text-white">
                      <Dropdown.Toggle
                        className="btn text-white bg-black btn-outline-light rounded-0 px-4 py-1 languageBtn"
                        type="button"
                        aria-expanded="false"
                      >
                        Default
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#" active>
                          Deafult
                        </Dropdown.Item>
                        <Dropdown.Item href="#">Sport</Dropdown.Item>
                        <Dropdown.Item href="#">Cinema</Dropdown.Item>
                        <Dropdown.Item href="#">Music</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    <h3 className="text-secondary mt-5">Devices</h3>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Zaira's IPhone </ListGroup.Item>
                      <ListGroup.Item>Laptop 65th02l </ListGroup.Item>
                      <ListGroup.Item>LG Smart Tv 7935 </ListGroup.Item>
                      <ListGroup.Item>Angelo's Iphone </ListGroup.Item>
                      <ListGroup.Item>Mariapia's Google Pixel 7 </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 py-5">
                  <Button className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary px-4 flexBtn">SAVE</Button>
                  <Button className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary px-4 flexBtn">CANCEL</Button>
                  <Button className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary px-4 flexBtn">DELETE PROFILE</Button>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </>
    );
  }
}
export default MyNav;
