import './modal.css';
import React from 'react'

export default function Modal({ handleClose, show, children, movieData }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className='title-container'>
            <h3 className='title'> {movieData.title} </h3>
          
          <button type="button" onClick={handleClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        </div>
        <div className='content-container'>
          <img className='poster' src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} />
          <div className='details-container'>
            <div> <b>Release Date: </b>{movieData.release_date} </div>
            <p>{movieData.overview}</p>
            <div> <b> {movieData.vote_average} </b> / 10 {`(${movieData.vote_count} total votes)`}</div>
            
          </div>
        </div>
        
        
      </section>
    </div>
  )
}
