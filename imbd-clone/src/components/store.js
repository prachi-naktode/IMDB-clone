import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useMovieStore = create((set) => ({
  popularMovies: [],
  pageNo: 1,
  setPageNo: (n) => set((state) => ({pageNo:n})),
  handlePrev: () =>
      set((state) => ({      
          pageNo: state.pageNo - 1    
    })),
  handleNext: () => set((state) => ({ pageNo: state.pageNo + 1 })),
  addPopularMovies: (obj) => {
    set({ popularMovies: obj })
  },
}));


export default useMovieStore;
