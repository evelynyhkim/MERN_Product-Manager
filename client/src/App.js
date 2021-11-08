import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Router} from '@reach/router'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import OneProduct from './components/OneProduct'
import EditProduct from './components/EditProduct'

function App() {
  return (
    <div className="App">
      <Router>
        <OneProduct path=":id"/>
        <EditProduct path=":id/edit"/>
        <ProductForm path="/"/>
      </Router>
    </div>
  );
}

export default App;
