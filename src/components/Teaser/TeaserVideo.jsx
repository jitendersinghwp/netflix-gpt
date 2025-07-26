import { useSelector } from "react-redux";
import useMovieTeaser from "../../hooks/useMovieTeaser";

const TeaserVideo = ({ movieId }) => {
  const movieTeaser = useSelector((state) => state.movies.movieTeaser);
  useMovieTeaser(movieId);

  if (!movieTeaser) return;

  console.log("movie Teasor", movieTeaser);

  return (
    <iframe
      className="w-full h-full"
      src={
        "https://www.youtube.com/embed/" +
        movieTeaser?.key +
        "?autoplay=1&mute=1"
      }
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay;"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default TeaserVideo;
