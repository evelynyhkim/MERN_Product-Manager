import React from "react"
//import styles from "./NewProduct.module.css"
//import axios from 'axios'
import {navigate, Router, Link} from '@reach/router'
import DeleteButton from "./DeleteButton"

function ProductList({prods, callback}) {
    function handleEdit(id){
        navigate(`/${id}/edit`)
    }

    return (
        prods.map((prod, idx)=>(
            <div key={idx}>
                <Link to={`${prod._id}`} id={prod._id}>{prod.title}</Link>
                    
                    <button onClick={()=>handleEdit(prod._id)} 
                    style={{marginLeft: "10px", height: "20px", padding: "3px"}}>Edit</button>
                    <DeleteButton id={prod._id} callback={callback}/>
                    </div>
    )))
}
export default ProductList
                // <button onClick={()=>handleDelete(prod._id)} 
                // style={{marginLeft: "10px", height: "20px", padding: "3px"}}>Delete</button>