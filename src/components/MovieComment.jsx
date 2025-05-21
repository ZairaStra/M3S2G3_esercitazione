import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Card, Spinner, Alert, Col, Row, ListGroup, Badge, CardBody } from "react-bootstrap";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZTQ0MzFlYmU4MjAwMTUwOWYzMGMiLCJpYXQiOjE3NDczMTM3MzEsImV4cCI6MTc0ODUyMzMzMX0.sOUGPFm9rwM0pYvE3wqyxXhkj2MG6LblP4jVZPpikrI";

const MovieComments = () => {
  const { movieId } = useParams(); // Ottieni l'ID del film dalla URL

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMovieComments = async () => {
    if (!movieId) return;
    setLoading(true);
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });
      if (response.ok) {
        const comments = await response.json();
        setComments(comments);
      } else {
        setError("Comments not found");
      }
      setLoading(false);
    } catch (err) {
      setError("Error loading comments");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieComments();
  }, [movieId]);
  console.log("Fetched comments:", comments);
  if (loading) return <Spinner animation="border" variant="secondary" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={10} md={8} lg={6}>
          {comments &&
            comments.map((review) => (
              <Card className="mb-3 border border-secondary shadow-sm text-white bg-black" key={`item-${review._id}`}>
                <Card.Body className=" d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title text-secondary">{review.author}</h5>
                    <span className="badge bg-success">{review.rating}</span>
                  </div>
                  <Card.Text className="text-white">{review.comment}</Card.Text>
                </Card.Body>
              </Card>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieComments;
