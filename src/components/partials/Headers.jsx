// import React from "react";
// import { ImGift } from "react-icons/im";
// import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Headers = ({ wallpaper }) => {
  // console.log(wallpaper)
  return (
    <>
      <Link
        to={`/${wallpaper.media_type}/details/${wallpaper.id}`}
        style={{
          background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.9)),   url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.profile_path})`,
          backgroundPosition: "top 10%",
          backgroundSize: "cover",
        }}
        className="w-full h-[60vh] flex gap-4 flex-col justify-end p-[5%] shadow-xl"
      >
        <h1 className="text-5xl font-black text-white">
          {wallpaper.title ||
            wallpaper.original_title ||
            wallpaper.original_name}
        </h1>
        <p className="w-[70%] text-white ">
          {wallpaper.overview.slice(0, 200)}{" "}
          <Link className="text-blue-400"> ...more</Link>{" "}
        </p>
        <div className="flex gap-4">
          <h1 className=" text-white ml-2">
            <i className="ri-megaphone-fill text-yellow-400 mr-1"></i>
            {wallpaper.release_date
              ? wallpaper.release_date
              : "No Information"}{" "}
          </h1>
          <h1 className="text-white ml-2">
            <i className="ri-movie-2-fill text-yellow-400 mr-1"></i>
            {wallpaper.media_type.toUpperCase()}{" "}
          </h1>
        </div>
        <Link
          to={`/${wallpaper?.media_type}/details/${wallpaper?.id}/Trailer`}
          className="px-4 py-4 bg-[#6556CD] w-fit rounded "
        >
          Watch Trailer
        </Link>
      </Link>
    </>
  );
};

export default Headers;
