import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTopRatedMovies } from "../utils/movieSlice";
import { MOVIE_REQ_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTopRatedMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        MOVIE_REQ_OPTIONS
      );
      const data = await response.json();
      dispatch(setTopRatedMovies(data.results));
    };

    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
