import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUpcomingMovies } from "../utils/movieSlice";
import { MOVIE_REQ_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUpcomingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        MOVIE_REQ_OPTIONS
      );
      const data = await response.json();
      dispatch(setUpcomingMovies(data.results));
    };

    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
