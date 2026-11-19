import loader from "../../assets/loader.gif";
const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <img className="h-[15%] w-[15%] object-cover  " src={loader} alt="" />
    </div>
  );
};

export default Loader;
