import React, {useState, useReducer, useEffect} from "react"
import styles from "./ProductForm.module.css"
import axios from 'axios'
import {navigate} from '@reach/router'

function DeleteProduct({id}) {
    useEffect(()=>{
        axios.delete('http://localhost:8000/api/product/' + id + '/delete')
        .then(res=>{
            console.log('delete one prod')
            navigate('/')
        })
        .catch(err=>console.log(err))
    }, [])
    return (<>
        <h2>Product deleted</h2>
    </>)
}
export default DeleteProduct