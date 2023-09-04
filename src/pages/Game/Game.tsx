import { Link, useLoaderData } from "react-router-dom";
import { GameTypes } from "../../types/types";
import { format, parseISO } from "date-fns";

// component
import HeadingPrimary from "../../components/HeadingPrimary/HeadingPrimary";
import ScreenshotsCarrousel from "../../components/ScreenshotsCarrousel/ScreenshotsCarrousel";
import Metacritic from "../../components/Metacritic/Metacritic";
import ESRBRating from "../../components/ESRBRating/ESRBRating";
import ContentManager from "../../components/ContentManager/ContentManager";
import Developers from "../../components/Developers/Developers";
import Platforms from "../../components/Platforms/Platforms";
import Genres from "../../components/Genres/Genres";
import Tags from "../../components/Tags/Tags";

//style
import style from "./Game.module.scss";
import globalStyle from "../../style/global/Global.module.scss";

function Game() {
  const game = useLoaderData() as GameTypes;

  return (
    <section className={`${style.game} ${globalStyle.fadeIn}`}>
      <Link to=".." relative="path" className={style.game_return}>
        &larr; Store
      </Link>

      <HeadingPrimary text={game.name} />

      <div className={style.game_showcase}>
        <ScreenshotsCarrousel screenshots={game.short_screenshots} />

        <div className={style.game_manager}>
          <div className={style.game_rating}>
            <ESRBRating esrb_rating={game.esrb_rating} />

            {game.metacritic && <Metacritic metacritic={game.metacritic} />}
          </div>

          <ContentManager
            id={game.id}
            name={game.name}
            thumbnail={game.background_image}
            price={game.price}
          />

          <Developers developers={game.developers} />
        </div>
      </div>

      <HeadingPrimary text="Released:" />
      <p className={style.game_tag}>{format(parseISO(game.released), "MMMM dd yyyy")}</p>

      <HeadingPrimary text="Achievements:" />
      <p className={style.game_tag}>{game.achievements_count}</p>

      <Platforms platforms={game.platforms} />

      <Genres genres={game.genres} />

      <Tags tags={game.tags} />
    </section>
  );
}

export default Game;
