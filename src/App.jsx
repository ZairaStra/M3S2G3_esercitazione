import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/MyNav";
import "./components/Headings";
import "./components/MyFooter";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Headings from "./components/Headings";
import Gallery from "./components/Gallery";

const App = function () {
  return (
    <>
      <MyNav />
      <Headings />
      <Gallery title="Harry Potter" query="Harry Potter" />
      <Gallery title="Il Signore degli Anelli" query="Lord of The Ring" />
      <Gallery title="Star Wars" query="Star Wars" />
      <Gallery title="The Hunger Games" query="Hunger Games" />
      <Gallery title="Poirot" query="Poirot" />
      <Gallery title="sdupba" query="dauepi" />
      <MyFooter />
    </>
  );
};

export default App;
