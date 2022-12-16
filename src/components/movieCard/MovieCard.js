import React, { useState } from 'react'
import poster from "../../elements/Cruella.png"
import Modal from '../modal/Modal';
import './movieCard.css'

export default function MovieCard({movieData}) {

  let [showModal, setShowModal] = useState(false);

  function displayModal(){
    setShowModal(true);
  }

  function hideModal(){
    setShowModal(false);
  }

  return (
    
    
    <li className="cards_item">
      
      {movieData && (
        <div>

        <Modal show={showModal} handleClose={hideModal} movieData={movieData}>
          <p>Modal</p>
        </Modal>

        <button className='modal-button' onClick={displayModal}>
      <div className="card">  
      <div className="card_image"><div className='rating'>{movieData.vote_average}</div><img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} /></div>
      <span className='movie-name'>{movieData.title} </span>
        </div>
        </button>
    </div>
      )
    }
    
          
    </li>
  )
}
