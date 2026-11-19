// import React from "react";
// import Home from "../Home";
// import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data = [], title }) => {
  // console.log(title)
  return (
    <>
      <div className="w-full h-[40vh]  mt-4 flex gap-4 overflow-x-auto overflow-y-hidden">
        {data.length > 0 ? (
          data.map((d, i) => (
            <Link
              to={`/${title || d.media_type}/details/${d.id}`}
              key={i}
              className=" w-[17%] h-[90%] shrink-0   shadow-xl/20 bg-zinc-900 "
            >
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(${(d.backdrop_path || d.profile_path || d.poster_path)?`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path || d.poster_path}`:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZI6gG4vGcCBCpo3l7oauXFBv20PxivlBeCy9fyI0f4w&s=10`})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-full h-[60%]"
              ></div>
              <div className="p-2">
                <h1 className="font-semibold text-sm">
                  {" "}
                  {d.title || d.original_title || d.original_name || d.name} 
                </h1>
                <p className="text-zinc-300 mt-2 leading-5">
                  {" "}
                  {d.overview.slice(0, 40)}
                  <span className="text-zinc-400">...more</span>{" "}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <h1>Nothing to Show</h1>
        )}
      </div>
    </>
  );
};

export default HorizontalCards;
