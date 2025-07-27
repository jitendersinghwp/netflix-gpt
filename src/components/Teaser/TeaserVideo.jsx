import { useSelector } from "react-redux";
import useMovieTeaser from "../../hooks/useMovieTeaser";

const TeaserVideo = ({ movieId }) => {
  const movieTeaser = useSelector((state) => state.movies.movieTeaser);
  useMovieTeaser(movieId);

  if (!movieTeaser) return;

  return (
    <iframe
      className="w-full h-full"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${movieTeaser?.key}?si=tmzKVZN4zkZ4JaBN&autoplay=1&mute=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default TeaserVideo;
