import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  // console.log(title);
  return (
    <>
      <div className="w-full h-full p-4   flex flex-wrap gap-17 ">
        {data.map((d, i) => (
          <Link
            to={`/${title || d.media_type}/details/${d.id}`}
            key={i}
            className="w-[33vh] h-[50vh] relative mt-4 mb-4  shadow-[0_8px_30px_rgba(255,255,255,0.04),0_8px_30px_rgba(0,0,0,0.8)]"
          >
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),  url(${d.backdrop_path || d.profile_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path || d.poster_path}` : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZI6gG4vGcCBCpo3l7oauXFBv20PxivlBeCy9fyI0f4w&s=10`})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full  h-[100%] bg-red-900"
            ></div>
            <h1 className="text-semibold text-lg mt-1">
              {d.title || d.original_title || d.original_name}
            </h1>
            {d.vote_average && (
              <div className="absolute left-[89%] top-[75%] bg-yellow-600 w-12 h-12 leading-none tracking-tight text-xl px-2 flex items-center  rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/30">
                {(d.vote_average * 10).toFixed()}
                <sup>%</sup>
              </div>
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cards;
