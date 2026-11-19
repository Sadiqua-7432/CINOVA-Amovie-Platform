import { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loader from "./partials/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {
  const [movies, setmovies] = useState([]);
  const [category, setcategory] = useState("now_playing");
  // const [duration, setduration] = useState("day");
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "CINOVA | movies | " + category.toUpperCase();
  }, [category]);

  const GetMovies = async () => {
    try {
      const { data } = await axios.get(`movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setmovies((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const pageRefresher = () => {
    if (movies.length === 0) {
      GetMovies();
    } else {
      setpage(1);
      setmovies([]);
      GetMovies();
    }
  };
  useEffect(() => {
    pageRefresher();
  }, [category]);

  return movies.length > 0 ? (
    <div className=" w-screen h-screen overflow-auto">
      <div className=" w-full gap-4  flex p-6 ">
        <h1 className="text-zinc-400 text-3xl">
          <span
            onClick={() => {
              navigate(-1);
            }}
          >
            <i className="ri-arrow-left-line mr-2 text-[#6556cd]"></i>
          </span>
          Movies(<small className="text-[#6556cd] ">{category}</small>)
        </h1>
        <div className=" relative w-[60%]  ">
          <TopNav />
        </div>
        <div className="flex gap-4 ml-4 ">
          <Dropdown
            title="Category"
            options={["popular", "now_playing", "top_rated", "upcoming"]}
            func={(e) => {
              setcategory(e.target.value);
            }}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movies.length}
        next={GetMovies}
        hasMore={hasMore}
        loader={<h1>Loading..</h1>}
      >
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};
export default Movies;
