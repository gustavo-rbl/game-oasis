import { GameTypes, GenresTypesArray } from "../types/types";

const getGenres = (data: GameTypes[]) => {
  const genres: GenresTypesArray = [];

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key];

      element.genres.forEach((genre) => {
        if (!genres.find((o) => o.name === genre.name)) {
          genres.push({
            id: genre.id,
            name: genre.name,
            slug: genre.slug,
            img: genre.image_background,
          });
        }
      });
    }
  }

  return genres;
};

export default getGenres;
