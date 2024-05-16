import { updateProduct } from "../../../../../lib/actions";
import { fetchProduct } from "../../../../../lib/data";
import styles from "../../../appComponents/Dashboard/Products/SingleProduct/SingleProduct.module.css"
import Image from "next/image";

async function ProductPage({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            rows="8"
            placeholder={product.description}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default ProductPage
