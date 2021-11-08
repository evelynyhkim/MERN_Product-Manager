import React from 'react'
import axios from 'axios'

function DeleteButton({id, callback}){
    function handleDelete(id){
        axios.delete(`http://localhost:8000/api/product/${id}/delete`)
        .then(res=>{
            console.log('delete one')
            callback(id)
        })
        .catch(err=>console.log(err))
    }
    return <button onClick={()=>handleDelete(id)}>Delete</button>
}

export default DeleteButton