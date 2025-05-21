import { useEffect, useState } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import Headings from "./Headings";

const Homepage = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const queries = ["Harry Potter", "Lord of The Ring", "Star Wars", "Hunger Games"];

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const results = await Promise.all(
          queries.map((query) =>
            fetch(`https://www.omdbapi.com/?apikey=85b2561c&s=${query}&type=movie`)
              .then((res) => res.json())
              .then((data) => (data.Response === "True" ? data.Search : []))
          )
        );
        setAllMovies(results.flat());
        setLoading(false);
      } catch (err) {
        setError("Error loading movies");
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) return <Spinner animation="border" variant="secondary" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  const getMoviesByQuery = (query) => allMovies.filter((movie) => movie.Title.toLowerCase().includes(query.toLowerCase()));

  return (
    <Container fluid>
      <Headings title="Movies" />
      <Gallery title="Harry Potter" movies={getMoviesByQuery("Harry Potter")} />
      <Gallery title="Il Signore degli Anelli" movies={getMoviesByQuery("Lord of the Ring")} />
      <Gallery title="Star Wars" movies={getMoviesByQuery("Star Wars")} />
      <Gallery title="The Hunger Games" movies={getMoviesByQuery("Hunger Games")} />
    </Container>
  );
};

export default Homepage;

/* import { Container } from "react-bootstrap";
import Gallery from "./Gallery";
import Headings from "./Headings";

const Homepage = function () {
  return (
    <Container fluid>
      <Headings title="Movies" />
      <Gallery title="Harry Potter" query="Harry Potter" />
      <Gallery title="Il Signore degli Anelli" query="Lord of The Ring" />
      <Gallery title="Star Wars" query="Star Wars" />
      <Gallery title="The Hunger Games" query="Hunger Games" />
    </Container>
  );
};

export default Homepage; */
