import { useSelector } from "react-redux";
import TeaserInfo from "./TeaserInfo";
import TeaserVideo from "./TeaserVideo";

const Teaser = () => {
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies);  
  const firstMovie = nowPlayingMovies?.[0] || {};

  if(Object.keys('firstMovie').length === 0) return;

  return (
    <div className="relative h-screen w-full pt-40 px-16">
        <div className="z-[2] relative text-white">
            <TeaserInfo info={firstMovie} />
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute inset-0 bg-black/60"></div>
            <TeaserVideo movieId={firstMovie?.id} />
        </div>
    </div>
  )
}

export default Teaser