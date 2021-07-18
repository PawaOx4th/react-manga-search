export interface MangaAPIResponseType {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  results: MangaType[];
  last_page: number;
}

export interface MangaType {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  publishing: boolean;
  synopsis: string;
  type: MangaCategoryType;
  chapters: number;
  volumes: number;
  score: number;
  start_date: Date | null;
  end_date: Date | null;
  members: number;
}

export enum MangaCategoryType {
  LightNovel = "Light Novel",
  Manga = "Manga",
  Manhua = "Manhua",
  Manhwa = "Manhwa",
}
