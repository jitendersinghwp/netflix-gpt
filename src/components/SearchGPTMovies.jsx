import { useSelector } from "react-redux"
import { MovieList } from "./MovieList";

export const SearchGPTMovies = () => {
    const {moviesStr, searchGPTMovies} = useSelector(store => store.config);
    if(!moviesStr) return null;
    const moviesArr = moviesStr.split(',');
    console.log(searchGPTMovies);
    //
  return (
    searchGPTMovies.map((movie, index) => <MovieList key={moviesArr[index]} title={moviesArr[index]} movies={movie?.results} />)
  )
}
