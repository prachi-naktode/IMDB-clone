import React from "react";
import useWatchListStore from "../watchListStore";

export default function Card({ movieObj }) {
  const watchListStore = useWatchListStore();
  // console.log(watchListStore);

  let { watchListMovies, addWatchList, deleteWatchListObj } = watchListStore;
  console.log(watchListMovies);

  //To check if movie exist in watch list
  function movieInWatchList(movieObj) {
    for (let i = 0; i < watchListMovies.length; i++) {
      if (movieObj.id === watchListMovies[i].id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover relative rounded-lg shadow-box flex flex-col justify-between hover:scale-105 duration-300 cursor-pointer  "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`,
      }}
    >
      {movieInWatchList(movieObj) ? (
        <div
          onClick={() =>deleteWatchListObj(movieObj) }
          className=" m-1 rounded-lg w-6 h-auto bg-black bg-opacity-40 flex justify-center hover:bg-black "
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => addWatchList(movieObj)}
          className=" m-1 rounded-lg w-6 h-auto bg-black bg-opacity-40 flex justify-center hover:bg-black  "
        >
          &#128525;
        </div>
      )}

      <div className="w-full text-white text-lg text-center absolute bg-black bg-opacity-70 bottom-0">
        {movieObj.original_title}
      </div>
    </div>
  );
}

// {https://image.tmdb.org/t/p/original/${poster_path}}
