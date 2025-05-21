import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Homepage from "./components/Homepage";
import TvShows from "./components/TvShows";
import Account from "./components/Account";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<Homepage title="Movies" />} />
        <Route path="tv-shows" element={<TvShows title="Tv Shows" />} />
        <Route path="account" element={<Account title="Account" />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
