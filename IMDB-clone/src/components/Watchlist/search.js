import { create } from "zustand";

const useSearch = create((set) => ({
  searchInput: "",
  setSearchInput: (s) => set((state) => ({ searchInput: s })),
//   sortByRating: () => {},
//   sortByPopularity: () => {},
}));

export default useSearch;
