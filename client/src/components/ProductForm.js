import React, {useReducer} from "react"
import styles from "./ProductForm.module.css"

const initialState = {
	title: '',
	price: '',
	description: ''
}
function reducer(state, action){
	return {...state, [action.type]: action.payload}
}

function ProductForm() {
	const [prod, dispatch] = useReducer(reducer, initialState)
  
	function handleChange(e){
		const {name, value} = e.target
		dispatch({
			type: name,
			payload: value
		})
	}
	function handleNewProd(e) {
	  e.preventDefault()
	  //console.log(prod)
	  //axios.post('')
	}
	return (
		<form>
			<label htmlFor="title" style={{marginRight: "10px"}}>
				Title
			</label>
			<input name="title" value = {prod.title} onChange = {handleChange} type="text" id="title" className={styles.textInput} /><br/>
			<label htmlFor="price" style={{marginRight: "10px"}}>
				Price
			</label>
			<input name="price" value = {prod.price} onChange = {handleChange} type="text" id="price" className={styles.textInput} /><br/>
			<label htmlFor="description" style={{marginRight: "10px"}}>
				Description
			</label>
			<input name="description" value = {prod.description} onChange = {handleChange} type="text" id="description" className={styles.textInput} /><br/>
			<input
				type="submit"
				value="Create"
				onClick={handleNewProd}
			/>
			<p>{prod.title} {prod.price} {prod.description}</p>
		</form>
	)
}
export default ProductForm