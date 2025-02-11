import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div className="product-list" data-testid="products-page">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} data-testid="product-link">
          <ProductItem product={product} />
        </Link>
      ))}
    </div>
  );
}

export default ProductList;