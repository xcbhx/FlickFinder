import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";

function MovieList() {
  const movies = useSelector((state) => state.movies.items);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  if (status === "loading") return <p className="text-center">Loading...</p>;
  if (status === "failed") return <p className="text-center text-red-500">{error}</p>;
  if (movies.length === 0) return <p className="text-center">No results found.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {movies.map((movie, index) => (
        <motion.div
          key={movie.id}
          initial={{ opacity: 0, y: 20 }}   // Start hidden and slightly lower        
          animate={{ opacity: 1, y: 0 }}    // Animate to visible and aligned      
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <MovieCard movie={movie} />
        </motion.div>
      ))}
    </div>
  );
}

export default MovieList;