import { Component } from "react";
import { Alert, Col, Container, Row, Card, Spinner } from "react-bootstrap";

class Gallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    hasError: false,
    errorMessage: "",
    searchQuery: "",
  };

  fetchMovies = async () => {
    try {
      // const response = await fetch(`http://www.omdbapi.com/?apikey=85b2561c&s=Harry%20Potter`);
      //come faccio a rendere gallery riutilizzabile se devo passare tutto il titolo per trovare l'array???
      const response = await fetch(`https://www.omdbapi.com/?apikey=85b2561c&s=${this.props.query}`);
      const data = await response.json();

      if (response.ok && data.Response === "True") {
        this.setState({ movies: data.Search, hasError: false, isLoading: false });
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: "Loading Failed" /* data.Error */,
        });
      }
    } catch (error) {
      this.setState({ isLoading: false, hasError: true, errorMessage: error.message });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  closeAlert = () => {
    this.setState({ showAlert: false });
  };

  render() {
    return (
      <Container fluid className="mb-3">
        <h4 className="d-inline-block mb-3">{this.props.title}</h4>
        {this.state.isLoading && (
          <Spinner className="ms-3" animation="grow" variant="secondary" size="sm" role="status">
            <span className="visually-hidden">Loading</span>
          </Spinner>
        )}
        {this.state.hasError && (
          <Alert variant="danger" onClose={this.closeAlert} dismissible>
            Error: {this.state.errorMessage}
          </Alert>
        )}

        <Row xs={1} sm={2} lg={4} xl={6} className="g-4">
          {this.state.movies
            .filter((movie) => movie.Title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
            .map((movie) => (
              <Col key={movie.imdbID} className=" text-center">
                <Card>
                  <Card.Img variant="top" src={movie.Poster} className="card-img img-fluid" />
                </Card>
              </Col>
            ))}{" "}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
