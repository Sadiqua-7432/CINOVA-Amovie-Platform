// import axios from "../../utils/axios";
// import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <div className="w-[20%] border-r-1 border-zinc-400 h-screen p-8">
        <h1 className="font-bold text-2xl">
          <span>
            <i className="text-[#6556cd] ri-tv-fill mr-2"></i>
          </span>
          CINOVA.
        </h1>
        <nav className="flex flex-col">
          <h1 className="font-semibold text-xl mt-10 mb-6">Naw Feeds</h1>
          <Link
            to="/trending"
            className=" text-zinc-500 text-lg p-3 hover:bg-[#6556cd] duration-250 hover:text-white rounded-lg"
          >
            <span>
              <i className="ri-fire-fill"></i>
            </span>{" "}
            Trending
          </Link>
          <Link
            to="/popular"
            className=" text-zinc-500 text-lg p-3 hover:bg-[#6556cd] duration-250 hover:text-white rounded-lg"
          >
            <span>
              <i className="ri-arrow-right-up-box-fill mr-2 "></i>
            </span>{" "}
            Popular
          </Link>
          <Link
            to="/movie"
            className=" text-zinc-500 text-lg p-3 hover:bg-[#6556cd] duration-250 hover:text-white rounded-lg"
          >
            <span>
              <i className="ri-movie-2-fill mr-2 "></i>
            </span>{" "}
            Movies
          </Link>
          <Link
            to="/tv"
            className=" text-zinc-500 text-lg p-3 hover:bg-[#6556cd] duration-250 hover:text-white rounded-lg"
          >
            <span>
              <i className="ri-tv-2-fill mr-2 "></i>
            </span>{" "}
            TV Shows
          </Link>
          <Link
            to="/person"
            className=" text-zinc-500 text-lg p-3 hover:bg-[#6556cd] duration-250 hover:text-white rounded-lg"
          >
            <span>
              <i className="ri-group-fill mr-2 "></i>
            </span>{" "}
            People
          </Link>
          <hr className="text-zinc-400 mt-4" />
          <h1 className="font-semibold text-xl mt-10 mb-6">
            Website Information
          </h1>
          <Link className=" text-zinc-500 text-lg p-3 hover:bg-[#6556cd] duration-250 hover:text-white rounded-lg">
            <span>
              <i className="ri-info-card-fill mr-2 "></i>
            </span>{" "}
            About
          </Link>
          <Link className=" text-zinc-500 text-lg p-3 hover:bg-[#6556cd] duration-250 hover:text-white rounded-lg">
            <span>
              <i className="ri-phone-fill mr-2 "></i>
            </span>{" "}
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideNav;
