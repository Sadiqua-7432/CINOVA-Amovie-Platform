
import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loader from "./components/partials/Loader";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TVshows from "./components/TVshows";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";
import Trailer from "./components/partials/Trailer";
import NotFound from "./components/NotFound";

const App = () => {
  
  return (
    <div className="w-full h-screen text-white flex bg-[#1f1e24]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Loader />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} >
        <Route path="/movie/details/:id/Trailer" element={<Trailer/>} />
        </Route>
        <Route path="/tv" element={<TVshows />} />
        <Route path="/tv/details/:id" element={<TvDetails />} >
          <Route path="/tv/details/:id/Trailer" element={<Trailer/>} />
        </Route>

        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};

export default App;
