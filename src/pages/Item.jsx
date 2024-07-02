import React from 'react'
import './item.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import Navbar from '../components/Navbar';


const Item = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const res = axios.get("https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a");
    res.then(response => {
      console.log(response.data);
      setData(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, [])
  return (
    <div className='list'>
        <Navbar />
        <div className='list-item'>
            {/* <div className='list-item-cotent'> */}
                {
                    data.map((item, index) => {
                        return (
                            <ItemList key={index} item={item} />
                        )
                    })
                }
            {/* </div> */}
        </div>
    </div>
  )
}

export default Item
