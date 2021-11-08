import React, {useState, useReducer, useEffect} from "react"
import axios from 'axios'
import { navigate } from "@reach/router"

function OneProduct({id, handleDelete}) {
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
        <button onClick={()=>handleDelete(prod._id)}>Delete</button>
        <button style = {{marginLeft: "10px"}} onClick={()=>navigate(`${prod._id}/edit`)}>Edit</button>
    </>)
}
export default OneProduct