import { GameGenresTypes } from "../../types/types";
import HeadingSecondary from "../HeadingSecondary/HeadingSecondary";

function Genres({ genres }: GameGenresTypes) {
  return (
    <>
      <HeadingSecondary text="Genres:" />

      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Genres;
