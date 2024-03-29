import React, {useState, useReducer, useEffect} from "react"
//import styles from "./NewProduct.module.css"
import axios from 'axios'
import ProductList from './ProductList'
import ProductForm from './ProductForm'

function NewProduct({prodAddedToggle, setProdAddedToggle}) {
	//const [prodAddedToggle, setProdAddedToggle] = useState(false)
    
	const initialState = {
		title: '',
		price: '',
		description: '',
		instock: false
	}

	
	function reducer(state, action){
		if(action.type === 'reset') return initialState
		else return {...state, [action.type]: action.payload}
	}
	
	const [prod, dispatch] = useReducer(reducer, initialState)
	const [err, setErr] = useState({})
	
	const [prods, setProds] = useState([])

  
	function handleChange(e){
		const {name, value, checked} = e.target
		let payload = value
        if(name=="instock") payload = checked
        dispatch({
			type: name,
			payload: payload
		})
	}

	function handleNewProd(e) {
		e.preventDefault()
		//console.log(prod)
		axios.post('http://localhost:8000/api/product/new', prod)
		.then(res=>{
			console.log(res.status, res.data)
			dispatch({type:'reset'})
			setProdAddedToggle(!prodAddedToggle)
		})
		.catch(function (error) {
			if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			console.log(error.response.data);
			//setErr(error.response.data.errors)
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
	
	function removeFromDom(id){
		//setProds(prods.filter(prod => prod._id !== id))
		let newArr = prods.filter(prod => prod._id != id)
		setProds(newArr)
	}

	useEffect(()=>{
	  axios.get('http://localhost:8000/api/products')
	  .then(res=> {
		console.log(res.data)
		setProds(res.data)
	  })
	  .catch(error => {console.log(error)
		setErr(error.response.data.errors)})
	}, [prodAddedToggle])

	return (<>
		<h1>Product Manager</h1>
		<ProductForm handleSubmit={handleNewProd} handleChange={handleChange} prod={prod} errors={err}/>
		<hr/>
		<ProductList prods={prods} callback={removeFromDom} setProdAddedToggle={setProdAddedToggle}/>
		</>
	)
	//<p>{prod.title} {prod.price} {prod.description}</p>
}
export default NewProduct
		// <form>
		// 	<p>
		// 		<label htmlFor="title" style={{marginRight: "10px"}}>
		// 			Title
		// 		</label>
		// 	<input name="title" value = {prod.title} onChange = {handleChange} type="text" id="title" className={styles.textInput} /><br/>
		// 	</p><p>
		// 		<label htmlFor="price" style={{marginRight: "10px"}}>
		// 		Price
		// 	</label>
		// 	<input name="price" value = {prod.price} onChange = {handleChange} type="text" id="price" className={styles.textInput} /><br/>
		// 	</p><p><label htmlFor="description" style={{marginRight: "10px"}}>
		// 		Description
		// 	</label>
		// 	<input name="description" value = {prod.description} onChange = {handleChange} type="text" id="description" className={styles.textInput} /><br/>
		// 	</p><p><input
		// 		type="submit"
		// 		value="Create"
		// 		onClick={handleNewProd}
		// 		/>
		// 	</p><p>{err}</p>
		// </form>