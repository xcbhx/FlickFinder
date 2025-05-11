import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const apikey = import.meta.env.VITE_MOVIE_API_KEY;

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`);
      const data = await res.json();
      setMovie(data);
      setLoading(false);
    };
    fetchDetails();
  }, [apikey, id]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      {/* Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="max-w-[350px] h-auto object-contain"
      />

      {/* Details */}
      <div className="flex flex-col justify-start max-w-[350px]">
        <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
        <p className="text-sm text-gray-500 mb-2">
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
