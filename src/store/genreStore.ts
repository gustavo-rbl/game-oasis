import { create } from "zustand";
import { GenresTypes } from "../types/types";

interface GenreState {
  genreFilter: GenresTypes | null;
  setGenreFilter: (genre: GenresTypes | null) => void;
}

const useGenreFilter = create<GenreState>()((set) => ({
  genreFilter: null,
  setGenreFilter: (genre) => set(() => ({ genreFilter: genre })),
}));

export default useGenreFilter;
