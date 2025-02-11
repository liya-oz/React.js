import { cleanTitle } from "../utility";

function ProductItem({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <h3>{cleanTitle(product.title)}</h3>
      <p className="price">${product.price}</p>
      <p className="category">{product.category}</p>
    </div>
  );
}

export default ProductItem;
