import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const watchListStore = (set) => ({
  watchListMovies: [],
  addWatchList: (newObj) => {
    set((state) => ({
      watchListMovies: [
        newObj,
        ...state.watchListMovies
      ],
    }))
  },

  deleteWatchListObj: (newObj) =>
    set((state) => ({
      watchListMovies: state.watchListMovies.filter(
        (obj) => obj.id !== newObj.id
      ),
    })),
  
  sortByRatingInc: () => set((state) => ({
    watchListMovies: state.watchListMovies.sort(
      (obj1,obj2) => obj2.vote_average - obj1.vote_average
    ),
  })),
  sortByRatingDec: () => set((state) => ({
    watchListMovies: state.watchListMovies.sort(
      (obj1,obj2) => obj1.vote_average - obj2.vote_average
    ),
  })),

  sortByPopularityInc: () => set((state) => ({
    watchListMovies: state.watchListMovies.sort(
      (obj1,obj2) => obj2.popularity - obj1.popularity
    ),
  })),
  sortByPopularityDec: () => set((state) => ({
    watchListMovies: state.watchListMovies.sort(
      (obj1,obj2) => obj1.popularity - obj2.popularity
    ),
  })),
});

const useWatchListStore = create(
  devtools(persist(watchListStore, { name: "movies" }))
);
export default useWatchListStore;
