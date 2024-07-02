import React from 'react'
import './item.css';

const ItemList = ({key, item}) => {
  return (
    
      <div className='item-content'>
          <img src={item.image_url} alt='img' />
          <div className='details'>
              <h5>{item.item}</h5>
              <p>MRP: ₹{item.price}</p>
          </div>
            {/* <p>{item.item}</p> */}
        </div>
    
  )
}

export default ItemList
