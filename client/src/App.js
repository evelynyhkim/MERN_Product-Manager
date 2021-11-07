import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProductForm from './components/ProductForm'

function App() {
  const serverUrl = 'http://localhost:8000'


  useEffect(()=>{
    axios.get(serverUrl + '/api/products')
    .then(res=> {
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <ProductForm/>
    </div>
  );
}

export default App;