import { addProduct } from "../../../../../lib/actions";
import styles from "../../../appComponents/Dashboard/Products/AddProduct/AddProduct.module.css"
function AddProductPage() {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <textarea
          required
          name="description"
          id="description"
          rows="8"
          placeholder="Description"
        ></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProductPage
