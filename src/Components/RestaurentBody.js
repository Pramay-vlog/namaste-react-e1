import React, { useEffect, useState } from "react";
import Card from "./Card";
import useOnlineStatus from "../Hooks/useOnlineStatus";

function RestaurentBody() {
  const [isSort, setIsSort] = useState(false);
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    /* Debouncing */
    let timer = setTimeout(() => {
      setTerm(term);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [term]);

  const isOnline = useOnlineStatus();
  if (!isOnline) return <h1>Offline</h1>;

  return (
    <div className="restaurent-body">
      <div className="restaurent-header">
        <button className="sort-btn" onClick={() => setIsSort(!isSort)}>
          {!isSort ? "Top Rated" : "Reset"}
        </button>
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            className="search"
            name="search"
            placeholder="Search for restaurent..."
            onChange={handleChange}
            value={term}
          />
        </form>
      </div>
      <Card isSort={isSort} inputTerm={term} />
    </div>
  );
}

export default RestaurentBody;
