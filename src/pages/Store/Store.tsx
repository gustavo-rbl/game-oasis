import { Link, useLoaderData, useLocation } from "react-router-dom";
import { GameTypes } from "../../types/types";
import OptimizeImg from "../../modules/OptimizeImg";
import useGenreFilter from "../../store/genreStore";

// component
import GameGenres from "../../components/GameGenres/GameGenres";

// style
import style from "./Store.module.scss";
import globalStyle from "../../style/global/Global.module.scss";

function Store() {
  const data = useLoaderData() as GameTypes[];
  const genresFilter = useGenreFilter((state) => state.genreFilter);
  const { search } = useLocation();

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

  const displayedGames = genresFilter && search ? handleFilter() : data;

  return (
    <div className={`${style.store} ${globalStyle.fadeIn}`}>
      <h2 className={style.store_hero}>Popular Genres:</h2>

      <GameGenres {...data} />

      <div className={style.store_cards}>
        {displayedGames.map((game) => (
          <Link to={game.slug} key={game.slug} className={style.store_card}>
            <img src={OptimizeImg(game.background_image)} alt={game.name} />
            <div className={style.store_card_details}>
              <h2 className={style.store_card_name}>{game.name}</h2>
              <div className={style.store_card_price}>
                <p>{game.price === 0 ? "Free to play" : `$${game.price}`}</p>
                <p>Details &rarr;</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Store;
