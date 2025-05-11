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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full max-w-md mx-auto mb-4"
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p className="mt-4 text-gray-700">{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
