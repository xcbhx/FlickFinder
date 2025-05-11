import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { useDispatch } from 'react-redux';
import { fetchMovie } from './redux/movieSlice';



function App() {
  const dispatch = useDispatch();

  const handleSearch = (searchTerm) => {
    dispatch(fetchMovie(searchTerm))
  };

  return (
    <Router>
      <div className='pt-20'>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
