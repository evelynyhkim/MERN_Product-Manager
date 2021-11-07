//import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [msg, setMsg] = useState("hey")

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
    .then(res=> {
      console.log('api/products')
      setMsg(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      Product manager {msg}
    </div>
  );
}

export default App;