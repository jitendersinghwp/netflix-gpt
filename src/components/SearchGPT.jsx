import { useRef, useState } from "react";
import movie_bg from "./../assets/images/movie_bg.jpg";
import googleGenAI from "../utils/googleGenAI";
import { MOVIE_REQ_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setGPTData } from "../utils/configSlice";
import { SearchGPTMovies } from "./SearchGPTMovies";

const SearchGPT = () => {
  const dispatch = useDispatch();
  const searchInput = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchGPTForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const searchText = searchInput.current.value;
    if (!searchText) return;

    const prompt = `Based on the search query "${searchText}", recommend exactly 5 movies that match this criteria. 
    Return only the movie titles separated by commas, no additional text, descriptions, or formatting.
    Format: Movie1, Movie2, Movie3, Movie4, Movie5`;

    try {
      const response = await googleGenAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      const moviesStr = response?.candidates[0]?.content?.parts[0]?.text ?? "";
      if (!moviesStr) throw new Error("No movies found");
      const moviesArr = moviesStr.split(",");
      const moviesPromiseData = moviesArr.map((movie) => {
        return fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&page=1",
          MOVIE_REQ_OPTIONS
        ).then((res) => res.json());
      });
      const moviesData = await Promise.all(moviesPromiseData);
      dispatch(setGPTData({ moviesStr: moviesStr, movies: moviesData }));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };

  return (
    <div className="relative min-h-lvh flex justify-center items-center py-26">
      <div className="fixed top-0 left-0 right-0 bottom-0">
        <img
          className="w-full h-full object-cover fixed"
          src={movie_bg}
          alt="movie_bg"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="w-full">
        <form onSubmit={handleSearchGPTForm}>
          <div className="z-10 w-6/12 flex relative m-auto p-4 rounded-[5px] bg-black/80">
            <input
              ref={searchInput}
              type="text"
              className="border w-9/12 rounded-tl-[5px] rounded-bl-[5px] border-r-0 border-white text-white p-3"
              placeholder="search any movie"
            />
            <button
              className="w-3/12 text-white bg-red-600 border border-l-0 rounded-tr-[5px] rounded-br-[5px]  border-white cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Wait..." : "Search"}
            </button>
          </div>
        </form>
        <div className="w-10/12 mx-auto px-12 text-white z-10 relative flex flex-col gap-10 mt-11">
          <SearchGPTMovies />
        </div>
      </div>
    </div>
  );
};

export default SearchGPT;
