import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Fetching product ${id}`);
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Product data:', data);
        setProduct(data);
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-detail" data-testid="product-details-page">
      <div className="product-detail-image">
        <img src={product?.image} alt={product?.title} />
      </div>
      <div className="product-detail-info">
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p className="price">${product?.price}</p>
        <p className="category">{product?.category}</p>
      </div>
    </div>
  );
}

export default ProductDetail;