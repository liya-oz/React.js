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
    <div data-testid="product-details-page">
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <img src={product?.image} alt={product?.title} />
    </div>
  );
}

export default ProductDetail;
