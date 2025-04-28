import FavoriteButton from './CustomFavorite';

const MovieInfo = ({ movie }) => (
  <div className="flex flex-col md:flex-row gap-8 mt-10">
    <img
      src={movie.Poster !== 'N/A' ? movie.Poster : '/img/placeholder.jpg'}
      alt={movie.Title}
      className="w-full md:w-72 rounded shadow"
    />
    <div className="flex-1">
      <h1 className="text-4xl font-bold mb-9">{movie.Title}</h1>
      <p className="italic text-sm mb-5">{movie.Genre}</p>
      <p className="mb-7">{movie.Plot}</p>

      <div className="text-sm space-y-2 mb-5">
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>
        <p><strong>Año:</strong> {movie.Year}</p>
        <p><strong>Duración:</strong> {movie.Runtime}</p>
      </div>

      <div className="flex justify-center mt-15">
        <FavoriteButton key={movie.imdbID} id={movie.imdbID} />
      </div>

    </div>
  </div>
);

export default MovieInfo;