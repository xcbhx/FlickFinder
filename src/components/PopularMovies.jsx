import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "./MovieCard";

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apikey = import.meta.env.VITE_MOVIE_API_KEY;

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setMovies(
          data.results
            .sort((a, b) => b.vote_average - a.vote_average)
            .slice(0, 15)
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, [apikey]);

  if (loading) return <p className="text-center">Loading popular movies...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="relative px-2">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".popular-button-next",
          prevEl: ".popular-button-prev",
        }}
        spaceBetween={5}
        slidesPerView={2}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="pb-8"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="flex justify-center">
            <div className="w-[200px]">
              <MovieCard movie={movie} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="popular-button-prev absolute top-[40%] left-0 z-10 text-white bg-slate-800 hover:bg-slate-700 px-2 py-1 shadow-lg" />
      <div className="popular-button-next absolute top-[40%] right-0 z-10 text-white bg-slate-800 hover:bg-slate-700 px-2 py-1 shadow-lg" />
    </div>
  );
}

export default PopularMovies;
