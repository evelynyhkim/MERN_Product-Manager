import './App.css';
import React, {useState} from 'react'
//import axios from 'axios'
import {navigate, Router} from '@reach/router'
import NewProduct from './components/NewProduct'
import OneProduct from './components/OneProduct'
import EditProduct from './components/EditProduct'

function App() {
  
  const [prodAddedToggle, setProdAddedToggle] = useState(false)
  const [prods, setProds] = useState([])

  // function handleDelete(id){
  //   axios.delete('http://localhost:8000/api/product/' + id + '/delete')
  //   .then(res=>{
  //       console.log('delete one prod')
  //       //setProdAddedToggle(!prodAddedToggle)
  //       //navigate('/')
        
  //       setProds(prods.filter(prod => prod._id !== id))
  //   })
  //   .catch(err=>console.log(err))
//    return <DeleteProduct id={id}/>
  return (
    <div className="App">
      <Router>
        <OneProduct path=":id" callback={()=>navigate('/')}/>
        <EditProduct path=":id/edit" />
        <NewProduct path="/" prods={prods} setProds={setProds} prodAddedToggle={prodAddedToggle} setProdAddedToggle={setProdAddedToggle}/>
      </Router>
    </div>
  );
}
//<DeleteProduct path=":id/delete"/>

export default App;
