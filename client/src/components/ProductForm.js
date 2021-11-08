import styles from "./NewProduct.module.css"

function ProductForm({handleSubmit, handleChange, prod, err}){
    return (
        <form>
		 	<p>
		 		<label htmlFor="title" style={{marginRight: "10px"}}>
		 			Title
		 		</label>
		 	<input name="title" value = {prod.title} onChange = {handleChange} type="text" id="title" className={styles.textInput} /><br/>
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
		 		onClick={handleSubmit}
		 		/>
		 	</p><p>{err}</p>
	    </form>
    )
}

export default ProductForm