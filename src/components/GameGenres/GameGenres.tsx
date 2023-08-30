import { GameTypes, GenresTypes } from "../../types/types";
import getGenres from "../../modules/GetGenres";
import OptimizeImg from "../../modules/OptimizeImg";
import { useSearchParams } from "react-router-dom";
import useGenreFilter from "../../store/genreStore";

function GameGenres(data: GameTypes[]) {
  const genres = getGenres(data);
  const [searchParams, setSearchParams] = useSearchParams();
  const genresFilter = searchParams.get("genre");
  const genresFilterState = useGenreFilter((state) => state.genreFilter);
  const setGenresFilter = useGenreFilter((state) => state.setGenreFilter);

  const setFilter = (genre: GenresTypes) => {
    setSearchParams({ genre: genre.slug });
    setGenresFilter(genre);
  };

  const clearFilter = () => {
    setSearchParams({});
    setGenresFilter(null);
  };

  return (
    <>
      <nav>
        <ul>
          {genres.map((genre: GenresTypes) => (
            <li key={genre.id} onClick={() => setFilter(genre)}>
              <img src={OptimizeImg(genre.img)} alt={genre.name} />
              <h3>{genre.name}</h3>
            </li>
          ))}
        </ul>
      </nav>

      <h2>
        {genresFilter ? (
          <>
            <span>Filtered By:</span> <span>{genresFilterState?.name}</span>{" "}
            <span onClick={clearFilter}>Clear filter</span>
          </>
        ) : (
          "Popular Games"
        )}
      </h2>
    </>
  );
}

export default GameGenres;
