import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPopularMovies } from "../utils/movieSlice";
import { MOVIE_REQ_OPTIONS } from "../utils/constants";

const usePopluarMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        MOVIE_REQ_OPTIONS
      );
      const data = await response.json();
      dispatch(setPopularMovies(data.results));
    };

    getPopularMovies();
  }, []);
};

export default usePopluarMovies;
