import React, { useEffect } from 'react'
import MovieCard from '../movieCard/MovieCard'
import './movieGrid.css'

export default function MovieGrid({moviesData}) {
  
  useEffect(() => {
    console.log(moviesData);
  },[moviesData])

  return (
    <div>
      <h3 className='heading'>
        Most Recent Movies
      </h3>
      
      {
        moviesData && moviesData.length>0 && (
          <ul className="cards">
          {moviesData.map((movieData) => (
          <MovieCard movieData={movieData} key={movieData.id}/>
        ))}
      </ul>

)}
    </div>
  )
}
