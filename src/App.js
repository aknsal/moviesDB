// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
import { useEffect, useState } from 'react';
import './App.css';
import MovieGrid from './components/movieGrid/MovieGrid';
import Navbar from './components/navbar/Navbar';
import SearchLoader from './components/searchLoader/SearchLoader';

function App() {
  let [moviesData, setMoviesData] = useState([])
  let [searching, setSearching] = useState(true);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}5&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {setMoviesData(data.results); setSearching(false) })

    console.log("Fetched Whole Again");
  },[])

  return (
    <div className="App">
      <Navbar moviesData={moviesData} setMoviesData={setMoviesData} setSearching={setSearching} />

      {
        searching===true ? (<SearchLoader />) : <MovieGrid moviesData={moviesData} />
      }
      
      
    </div>
  );
}

export default App;
