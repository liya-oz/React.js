import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetchData';
import '../styles/ProductDetail.css';
import Spinner from './Spinner';

function ProductDetail() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <Spinner />;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div className="product-detail" data-testid="product-details-page">
      {product && (
        <div>
          <div className="product-detail-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-detail-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <p className="category">{product.category}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;