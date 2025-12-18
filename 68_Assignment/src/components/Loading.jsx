import loading from "../assets/Images/Loading.png";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10 grow">
      <img src={loading} alt="Loading" className="animate-spin w-20 " />
      <h2 className="text-center text-primary-dark text-2xl font-bold">
        Loading...
      </h2>
    </div>
  );
};
export default Loading;
