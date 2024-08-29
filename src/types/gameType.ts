type PlatformDetail = {
  id: number;
  name: string;
  slug: string;
};

type Platform = {
  platform: PlatformDetail;
};

type StoreDetail = {
  id: number;
  name: string;
  slug: string;
};

type Store = {
  store: StoreDetail;
};

type Rating = {
  id: number;
  title: string;
  count: number;
  percent: number;
};

type AddedByStatus = {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
};

type Tag = {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
};

type Genre = {
  id: number;
  name: string;
  slug: string;
};

export type GameDetail = {
  genres: Genre[];
  slug: string;
  name: string;
  playtime: number;
  platforms: Platform[];
  stores: Store[];
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number;
  suggestions_count: number;
  updated: string;
  id: number;
  score: number | null;
  clip: string | null;
  tags: Tag[];
};
