import React, {useEffect, useState} from 'react'; 
import axios from 'axios';

import List from './components/List';
import  { Routes,Route, Navigate, NavLink } from 'react-router-dom'
import Item from './pages/Item'
import Add from './pages/Add'

// import { userLogin } from './hooks/userLogin.js';
import logo from './logo.svg';
import './App.css';
import ListPage from './pages/ListPage';
import Navbar from './components/Navbar';

function App() {
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
    <div className="App">
      


      {/* <div className='App-content'>
        {
          data.map((item, index) => {
            return <List key={index} item={item} />
          })
        }
      </div> */}

      <Routes>
        <Route path='/' element = {<ListPage/>}/>
        <Route path='/pages/item' element={<Item />} />
        <Route path='/pages/add' element = {<Add/>} />
      </Routes>
      
      {/* footer */}
      <div className='App-footer'>
        <div className='App-footer-content'>
          <span className='App-footer-content-1'></span>
          <span className='App-footer-content-2'></span>
          
          <span className='App-footer-content-3'><a href='/pages/item'>{<item />}</a></span>
          <span className='App-footer-content-4'></span>
          <span className='App-footer-content-5'></span>
        </div>
      </div>
    </div>
  );
}

export default App;
