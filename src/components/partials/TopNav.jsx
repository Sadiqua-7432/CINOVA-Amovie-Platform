import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
// import { FcRemoveImage } from "react-icons/fc";
const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  useEffect(() => {
    const GetSearches = async () => {
      try {
        const { data } = await axios.get(`/search/multi?query=${query}`);
        setsearches(data.results);
      } catch (err) {
        console.log("error:", err);
      }
    };
    GetSearches();
  }, [query]);
  return (
    <>
      <div className="w-[60%] z-[100] h-[6vh]  mb-4 top-0 flex gap-12 justify-start   left-[60%]  -translate-x-[50%] items-center text-zinc-400 relative text-lg">
        <i className="ri-search-2-line text-3xl "></i>
        <input
          onChange={(e) => setquery(e.target.value)}
          className=" pr-[30%] border-none p-5 outline-none bg-transparent"
          type="text"
          placeholder="search anything"
          value={query}
        />
        {query.length > 0 && (
          <i
            onClick={() => {
              setquery("");
            }}
            className="ri-close-line text-2xl"
          ></i>
        )}
        {query.length > 0 && (
          <div className="absolute w-[60%] flex flex-col left-[35%]  -translate-x-[50%] overflow-auto bg-zinc-200 top-[100%] max-h-[55vh] ">
            {searches.map((s, i) => {
              return (
                <Link
                  to={`/${s.media_type}/details/${s.id}`}
                  key={i}
                  className="hover:bg-zinc-300 duration-200 font-semibold  text-zinc-600 hover:text-black border-2 border-zinc-100 w-full p-6"
                >
                  <div className="flex items-center gap-10">
                    <img
                      className="w-[8vh] h-[8vh] object-cover rounded shadow-lg"
                      src={
                        s.backdrop_path || s.poster_path || s.profile_path
                          ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.poster_path || s.profile_path}`
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZI6gG4vGcCBCpo3l7oauXFBv20PxivlBeCy9fyI0f4w&s=10"
                      }
                      alt=""
                    />
                    <span> {s.original_title || s.title || s.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default TopNav;
