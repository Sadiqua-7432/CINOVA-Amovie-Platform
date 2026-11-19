import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncloadPerson, deletePerson } from "../store/actions/PersonActions";
import Loader from "./partials/Loader";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const PersonDetails = () => {
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const { id } = useParams();
  const [category, setcategory] = useState("movie");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadPerson(id));
    return () => {
      dispatch(deletePerson());
    };
  }, [id, dispatch]);
  return info ? (
    <div className="w-full h-[170vh] bg-[#1f1e24] px-22 py-8">
      {/* nav part */}
      <div>
        <Link>
          <span
            onClick={() => {
              navigate(-1);
            }}
          >
            <i className="ri-arrow-left-line mr-2 text-zinc-100 text-lg"></i>
          </span>
        </Link>
      </div>
      {/* part1+part2 */}
      <div className="flex gap-12">
        {/* part1 */}
        <div className="w-[20%]">
          <img
            src={`https://image.tmdb.org/t/p/original/${info?.detail?.backdrop_path || info?.detail?.profile_path || info?.detail?.poster_path}`}
            className="h-[53vh] w-[30vh] mt-4 object-cover shadow-[0_8px_30px_rgba(255,255,255,0.04),0_8px_30px_rgba(0,0,0,0.8)]"
          />
          <hr className="mt-6" />
          <div className="mt-2 flex gap-10">
            <a
              href={`https://www.en.wikipedia.org/${info?.externalid?.wikidata_id}`}
              className="text-zinc-100 text-2xl "
            >
              <i class="ri-earth-line "></i>
            </a>
            <a
              href={`https://www.facebook.com/${info?.externalid?.facebook_id}`}
              className="text-zinc-100 text-2xl "
            >
              <i class="ri-facebook-circle-fill"></i>
            </a>
            <a
              href={`https://www.instagram.com/wiki/${info?.externalid?.instagram_id}`}
              className="text-zinc-100 text-2xl "
            >
              <i class="ri-instagram-fill"></i>
            </a>
            <a
              href={`https://x.com/wiki/${info?.externalid?.twitter_id}`}
              className="text-zinc-100 text-2xl "
            >
              <i class="ri-twitter-x-fill"></i>
            </a>
          </div>
          <h1 className="text-2xl font-bold mt-4 text-zinc-400">
            Personal Info
          </h1>
          <h1 className="text-zinc-400 mt-4 font-semibold text-xl">
            Known For
          </h1>
          <h1 className="text-zinc-400 text-lg">
            {info?.detail?.known_for_department}
          </h1>
          <h1 className="text-zinc-400 mt-4 font-semibold text-xl">Gender</h1>
          <h1 className="text-zinc-400 text-lg">{info?.detail?.gender}</h1>
          <h1 className="text-zinc-400 mt-4 font-semibold text-xl">Birthday</h1>
          <h1 className="text-zinc-400 text-lg">{info?.detail?.birthday}</h1>
          <h1 className="text-zinc-400 mt-4 font-semibold text-xl">Deathday</h1>
          <h1 className="text-zinc-400 text-lg">
            {" "}
            {info?.detail?.deathday ? info?.detail?.deathday : "Still Alive"}
          </h1>
          <h1 className="text-zinc-400 mt-4 font-semibold text-xl">
            PLace of Birth
          </h1>
          <h1 className="text-zinc-400 text-lg">
            {info?.detail?.place_of_birth}
          </h1>
          <h1 className="text-zinc-400 mt-4 font-semibold text-xl">
            Also Known As
          </h1>
          <h1 className="text-zinc-400 text-lg">
            {info?.detail?.also_known_as?.map((d) => d).join(" , ")}
          </h1>
        </div>
        {/* part2 */}
        <div className="overflow-x-auto ">
          <h1 className="text-[10vh] font-bold text-zinc-400  ">
            {" "}
            {info?.detail?.title ||
              info?.detail?.original_title ||
              info?.detail?.original_name ||
              info?.detail?.name}
          </h1>
          <h1 className="text-zinc-400 font-semibold text-2xl">Biography</h1>
          <p className="leading-4 mt-1 tracking-tight text-xs text-zinc-400">
            {info?.detail?.biography}
          </p>
          <div>
            <h1 className="mt-2 text-zinc-400 font-semibold text-2xl">
              Known For
            </h1>
            <HorizontalCards
              data={info?.combinedCredits?.cast || []}
              title="person"
            />
          </div>
          <div className="flex justify-between mt-6">
            <h1 className="mt-2 text-zinc-400 font-semibold text-2xl">
              Acting
            </h1>
            <Dropdown
              title="Category"
              options={["movie", "tv"]}
              func={(e) => {
                setcategory(e.target.value);
              }}
            />
          </div>
          <div className="p-4">
            <div className=" px-8 py-2 overflow-y-auto shadow-[0_0_15px_rgba(255,255,255,0.4),0_0_30px_rgba(255,255,255,0.2),0_0_45px_rgba(255,255,255,0.1)] mt-4  h-[60vh] w-full  ">
              {info[category + "Credits"]?.cast?.map((c, i) => (
                <Link key={i} to={`/${category}/details/${c.id}`} className="">
                  <li className="hover:bg-zinc-900 rounded-lg p-2">
                    <h1 className="text-zinc-400 text-lg mt-4  cursor pointer hover:text-white">
                      {c.title || c.name || c.original_title || c.original_name}
                    </h1>
                    <h1 className="text-zinc-400 text-lg cursor pointer hover:text-white">
                      Character : {c.character}
                    </h1>
                  </li>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default PersonDetails;
