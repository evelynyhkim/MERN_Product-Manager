import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Router} from '@reach/router'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import OneProduct from './components/OneProduct'

function App() {
  const serverUrl = 'http://localhost:8000'


  return (
    <div className="App">
      <Router>
        <OneProduct path="/:id"/>
        <ProductForm path="/"/>
      </Router>
    </div>
  );
}

export default App;
