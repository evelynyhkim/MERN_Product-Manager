import React, {useState, useReducer} from "react"
import styles from "./ProductForm.module.css"
import axios from 'axios'
import {Router, Link} from '@reach/router'

function ProductList({prods}) {
    return (
        prods.map((prod, idx)=>(
            <p><Link to={`${prod._id}`} key={idx} id={prod._id}>{prod.title}</Link></p>
    )))
}
export default ProductList