import { useState, useEffect } from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import axios from "../utils/axios";
import Headers from "./partials/Headers";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loader from "./partials/Loader";

const Home = () => {
  useEffect(() => {
    document.title = "CINOVA|Homepage";
  }, []);

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("tv");

  useEffect(() => {
    const GetHeaderWallpaper = async () => {
      try {
        const { data } = await axios.get("/trending/all/day");

        setwallpaper(
          data.results[(Math.random() * data.results.length).toFixed()],
        );
      } catch (err) {
        console.log(err);
      }
    };
    GetHeaderWallpaper();
  }, []);
  useEffect(() => {
    const GetTrending = async () => {
      try {
        const { data } = await axios.get(`/trending/${category}/day`);
        settrending(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    // (GetTrending(), !wallpaper && GetHeaderWallpaper());
    GetTrending();
  }, [category]);
  // console.log(trending)
  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className=" w-[80%] pt-4  min-h-screen overflow-y-auto">
        <TopNav />
        <Headers wallpaper={wallpaper} title={category} />
        <div className="w-full p-5 ">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
            <Dropdown
              func={(e) => setcategory(e.target.value)}
              title={"Filter"}
              options={["tv", "movie", "all"]}
            />
          </div>
          <HorizontalCards data={trending} title={category} />
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Home;
