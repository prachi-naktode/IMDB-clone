import React from "react";

export default function Header() {
  return (
    <div className="bg-zinc-800 h-[270px] w-full">
      <div className="h-[30%] mx-40"></div>
      <div className="flex flex-row mx-40 justify-between">
        <div className="w-[70%] ">
          <h1 className="text-4xl font-medium text-gray-300 py-2 ">
            Your WatchList
          </h1>
          <p className="text-md text-gray-300 py-3 mt-2">
            Your Watchlist is the place to track the titles you want to watch.
            You can sort your Watchlist by the IMDb rating, popularity score and
            arrange your titles in the order you want to see them.
          </p>
        </div>
        <div className="w-[30%] px-5 ml-8 my-auto flex justify-end">
          <button className="bg-yellow-600 text-xl text-black font-bold rounded-3xl py-3 px-4 flex flex-row">
            <i className="fa-solid fa-plus py-2"></i> <p className="pl-2">Create List</p>
          </button>
        </div>
      </div>
    </div>
  );
}
