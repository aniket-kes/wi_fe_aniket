import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <div>
      <div className="App-header"> 
        <div className='App-logo-section'>
          <div className="App-logo">
            <p>Explore</p>
            <button>Filter</button>
          </div>
          <div className='App-search'>
            <input type='text' placeholder='Search' />
            {/* <button>Search</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
