import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div>
        <h2 className="text-[18px] font-semibold mb-2.5">{title}</h2>
      </div>

      <div className="flex gap-2.5 overflow-x-auto">
        {movies.map(
          (movie) =>
            movie?.poster_path && (
              <div key={movie.id} className="w-[150px] shrink-0">
                <MovieCard
                  posterPath={movie?.poster_path}
                  title={movie?.title}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};
