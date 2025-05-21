import { Container, Dropdown } from "react-bootstrap";

const Headings = function () {
  return (
    <Container fluid>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <div className="btn-group" role="group">
            <Dropdown className="ms-4 mt-1">
              <Dropdown.Toggle variant="secondary" className=" btn-sm  rounded-0" style={{ backgroundColor: "#221f1f" }}>
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                <Dropdown.Item href="#">Drama</Dropdown.Item>
                <Dropdown.Item href="#">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>
    </Container>
  );
};

export default Headings;
