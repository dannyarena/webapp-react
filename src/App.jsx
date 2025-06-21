import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetailPage from './components/MovieDetailPage';
import Loader from './components/Loader';
import { useLoader } from './context/LoaderContext';

function App() {

  const { isLoading } = useLoader();
  return (
    <>
    <div className='container'>
      <h1>WebApp React</h1>

      {isLoading && <Loader />}



      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </div>
  </>
  )
}
export default App
