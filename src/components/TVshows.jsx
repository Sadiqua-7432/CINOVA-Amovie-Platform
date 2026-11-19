import  { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import {  useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loader from "./partials/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const TVshows = () => {
    const [tv, settv] = useState([]);
    const [category, setcategory] = useState("popular");
    // const [duration, setduration] = useState("day");
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    const navigate = useNavigate();
      useEffect(() => {
    document.title = "CINOVA | tv | " + category.toUpperCase();
  }, [category]);
    
    const GetTv = async () => {
      try {
        const { data } = await axios.get(
          `tv/${category}?page=${page}`,
        );
        if (data.results.length > 0) {
          settv((prev) => [...prev, ...data.results]);
          setpage(page + 1);
        } else {
          sethasMore(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    const pageRefresher = () => {
      if (tv.length === 0) {
        GetTv();
      } else {
        setpage(1);
        settv([]);
        GetTv();
      }
    };
    useEffect(() => {
      pageRefresher();
    }, [category]);
   return tv.length > 0 ? (
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
            TVshows(<small className="text-[#6556cd] ">{category}</small>)
          </h1>
          <div className=" relative w-[60%]  ">
            <TopNav />
          </div>
          <div className="flex gap-4 ml-4 ">
            <Dropdown
              title="Category"
              options={["airing_today","popular","on_the_air","top_rated"]}
              func={(e) => {
                setcategory(e.target.value);
              }}
            />
          </div>
        </div>
        <InfiniteScroll
          dataLength={tv.length}
          next={GetTv}
          hasMore={hasMore}
          loader={<h1>Loading..</h1>}
        >
          <Cards data={tv} title="tv" />
        </InfiniteScroll>
      </div>
    ) : (
      <Loader />
    );
}

export default TVshows
