import React from "react";
import { Link } from "react-router-dom";

export default function Navbar2() {
  return (
    <div className="flex shadow-[0_1px_6px_0px_rgba(255,255,255,0.3)] space-x-8 items-center pl-4 py-2">
      <Link to="/" className="">
        <img
          className="w-[75px]"
          width="96"
          height="96"
          src="https://img.icons8.com/color/96/imdb.png"
          alt="imdb-logo"
        />
      </Link>
      <Link to="/" className="text-white text-xl font-bold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-white text-xl font-bold">
        Watchlist
      </Link>
    </div>
  );
}
