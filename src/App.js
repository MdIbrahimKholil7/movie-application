import './App.css';
import Header from './components/Share/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetails from './components/Pages/MovieDetails';
import Footer from './components/Share/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie-details/:id' element={<MovieDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
