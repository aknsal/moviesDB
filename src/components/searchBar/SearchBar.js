import React, { useEffect, useState } from 'react'
import "./searchBar.css"

export default function SearchBar({moviesData, setMoviesData, setSearching}) {

  let [searchMovies, setSearchMovies] = useState('')

  function handleChange(e) {
    setSearching(true);
    setSearchMovies(e.target.value);
    console.log(searchMovies);
  }

  useEffect(() =>{
    const fetchData = async () => {
      await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchMovies}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => {setMoviesData(data.results); setSearching(false)})
    }

    const fetchRecentData = async () => {
      await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {setMoviesData(data.results); setSearching(false)})
    }
    const timer = setTimeout(() => {
      if(searchMovies && searchMovies.length>0){
        fetchData();
      }
      else{
        fetchRecentData();
      }
    }, 1000);

    return () => clearTimeout(timer);
  },[searchMovies])

  return (
    <div className="input-icons">
      <i className="fa-solid fa-magnifying-glass icon"></i>
      <input className='search-input input-field' placeholder='Search for a movie' value={searchMovies} onChange={handleChange} />
    </div>
    
  )
}
