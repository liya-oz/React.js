import { useEffect, useState } from 'react';
import { useFavorites } from "../context/FavoritesContext";
import ProductItem from "./ProductItem";
import '../styles/Favorites.css';

function Favorites() {
  const { favorites } = useFavorites();
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      setLoading(true);
      try {
        const products = await Promise.all(
          favorites.map(async (id) => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            return response.json();
          })
        );
        setFavoriteProducts(products);
        setError(null);
      } catch (err) {
        setError('Failed to load favorite products.');
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteProducts();
  }, [favorites]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <h2>Favorites</h2>
      {favoriteProducts.length > 0 ? (
        favoriteProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No favorite products yet.</p>
      )}
    </div>
  );
}

export default Favorites;