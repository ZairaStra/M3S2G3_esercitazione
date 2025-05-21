import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Homepage from "./components/Homepage";
import TvShows from "./components/TvShows";
import Account from "./components/Account";
import MovieDetails from "./components/MOvieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<Homepage title="Movies" />} />
        <Route path="tv-shows" element={<TvShows title="Tv Shows" />} />
        <Route path="account" element={<Account title="Account" />} />
        <Route path="/:movieId" element={<MovieDetails title="Movie Details" />} />
        <Route path="/settings" element={<Settings title="Settings" />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
