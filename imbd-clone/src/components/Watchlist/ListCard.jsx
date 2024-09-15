import React from "react";
import genreId from "../../utility/genreId";

export default function ListCard({movieObj}) {
  return (
      <div className="border-b-2 border-black-500 p-2 m-4">
          
      <div className="flex flex-row ">
        <img
          src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
          className=" max-h-[10rem] rounded-lg bg-cover"
        ></img>
        <div className="ml-4 ">
          <h3 className="text-[17px]">{movieObj.original_title}</h3>
          <div className=" flex flex-row gap-2 text-[17px] text-gray-700 font-normal"> {movieObj.genre_ids.map((id,index) => <p key={index}>{genreId[id]},</p>) }</div>
          <p className="text-[17px] text-gray-500 font-normal">{movieObj.release_date}</p>
          <p className="text-[17px] text-gray-500 font-normal ">
            <span className="mr-1">
              <i className="fa-solid fa-star text-amber-400"></i>
            </span>
            ({movieObj.vote_average.toPrecision(2)})
          </p>
        </div>
      </div>

          <div className="my-2 text-base/[18px] font-sans font-mediam">
        <p>
          {movieObj.overview}
        </p>
      </div>
    </div>
  );
}
