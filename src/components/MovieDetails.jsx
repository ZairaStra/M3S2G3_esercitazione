import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Card, Spinner, Alert, Col, Row } from "react-bootstrap";
import MovieComments from "./MovieComment";

const MovieDetails = () => {
  const { movieId } = useParams(); // Ottieni l'ID del film dalla URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=85b2561c&i=${movieId}`);
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError("Movie not found");
        }
        setLoading(false);
      } catch (err) {
        setError("Error loading movie");
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <Spinner animation="border" variant="secondary" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          {movie && (
            <Card className=" mb-3 border-light shadow-sm text-white bg-black">
              <Row className=" g-0">
                <Col md={6}>
                  <Card.Img variant="top" className="img-fluid" src={movie.Poster} />
                </Col>
                <Col md={6}>
                  <Card.Body className="d-flex flex-column align-items-middle">
                    <Card.Title className="text-light display-6">{movie.Title}</Card.Title>
                    <Card.Text className="my-4">{movie.Plot}</Card.Text>
                    <Card.Text>
                      <strong>Year:</strong> {movie.Year}
                    </Card.Text>
                    <Card.Text>
                      <strong>Director:</strong> {movie.Director}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} className="text-center">
          <MovieComments />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
