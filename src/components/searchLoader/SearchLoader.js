import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'
import './searchLoader.css'

export default function SearchLoader() {
  return (
    <div className='search-loader'>
        <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor = '#f0eded'
      color = '#242323'
    />
    </div>
    
  )
}
