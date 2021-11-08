import React, {useState, useReducer, useEffect} from "react"
import styles from "./ProductForm.module.css"
import axios from 'axios'

    
function EditProduct({id}) {
    
	const initialState = {
		title: '',
		price: '',
		description: ''
	}
	
	function reducer(state, action){
		if(action.type == 'reset') return initialState
        else if(action.type == 'currentProd') return currentProd
		else return {...state, [action.type]: action.payload}
	}
    const [currentProd, setCurrentProd] = useState(initialState)
    
    const [prod, dispatch] = useReducer(reducer, initialState)
	const [err, setErr] = useState("")

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' + id)
        .then(res=>{
            console.log('got one prod')
            setCurrentProd(res.data)
            dispatch({type: "currentProd"})
        })
        .catch(err=>console.log(err))
    }, [])

	function handleChange(e){
		const {name, value} = e.target
		dispatch({
			type: name,
			payload: value
		})
	}
	function handleEditProd(e) {
		e.preventDefault()
		//console.log(prod)
		axios.put('http://localhost:8000/api/product/' + prod._id + '/edit', prod)
		.then(res=>{
			console.log(res.data)
			dispatch({type:'reset'})
		})
		.catch(function (error) {
			if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			console.log(error.response.data);
			console.log(error.response.status);
			console.log(error.response.headers);
			} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			console.log(error.request);
			} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error', error.message);
			}
		})
	}
	return (
		<form>
			<h1>Edit Product</h1>
			<p>
				<label htmlFor="title" style={{marginRight: "10px"}}>
					Title
				</label>
			<input placeholder="tempTitle" name="title" value = {prod.title} onChange = {handleChange} type="text" id="title" className={styles.textInput} /><br/>
			</p><p>
				<label htmlFor="price" style={{marginRight: "10px"}}>
				Price
			</label>
			<input name="price" value = {prod.price} onChange = {handleChange} type="text" id="price" className={styles.textInput} /><br/>
			</p><p><label htmlFor="description" style={{marginRight: "10px"}}>
				Description
			</label>
			<input name="description" value = {prod.description} onChange = {handleChange} type="text" id="description" className={styles.textInput} /><br/>
			</p><p><input
				type="submit"
				value="Submit"
				onClick={handleEditProd}
				/>
			</p><p>{err}</p>
		</form>
	)
}

export default EditProduct