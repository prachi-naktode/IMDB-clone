import React, { useEffect, useState } from "react";
import WatchListListHeader from "./WatchListListHeader";
import ListCard from "./ListCard";

import useWatchListStore from "../watchListStore";
import useSearch from "./search";

export default function List() {
  const watchListCard = useWatchListStore();
  let { watchListMovies } = watchListCard;
  // console.log(watchListMovies);

  const searchStore = useSearch();
  let { searchInput } = searchStore;

  useEffect(() => {
    watchListMovies.sort(
      (obj1, obj2) => obj2.vote_average - obj1.vote_average
    );
  }, []);

  return (
    <div className="h-[100vh] bg-white text-black font-medium text-xl">
      <WatchListListHeader />
      <div className="border-2 border-black-500 mt-10 mx-40 ">
        {watchListMovies
          .filter((movieObj) => {
            return movieObj.title
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          })
          .map((movieObj) => {
            return <ListCard key={movieObj.id} movieObj={movieObj} />;
          })}
      </div>
    </div>
  );
}
