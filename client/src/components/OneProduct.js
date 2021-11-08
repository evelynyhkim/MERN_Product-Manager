import React, {useState, useReducer, useEffect} from "react"
import styles from "./ProductForm.module.css"
import axios from 'axios'

function OneProduct({id}) {
    const [prod, setProd] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' + id)
        .then(res=>{
            console.log('got one prod')
            setProd(res.data)
        })
        .catch(err=>console.log(err))
    }, [])
    return (<>
        <h2>{prod.title}</h2>
        <p>Price: ${prod.price}</p>
        <p>Description: {prod.description}</p>
    </>)
}
export default OneProduct