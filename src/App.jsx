import { BrowserRouter as Router, Routes, Route, useNavigate, useSearchParams } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home'
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { useDispatch } from 'react-redux';
import { fetchMovie } from './redux/movieSlice';
import { useEffect } from 'react';

function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get('q');
  const dispatch = useDispatch();

  useEffect(() => {
    if (query) {
      dispatch(fetchMovie(query));
    }
  }, [dispatch, query]);

  return <MovieList />;
}

function AppWrapper() {
  const navigate = useNavigate();

  const handleSearch = (term) => {
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/search' element={<SearchResults />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className='pt-20'>
        <AppWrapper />
      </div>
    </Router>
  );
}

export default App;