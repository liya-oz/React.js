import { useState, useEffect } from 'react';
import { fetchProducts } from '../fetchData';

export function useCategoryFilter() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      setError(null);

      try {
        const fetchedProducts = await fetchProducts(activeCategory);
        setProducts(fetchedProducts);
      } catch (err) {
        setError('Oops! Failed to upload products.');
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [activeCategory]);

  return { activeCategory, setActiveCategory, products, loading, error };
}
