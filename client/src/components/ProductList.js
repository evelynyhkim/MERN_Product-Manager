import React, {useState, useReducer} from "react"
import styles from "./NewProduct.module.css"
import axios from 'axios'
import {navigate, Router, Link} from '@reach/router'

function ProductList({prods, handleDelete}) {
    function handleEdit(id){
        navigate(`/${id}/edit`)
    }

    return (
        prods.map((prod, idx)=>(
            <div key={idx}>
                <Link to={`${prod._id}`} id={prod._id}>{prod.title}</Link>
                <button onClick={()=>handleDelete(prod._id)} 
                    style={{marginLeft: "10px", height: "20px", padding: "3px"}}>Delete</button>
                    
                <button onClick={()=>handleEdit(prod._id)} 
                    style={{marginLeft: "10px", height: "20px", padding: "3px"}}>Edit</button>
                    
            </div>
    )))
}
export default ProductList