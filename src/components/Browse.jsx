import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopluarMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/usetopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { MoviesContainer } from "./MoviesContainer";
import Teaser from "./Teaser/Teaser";
import SearchGPT from "./SearchGPT";

const Browse = () => {
  const searchGPT = useSelector(store => store.config.searchGPT);
  useNowPlayingMovies();
  usePopluarMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      {!searchGPT ? (<>
      <Teaser />
      <MoviesContainer />
      </>
      ) : <SearchGPT /> }
    </>
  )
}

export default Browse;