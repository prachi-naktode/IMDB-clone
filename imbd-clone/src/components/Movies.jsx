import { useEffect, useState } from "react";
import React from "react";
import Card from "./Home/Card";
import Pagination from "./Home/Pagination";
import axios from "axios";

import useMovieStore from "./store";
import Banner from "./Home/Banner";

function Movies() {
  // const [popularMovies, setPopularMovies] = useState([]);
  // const [pageNo, setPageNo] = useState(1);

  // const handlePrev = () => {
  //   if (pageNo > 1) {
  //     setPageNo(pageNo - 1);
  //   }
  // }

  // const handleNext = () => {
  //   setPageNo(pageNo + 1);
  // }

  let Movies = useMovieStore();
  // console.log("movies",Movies);
  let { popularMovies, pageNo, handlePrev, handleNext, addPopularMovies } =
    Movies;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=847803afffca4da9b6f622ff5b34071c&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        addPopularMovies(response.data.results);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Error response :- ");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("Error request", error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, [pageNo]);

  // console.log(popularMovies);
  return (
    <>
      <Banner movie={popularMovies ? popularMovies[0] : ""} />
      <div className="p-4 ">
        <div className="text-3xl text-center font-bold m-8 py-3">
          Trending Movies
        </div>
        <div className="max-w-[100vw] flex flex-row flex-wrap gap-11 justify-center">
          {popularMovies.map((movieObj) => {
            return <Card key={movieObj.id} movieObj={movieObj} />;
          })}
        </div>
        <Pagination

        //   pageNo={pageNo}
        //  handleNext={handleNext}
        // handlePrev={handlePrev}
        />
      </div>
    </>
  );
}

export default Movies;
