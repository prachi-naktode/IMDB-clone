import {  useState } from "react";
import React from "react";

import useWatchListStore from "../watchListStore";
import useSearch from "./search";

export default function WatchListListHeader() {
  const watchListCard = useWatchListStore();
  let { watchListMovies , sortByRatingInc, sortByPopularityInc } = watchListCard;

  const [toggle, setToggle] = useState(true);

  const searchStore = useSearch();
  let { searchInput, setSearchInput } = searchStore;
  // console.log(searchStore);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)
  }


  return (
    <div className="flex flex-row justify-between h-[4.5rem] mx-40 pt-8 sm:flex-col gap-1 md:flex-col gap-2 lg:flex-row">
      <div className=" py-1 text-[1.2rem] text-center font-medium">{watchListMovies.length} items</div>
      <div className="place-content-center flex justify-center md:w-full lg:w-[43rem]">
        <input type="text" value={searchInput} onChange={handleSearchInput} placeholder="Search Movie" className="border-2 w-full px-2 text-[1.2rem] rounded-md md:w-full"/>
      </div>
      <div className="text-[1.3rem] ">
        Sort By
        <button onClick={sortByRatingInc} Id={'1'} className=" ml-1 text-[1.2rem] p-1 text-center text-sky-600 rounded-3xl  px-4 hover:bg-sky-400/30 ">
          Rating
        </button>
        <button onClick={sortByPopularityInc} Id={'2'} className="text-sky-600 p-1 text-center text-[1.2rem] rounded-3xl px-4 hover:bg-sky-400/30 ">
          Popularity
        </button>
        <button
          className="rounded-3xl hover:bg-sky-400/30 p-2"
          onClick={() => setToggle(!toggle)}
        >
          <span className="">
            <i
              className={`fa-sharp fa-solid fa-arrow-up ${
                toggle ? "text-sky-500" : "text-gray-400"
              }`}
            ></i>
          </span>
          <span>
            <i
              className={`fa-sharp fa-solid fa-arrow-down ${
                !toggle ? "text-sky-500" : "text-gray-500"
              }`}
            ></i>
          </span>
        </button>
      </div>
    </div>
  );
}
