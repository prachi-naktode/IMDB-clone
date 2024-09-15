import React from "react";
import useMovieStore from "../store";

export default function Pagination({/*{ handlePrev, handleNext, pageNo }*/}) {
  let Movies = useMovieStore();
  let { pageNo, setPageNo, handlePrev, handleNext } = Movies;
  
  const handlePageNo = (e) => {
    setPageNo(Number(e.target.innerHTML));
    // console.log(e.target.innerHTML);
  }

  return (
    <nav className="flex justify-center mt-12 bg-white bg-opacity-10">
      <ul className="list-style-none flex">
        <li className="hover:cursor-pointer">
          <button type="button" disabled={pageNo === 1} onClick={handlePrev} className="relative block rounded bg-transparent px-3 py-1.5 text-xl text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500">
            <span>&laquo;</span>
          </button>
        </li>
        <li className="hover:cursor-pointer">
          <button type="button" onClick={handlePageNo} disabled={pageNo === 1} className="relative block rounded bg-transparent px-3 py-1.5 text-xl text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500">
            {pageNo - 1}
          </button>
        </li>
        <li className="hover:cursor-pointer">
          <button type="button" onClick={handlePageNo} className="relative block rounded bg-transparent px-3 py-1.5 text-xl text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500">
            {pageNo}
          </button>
        </li>
        <li className="hover:cursor-pointer">
          <button type="button" onClick={handlePageNo} className="relative block rounded bg-transparent px-3 py-1.5 text-xl text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500">
            {pageNo + 1}
          </button>
        </li>
        <li  className="hover:cursor-pointer">
          <button type="button" disabled={pageNo === 500} onClick={handleNext} className="relative block rounded bg-transparent px-3 py-1.5 text-xl text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500">
            <span>&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
