import { useEffect, useState } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import Gallery from "./Gallery";
import Headings from "./Headings";

const TvShows = function () {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const queries = ["sherlock", "house of cards", "poirot", "game of thrones"];

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const results = await Promise.all(
          queries.map((query) =>
            fetch(`https://www.omdbapi.com/?apikey=85b2561c&s=${query}&type=series`)
              .then((res) => res.json())
              .then((data) => (data.Response === "True" ? data.Search : []))
          )
        );
        // Flatten array of arrays
        setAllMovies(results.flat());
        setLoading(false);
      } catch (err) {
        setError("Fetch failed");
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) return <Spinner animation="border" variant="secondary" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  // Filtro per titolo specifico
  const getMoviesByQuery = (query) => allMovies.filter((movie) => movie.Title.toLowerCase().includes(query.toLowerCase()));

  return (
    <Container fluid>
      <Headings title="Tv Shows" />
      <Gallery title="Game of Thrones" movies={getMoviesByQuery("game of thrones")} />
      <Gallery title="Sherlock" movies={getMoviesByQuery("sherlock")} />
      <Gallery title="House of Cards" movies={getMoviesByQuery("house of cards")} />
      <Gallery title="Poirot" movies={getMoviesByQuery("poirot")} />
    </Container>
  );
};

export default TvShows;

/* import { Container } from "react-bootstrap";
import Gallery from "./Gallery";
import Headings from "./Headings";

const TvShows = function () {
  return (
    <Container fluid>
      <Headings title="Tv Shows" />
      <Gallery title="Fringe" query="Fringe" />
      <Gallery title="The Big Bang Theory" query="big-bang" />
      <Gallery title="Poirot" query="Poirot" />
    </Container>
  );
};

export default TvShows;
 */
