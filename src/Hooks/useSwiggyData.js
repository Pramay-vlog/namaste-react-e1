import useSWR from "swr";

export function useSwiggyData() {
  const { data, error } = useSWR(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2610616&lng=72.83677759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",

    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      return data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    },
    { revalidateOnFocus: false }
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
}