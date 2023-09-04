import { GameGenresTypes } from "../../types/types";

// component
import HeadingPrimary from "../HeadingPrimary/HeadingPrimary";

// style
import globalStyle from "../../style/global/Global.module.scss";

function Genres({ genres }: GameGenresTypes) {
  return (
    <>
      <HeadingPrimary text="Genres:" />

      <ul className={globalStyle.list_buttons}>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Genres;
