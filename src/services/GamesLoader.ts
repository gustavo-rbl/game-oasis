/*
  If you are considering expanding this project 
  or want to full development experience.
  Please create a RAWG account to get your API key here:
  https://rawg.io/apidocs
*/

import { paramsTypes } from "../types/types";

const GamesLoader = async ({ params }: paramsTypes) => {
  const { nameSlug } = params;
  const API_KEY = ""; // <<<=== YOUR KEY GOES HERE
  let API_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

  if (nameSlug) {
    API_URL = `https://api.rawg.io/api/games/${nameSlug}?key=${API_KEY}`;
  }

  try {
    const response = await fetch(API_URL, { mode: "cors" });

    if (!response.ok) throw new Error(response.status.toString());

    const data = await response.json();

    return nameSlug ? data : data.results;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export default GamesLoader;
