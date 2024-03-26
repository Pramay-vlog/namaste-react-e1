import React, { useState, useEffect } from "react";
import { useSwiggyData } from "../Hooks/useSwiggyData";
import CardList from "./CardList";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

function Card({ isSort, inputTerm = "" }) {
  const [sortedData, setSortedData] = useState([]);
  const { data, isLoading, error } = useSwiggyData();

  /* Sorting */
  useEffect(() => {
    if (!data) return;
    let newData = [...data];
    if (isSort) {
      newData.sort((a, b) => (b.info.avgRating || 0) - (a.info.avgRating || 0));
    }
    setSortedData(newData);
  }, [data, isSort]);

  /* CardLists rendering */
  let card = sortedData
    ?.filter((item) =>
      item.info.name.toLowerCase().startsWith(inputTerm.toLowerCase())
    )
    .map((item, index) => {
      return <CardList key={index} info={item.info} />;
    });

  if (error) return <div>Error fetching data</div>;
  else if (isLoading) return <Spinner />;
  else return <div className="card">{card}</div>;
}

export default Card;
