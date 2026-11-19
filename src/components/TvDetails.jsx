import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { asyncloadTv, deleteTv } from "../store/actions/TvActions";
import Loader from "./partials/Loader";
import HorizontalCards from "./partials/HorizontalCards";

const TvDetails = () => {
 const navigate = useNavigate();
  const { info } = useSelector((state) => state.tv);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadTv(id));
    return () => {
      dispatch(deleteTv());
    };
  }, [id,dispatch]);
  // console.log(info)
  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.8)),   url(https://image.tmdb.org/t/p/original/${info?.detail?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="  relative  w-full h-[190vh] pl-22 pt-8 pb-8 pr-22"
    >
      {/* part 1 navigation */}
      <nav className="flex  gap-8">
        <Link>
          <span
            onClick={() => {
              navigate(-1);
            }}
          >
            <i className="ri-arrow-left-line mr-2 text-zinc-100 text-lg"></i>
          </span>
        </Link>
        <a href={`${info?.detail?.homepage}`} className="text-zinc-100 text-lg">
          <i class="ri-external-link-fill "></i>
        </a>
        <a
          href={`https://www.en.wikipedia.org/wiki/${info?.externalid?.wikidata_id}`}
          className="text-zinc-100 text-lg"
        >
          <i class="ri-earth-line"></i>
        </a>
        <a
          href={`https://www.imdb.com/interest/${info?.detail?.externalid?.imdb_id}`}
          className="text-zinc-100 text-lg"
        >
          imdb
        </a>
      </nav>

      {/* part2  poster and details */}
      <div className="img/right w-full gap-22 flex mt-8">
        <img
          src={`https://image.tmdb.org/t/p/original/${info?.detail?.backdrop_path || info?.detail?.profile_path || info?.detail?.poster_path}`}
          className="h-[53vh] w-[33vh]  object-cover shadow-[0_8px_30px_rgba(255,255,255,0.04),0_8px_30px_rgba(0,0,0,0.8)]"
        />

        <div className="right  flex flex-col  w-fit">
          <div className="text-[6vh] mt-[-2%] font-bold">
            {info?.detail?.title ||
              info?.detail?.original_title ||
              info?.detail?.original_name}
            <small className="text-xl">
              ({info?.detail?.first_air_date?.split("-")[0]})
            </small>
          </div>

          <div className="flex gap-3  ">
            {info?.detail?.vote_average && (
              <div className="bg-yellow-600 w-12 h-12 leading-none tracking-tight text-xl px-2 flex items-center  rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/30">
                {(info?.detail?.vote_average * 10).toFixed()}
                <sup>%</sup>
              </div>
            )}
            <h1 className="font-semibold text-2xl leading-6 tracking-tight">
              User
              <br />
              Score
            </h1>
            <div className="flex items-center gap-3 text-lg">
              {" "}
              <h1>{info?.detail?.first_air_date}</h1>
              <p>
                {info?.detail?.genres?.map((g)=>g.name).join(", ")}
              </p>
              <h1>{info?.detail?.runtime}min</h1>
            </div>
          </div>

          <div className="italic text-xl mt-2 text-yellow-500 ">
            {info?.detail?.tagline}
          </div>
          <div className="text-xl mt-4">
            Overview
            <p className="text-sm leading-4 mt-1">{info?.detail?.overview} </p>
          </div>
          <h1 className="text-xl mt-4">TvShows Translated</h1>
          <p className="text-sm leading-5 mt-1">
            {info?.translations?.join(" ")}
          </p>
          <Link to={`/tv/details/${info?.detail?.id}/Trailer`} className="px-4 mt-2 py-4 bg-[#6556CD] w-fit rounded ">
           <i class="ri-play-fill"></i> play Trailer
          </Link>
        </div>
      </div>

      {/* part3 available platform */}
      <div className="rent/buy w-[50%] flex flex-col gap-3 mt-2">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-4 items-center">
                 <h1>Available on platforms</h1>
            {info?.watchproviders?.flatrate?.map((w) => (
              
         
              <img
                className="w-[5vh] rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
             
            ))}
           
          </div>
        )}
        {info?.watchproviders && info?.watchproviders?.flatrate && (
          <div className="flex gap-x-4 items-center">
           
            {info?.watchproviders?.rent?.map((w) => (
              <>
               <h1>Available on rent</h1>
              <img
                className="w-[5vh] rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
 </>             
))}

          </div>
        )}
        {info?.watchproviders && info?.watchproviders?.flatrate && (
          <div className="flex gap-x-4 items-center">
            
            {info?.watchproviders &&
              info?.watchproviders?.buy &&
              info?.watchproviders?.buy?.map((w) => (
                <>
                <h1>Available to buy</h1>
                <img
                  className="w-[5vh] rounded-md "
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
                </>
              ))}
          </div>
        )}
      </div>

 {/* part4 recommendations and similar */}
        <h1 className="border-t-2 border-zinc-500 text-2xl font-semibold mt-12 pt-4">Seasons</h1>
      <HorizontalCards data={  info?.detail?.seasons || [] } title="tv" />

      {/* part5 recommendations and similar */}
        <h1 className="border-t-2 border-zinc-500 text-2xl font-semibold mt-12 pt-4">Recommendations & Simiar Stuff</h1>
      <HorizontalCards data={  info?.recommendations?.length>0 ? info?.recommendations:info?.similar || [] } title="tv" />
        <Outlet/>
    </div>
  ) : (
    <Loader />
  );
}

export default TvDetails
