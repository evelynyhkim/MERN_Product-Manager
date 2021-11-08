import React, {useState, useReducer} from "react"
import styles from "./ProductForm.module.css"
import axios from 'axios'
import {navigate, Router, Link} from '@reach/router'
import DeleteProduct from './DeleteProduct'

function ProductList({prods, handleDelete}) {

    return (
        prods.map((prod, idx)=>(
            <div key={idx}>
                <Link to={`${prod._id}`} id={prod._id}>{prod.title}</Link>
                <button onClick={()=>handleDelete(prod._id)} 
                    style={{marginLeft: "10px", height: "20px", padding: "3px"}}>Delete</button>
            </div>
    )))
}
export default ProductList