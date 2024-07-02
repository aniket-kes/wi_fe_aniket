import React from 'react'
import './list.css';

const List = ({key, item}) => {
    
  console.log(item);
  return (
    <div className='list-item'>
        <div className='list-item-content'>
            <img src={item.image_url} alt='img' />
            <div className='details'>
                <h5>{item.item}</h5>
                <p>MRP: ₹{item.price}</p>
            </div>
            {/* <p>{item.item}</p> */}
        </div>
    </div>
  )
}

export default List
