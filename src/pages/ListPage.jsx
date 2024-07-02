import React from 'react'
import List from '../components/List'
import '../App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const ListPage = () => {
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
      <div>
        <Navbar />
      <div className='App-content'>
        {
          data.map((item, index) => {
            return <List key={index} item={item} />
          })
        }
        {/* <List /> */}
      </div>
    </div>
  )
}

export default ListPage
