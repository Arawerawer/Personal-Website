import "@/styles/loader.scss";

interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  return (
    <div
      className={`loader-1 ${
        isLoading
          ? "opacity-100 pointer-events-none"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <img src="images/loading-gif-1.gif" alt="Loader" className="loader-2" />
    </div>
  );
};

export default Loader;
