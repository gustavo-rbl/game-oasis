export type GameTypes = {
  id: number;
  slug: string;
  name: string;
  metacritic: number | null;
  released: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  achievements_count: number;
  price: number;
  publishers: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  short_screenshots: {
    id: number;
    image: string;
  }[];
  genres: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
} & PlatformsTypes &
  DevelopersTypes &
  TagsTypes &
  ESRBRatingTypes;

export type ParamsTypes = {
  params: {
    nameSlug: string;
  };
};

export type GenresTypes = {
  id: number;
  name: string;
  slug: string;
  img: string;
};

export type GenresTypesArray = GenresTypes[];

export type CarrouselTypes = {
  screenshots: {
    id: number;
    image: string;
  }[];
};

export type HeadingTypes = {
  text: string;
};

export type MetacriticTypes = {
  metacritic: number;
};

export type ESRBRatingTypes = {
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  } | null;
};

export type ContentManagerTypes = {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
};

export type DevelopersTypes = {
  developers: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
};

export type PlatformsTypes = {
  platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
};

export type GameGenresTypes = {
  genres: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
};

export type TagsTypes = {
  tags: {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }[];
};

export type CartGameType = {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
};

export type CartStoreTypes = CartGameType[] | [];
