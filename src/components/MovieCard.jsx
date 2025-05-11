import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/images/comingsoon.png";

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{movie.title}</h2>
          {movie.release_date && (
            <p className="text-sm text-gray-500">Release: {movie.release_date}</p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default MovieCard;