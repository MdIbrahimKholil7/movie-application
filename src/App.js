import './App.css';
import React, { Suspense, } from 'react';
import Header from './components/Share/Header';
import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home/Home';
import MovieDetails from './components/Pages/MovieDetails';
import Footer from './components/Share/Footer'
import loading from './assets/loading.gif'
function App() {
  const Home = React.lazy(() => import('./components/Home/Home'))
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/' element={<Suspense
          fallback={
            <div className='loading-img'>
              <img  src={loading} alt="loading" />
            </div>
          }
        >
          <Home />
        </Suspense>
        } />
        <Route path='movie-details/:id' element={<MovieDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
