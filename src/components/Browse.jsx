import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Teaser from "./Teaser/Teaser";

const Browse = () => {
  
  useNowPlayingMovies();

  return (
    <>
      <Teaser />
    </>
  )
}

export default Browse;