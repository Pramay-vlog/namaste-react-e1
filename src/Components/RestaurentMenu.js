import React from "react";
import { useRestaurentData } from "../Hooks/useRestaurentData";
import Spinner from "./Spinner";
import { CLOUDINERY_CDN } from "../config/constants";

function RestaurentMenu() {
  const { data, isLoading, error } = useRestaurentData();

  if (isLoading) return <Spinner />;
  else if (error) return <div>Error</div>;
  else {
    let {
      name,
      city,
      costForTwoMessage,
      avgRatingString,
      totalRatingsString,
      cloudinaryImageId,
      locality,
      areaName,
      cuisines,
    } = data;

    return (
      <div className="card-menu">
        <img src={`${CLOUDINERY_CDN}${cloudinaryImageId}`} alt="restaurent" />
        <div className="restaurent-info">
          <h1>{name}</h1>
          <p>{locality}</p>
          <p>{areaName}</p>
          <p>{city}</p>
          <p>{cuisines.join(", ")}</p>
          <p>{costForTwoMessage}</p>
          <p>{avgRatingString}</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
    );
  }
}

export default RestaurentMenu;
