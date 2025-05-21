import { Button, Col, Container, Row } from "react-bootstrap";

const MyFooter = function () {
  return (
    <Container fluid>
      <footer className="mt-2 py-3 footer">
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6}>
            <Row>
              <Col className="mb-2">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter-x footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row xs={1} sm={2} md={4}>
              <Col>
                <Row>
                  <Col>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Audio and Subtitles
                      </a>
                    </p>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Media Center
                      </a>
                    </p>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Privacy
                      </a>
                    </p>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Audio Description
                      </a>
                    </p>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Investor Relations
                      </a>
                    </p>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Help Center
                      </a>
                    </p>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Jobs
                      </a>
                    </p>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Gift Cards
                      </a>
                    </p>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Terms of Use
                      </a>
                    </p>
                    <p className="footer-links">
                      <a href="#" alt="footer link">
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button type="button" variant="none" className="footer-button btn-sm rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default MyFooter;
