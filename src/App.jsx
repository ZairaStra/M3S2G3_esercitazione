import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/MyNav";
import "./components/Headings";
import "./components/MyFooter";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Homepage from "./components/Homepage";
import TvShows from "./components/TvShows";

const App = function () {
  return (
    <>
      <MyNav />
      <Homepage title="Movies" />
      {/*
      <Headings />
      <Gallery title="Harry Potter" query="Harry Potter" />
      <Gallery title="Il Signore degli Anelli" query="Lord of The Ring" />
      <Gallery title="Star Wars" query="Star Wars" />
      <Gallery title="The Hunger Games" query="Hunger Games" /> */}
      <TvShows title="Tv Shows" />
      <MyFooter />
    </>
  );
};

export default App;
