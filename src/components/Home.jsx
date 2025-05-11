import InTheaterListing from "./InTheaterListing";
import PopularMovies from "./PopularMovies";
import ComingSoonListing from "./ComingSoonListing";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Welcome message */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">
          🎬 Welcome to FlickFinder!
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Discover what’s in theaters, what’s popular, and what’s coming soon.
        </p>
      </section>

      {/* In Theaters */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-white">Now Playing</h2>
        <InTheaterListing />
      </section>

      {/* Popular */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-white">Popular</h2>
        <PopularMovies />
      </section>

      {/* Coming Soon */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-white">Coming Soon</h2>
        <ComingSoonListing />
      </section>
    </div>
  );
}

export default Home;
