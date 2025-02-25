import ProductItem from "./ProductItem";
import '../styles/ProductList.css';

function ProductList({ products = [] }) {
  return (
    <div className="product-list">
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}


export default ProductList;