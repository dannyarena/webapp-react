import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetailPage from './components/MovieDetailPage';

function App() {
  return (
    <div className='container'>
      <h1>WebApp React</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </div>
  )
   
}
export default App
