import { Link, useLoaderData } from "react-router-dom";
import { GameTypes } from "../../types/types";
import OptimizeImg from "../../modules/OptimizeImg";
import GameGenres from "../../components/GameGenres/GameGenres";
import useGenreFilter from "../../store/genreStore";

function Store() {
  const data = useLoaderData() as GameTypes[];
  const genresFilter = useGenreFilter((state) => state.genreFilter);

  const handleFilter = () => {
    const filteredGames: GameTypes[] = [];

    data.forEach((game) =>
      game.genres.forEach((genre) => {
        if (genre.id === genresFilter?.id) {
          filteredGames.push(game);
        }
      })
    );

    return filteredGames;
  };

  const displayedGames = genresFilter ? handleFilter() : data;

  return (
    <>
      <h2>Popular Genres</h2>
      <GameGenres {...data} />

      {displayedGames.map((x) => (
        <div key={x.slug}>
          <h2>{x.name}</h2>
          <img src={OptimizeImg(x.background_image)} alt={x.name} />
          <Link to={x.slug}>{x.name}</Link>
        </div>
      ))}
    </>
  );
}

export default Store;
