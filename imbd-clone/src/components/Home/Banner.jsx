import React from "react";

export default function Banner({ movie }) {
  let url = ""
  url = movie ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : "https://www.filmofilia.com/wp-content/uploads/2010/06/inception_banner_04.jpg";
  return (   
      <div
        className="max-h-full max-w-full md:h-[75vh] bg-cover flex items-end bg-no-repeat"
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <div className="py-3 text-white text-center text-xl w-full bg-black bg-opacity-50  ">
        {movie ? movie.original_title :""}
        </div>
      </div>
    
  );
}
