import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopluarMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/usetopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { MoviesContainer } from "./MoviesContainer";
import Teaser from "./Teaser/Teaser";

const Browse = () => {
  
  useNowPlayingMovies();
  usePopluarMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Teaser />
      <MoviesContainer />
    </>
  )
}

export default Browse;