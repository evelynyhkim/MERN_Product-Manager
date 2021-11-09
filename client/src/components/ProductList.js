import React from "react"
//import styles from "./NewProduct.module.css"
//import axios from 'axios'
import {navigate, Link} from '@reach/router'
import DeleteButton from "./DeleteButton"

function ProductList({prods, callback}) {
    function handleEdit(id){
        navigate(`/${id}/edit`)
    }
    const style = {
        border: "solid black 1px", 
        borderCollapse: "collapse",
        margin: "0 auto"
    }

    return (
        <table style={style}>
        {prods && prods.map((prod, idx)=>(
             <tr key={idx} style={style}>
                <td style={style}><Link to={`${prod._id}`} id={prod._id}>{prod.title}</Link>
                </td>
                <td style={style}><button onClick={()=>handleEdit(prod._id)}>
                    Edit</button>
                <DeleteButton id={prod._id} callback={callback}/>
                </td>
            </tr>               
        ))}
        </table>)
}
export default ProductList
                // <button onClick={()=>handleDelete(prod._id)} 
                // style={{marginLeft: "10px", height: "20px", padding: "3px"}}>Delete</button>