import useSWR from "swr";
import { useParams } from "react-router-dom";
import { RESTAURENT_API } from "../config/constants";

export function useRestaurentData() {
  const { data, error, isLoading } = useSWR(
    `${RESTAURENT_API}${useParams().id}`,

    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data?.data?.cards[0]?.card?.card?.info;
    },
    { revalidateOnFocus: false }
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
}
