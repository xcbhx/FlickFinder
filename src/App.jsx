import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MovieList from "./components/MovieList";
import { useDispatch } from 'react-redux';
import { fetchMovie } from './redux/movieSlice';



function App() {
  const dispatch = useDispatch();

  const handleSearch = (searchTerm) => {
    dispatch(fetchMovie(searchTerm))
  };

  return (
    <div className='pt-20'>
      <Navbar onSearch={handleSearch} />
      <MovieList />
      <Footer />
    </div>
  )
}

export default App
