import { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loader from "./partials/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  const [popular, setpopular] = useState([]);
  const [category, setcategory] = useState("movie");
  // const [duration,setduration]=useState("day")
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "CINOVA | Trending | " + category.toUpperCase();
  }, [category]);

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setpopular((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(popular);
  const pageRefresher = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setpopular([]);
      GetPopular();
    }
  };
  useEffect(() => {
    pageRefresher();
  }, [category]);

  return popular.length > 0 ? (
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
          Popular
        </h1>
        <div className=" relative w-[60%]  ">
          <TopNav />
        </div>
        <div className="flex gap-4 ml-4 ">
          <Dropdown
            title="Category"
            options={["tv", "movie"]}
            func={(e) => {
              setcategory(e.target.value);
            }}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<h1>Loading..</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Popular;
