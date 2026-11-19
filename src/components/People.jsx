import { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loader from "./partials/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const [people, setpeople] = useState([]);
  const [category, setcategory] = useState("popular");
  // const [duration, setduration] = useState("day");
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "CINOVA | people | " + category.toUpperCase();
  }, [category]);

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setpeople((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const pageRefresher = () => {
    if (people.length === 0) {
      GetPeople();
    } else {
      setpage(1);
      setpeople([]);
      GetPeople();
    }
  };
  useEffect(() => {
    pageRefresher();
  }, [category]);
  // console.log(people)
  return people.length > 0 ? (
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
          People(<small className="text-[#6556cd] ">{category}</small>)
        </h1>
        <div className=" relative w-[60%]  ">
          <TopNav />
        </div>
        <div className="flex gap-4 ml-4 ">
          <Dropdown
            title="Category"
            options={["popular"]}
            func={(e) => {
              setcategory(e.target.value);
            }}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={people.length}
        next={GetPeople}
        hasMore={hasMore}
        loader={<h1>Loading..</h1>}
      >
        <Cards data={people} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};
export default People;
