import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export const MoviesContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className=" pl-16 bg-black text-white">
      <div className="flex flex-col gap-10 -mt-24 z-10 relative">
        <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};
