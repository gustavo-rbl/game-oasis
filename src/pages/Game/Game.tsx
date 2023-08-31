import { useLoaderData } from "react-router-dom";
import { GameTypes } from "../../types/types";
import { format, parseISO } from "date-fns";

// component
import HeadingPrimary from "../../components/HeadingPrimary/HeadingPrimary";
import ScreenshotsCarrousel from "../../components/ScreenshotsCarrousel/ScreenshotsCarrousel";
import HeadingSecondary from "../../components/HeadingSecondary/HeadingSecondary";
import Metacritic from "../../components/Metacritic/Metacritic";
import ESRBRating from "../../components/ESRBRating/ESRBRating";
import ContentManager from "../../components/ContentManager/ContentManager";
import Developers from "../../components/Developers/Developers";
import Platforms from "../../components/Platforms/Platforms";
import Genres from "../../components/Genres/Genres";
import Tags from "../../components/Tags/Tags";

function Game() {
  const game = useLoaderData() as GameTypes;

  return (
    <section>
      <HeadingPrimary text={game.name} />

      <ScreenshotsCarrousel screenshots={game.short_screenshots} />

      <Metacritic metacritic={game.metacritic} />

      <ESRBRating esrb_rating={game.esrb_rating} />

      <ContentManager price={game.price} />

      <Developers developers={game.developers} />

      <HeadingSecondary text={`Released: ${format(parseISO(game.released), "MMMM dd yyyy")}`} />

      <Platforms platforms={game.platforms} />

      <HeadingSecondary text={`Acheivements: ${game.achievements_count}`} />

      <Genres genres={game.genres} />

      <Tags tags={game.tags} />
    </section>
  );
}

export default Game;
