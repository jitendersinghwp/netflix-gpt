import { useDispatch } from "react-redux";
import { MOVIE_REQ_OPTIONS } from "../utils/constants";
import { setMovieTeaser } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTeaser = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVidoes = async () => {
    if (!movieId) return;

    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      MOVIE_REQ_OPTIONS
    );
    const data = await response.json();

    // console.log(data.results);

    const movieTrailers = data.results.filter(
      (movie) => movie.name === "Official Teaser Trailer"
    );

    const movieTeaserData = movieTrailers.length
      ? movieTrailers[0]
      : data.results[0];

    dispatch(setMovieTeaser(movieTeaserData));
  };

  useEffect(() => {
    getMovieVidoes();
  }, [movieId]);
};

export default useMovieTeaser;
