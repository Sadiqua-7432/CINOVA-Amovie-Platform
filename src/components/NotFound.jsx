import notfound from "../assets/notfound.gif";
import { Link, useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full left-0 absolute bg-[rgba(0,0,0,.9)] top-0 h-screen flex items-center justify-center ">
      <Link>
        <span
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="ri-close-fill z-[100] top-[4%] left-[85%] absolute mr-2 text-zinc-100 text-3xl"></i>
        </span>
      </Link>
      <img className="h-[15%] w-[15%] object-cover  " src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
