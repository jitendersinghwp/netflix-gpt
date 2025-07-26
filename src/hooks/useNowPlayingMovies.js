import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../utils/movieSlice";
import { MOVIE_REQ_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        MOVIE_REQ_OPTIONS
      );
      const data = await response.json();
      dispatch(setNowPlayingMovies(data.results));
    };

    getMovies();
  }, []);
};

export default useNowPlayingMovies;
