import React from 'react'
import '../App.css'
import './add.css'
// import CDropdown

const Add = () => {
  return (
    <div className='add'>
        <div className="App-header"> 
        <div className='App-logo-section'>
          <div className="App-logo">
            <p>Add Item</p>
            <button>Add</button>
          </div>
          <div className='App-search'>
            {/* <input type='text' placeholder='Search' /> */}
            {/* <button>Search</button> */}
          </div>
        </div>
      </div>
        <div className='add-form'>
            <div className='add-form-content'>
                <input type="text" placeholder='Item Name' />
                <input type="text" placeholder='Item Price' />
                <input type="text" placeholder='Shopping Method' />
                <button className='form-btn'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Add
