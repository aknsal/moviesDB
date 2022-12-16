import React from 'react'
import logo from "../../elements/insync_logo.png"
import SearchBar from '../searchBar/SearchBar'
import "./navbar.css"


export default function Navbar({moviesData, setMoviesData, setSearching}) {
  return (
    <div>
    <div className='navbar-container'>
      <img src={logo} />
      <SearchBar moviesData={moviesData} setMoviesData={setMoviesData} setSearching={setSearching} />
    </div>
    <hr />
    </div>
  )
}
