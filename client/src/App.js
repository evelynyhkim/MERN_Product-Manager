import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {navigate, Router} from '@reach/router'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import OneProduct from './components/OneProduct'
import EditProduct from './components/EditProduct'
import DeleteProduct from './components/DeleteProduct'

function App() {
  
  const [prodAddedToggle, setProdAddedToggle] = useState(false)

  function handleDelete(id){
    axios.delete('http://localhost:8000/api/product/' + id + '/delete')
    .then(res=>{
        console.log('delete one prod')
        setProdAddedToggle(!prodAddedToggle)
        navigate('/')
    })
    .catch(err=>console.log(err))
//    return <DeleteProduct id={id}/>
}
  return (
    <div className="App">
      <Router>
        <OneProduct path=":id" handleDelete={handleDelete}/>
        <EditProduct path=":id/edit" handleDelete={handleDelete}/>
        <ProductForm path="/" handleDelete={handleDelete} prodAddedToggle={prodAddedToggle} setProdAddedToggle={setProdAddedToggle}/>
      </Router>
    </div>
  );
}
//<DeleteProduct path=":id/delete"/>

export default App;
