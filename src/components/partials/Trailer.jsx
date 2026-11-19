import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return ytvideo ? (
    <div className="w-full flex items-center  justify-center left-[0] top-[0] h-screen absolute bg-[rgba(0,0,0,.9)] ">
      <Link>
        <span
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="ri-close-fill z-[100] top-[4%] left-[85%] absolute mr-2 text-zinc-100 text-3xl"></i>
        </span>
      </Link>
      <ReactPlayer
        controls
        height={600}
        width={1000}
        src={`https://youtu.be/${ytvideo?.key}`}
      />
    </div>
  ) : (
    <NotFound />
  );
};

export default Trailer;
