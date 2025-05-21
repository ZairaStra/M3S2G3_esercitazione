import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Card, Spinner, Alert, Col, Row } from "react-bootstrap";

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
          setError("Film non trovato");
        }
        setLoading(false);
      } catch (err) {
        setError("Errore nel caricamento dei dettagli del film");
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <Spinner animation="border" variant="secondary" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container fluid>
      <Row className="justify-content-center mt-4">
        <Col xs={12} sm={10} md={8} lg={4} className="text-center">
          {movie && (
            <Card>
              <Card.Img variant="top" className="img-fluid" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Plot}</Card.Text>
                <Card.Text>
                  <strong>Year:</strong> {movie.Year}
                </Card.Text>
                <Card.Text>
                  <strong>Director:</strong> {movie.Director}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
