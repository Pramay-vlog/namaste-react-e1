import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
  return (
    <div className="spinner">
      <ClipLoader
        color="#FF0000"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
