export const MOVIE_REQ_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_ACCESS_TOKEN}`
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300/";