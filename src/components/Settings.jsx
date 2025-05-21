import { Container, Row, Col, Dropdown, Button, ListGroup } from "react-bootstrap";

const Settings = () => {
  return (
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
                <Dropdown.Toggle className="btn text-white bg-black btn-outline-light rounded-0 px-4 py-1 languageBtn">Ireland</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>UK</Dropdown.Item>
                  <Dropdown.Item active>Ireland</Dropdown.Item>
                  <Dropdown.Item>Spain</Dropdown.Item>
                  <Dropdown.Item>France</Dropdown.Item>
                  <Dropdown.Item>Italia</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div>
              <h3 className="text-secondary mt-5">Audio</h3>
              <Dropdown className="border-bottom border-secondary mb-4 pb-3 text-white">
                <Dropdown.Toggle className="btn text-white bg-black btn-outline-light rounded-0 px-4 py-1 languageBtn">Default</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item active>Default</Dropdown.Item>
                  <Dropdown.Item>Sport</Dropdown.Item>
                  <Dropdown.Item>Cinema</Dropdown.Item>
                  <Dropdown.Item>Music</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div>
              <h3 className="text-secondary mt-5">Devices</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>Zaira's iPhone</ListGroup.Item>
                <ListGroup.Item>Laptop 65th02l</ListGroup.Item>
                <ListGroup.Item>LG Smart TV 7935</ListGroup.Item>
                <ListGroup.Item>Angelo's iPhone</ListGroup.Item>
                <ListGroup.Item>Mariapia's Google Pixel 7</ListGroup.Item>
              </ListGroup>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 py-5">
            <Button className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary px-4">SAVE</Button>
            <Button className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary px-4">CANCEL</Button>
            <Button className="btn btn-dark btn-lg rounded-0 border border-secondary text-secondary px-4">DELETE PROFILE</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
