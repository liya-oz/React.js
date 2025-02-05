import { useState, useEffect } from 'react';
import { fetchCategories, fetchProducts } from '../fetchData';

export function useFetchData(activeCategory) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        setError('Failed to fetch categories.');
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  useEffect(() => {
    if (activeCategory) {
      setLoading(true);
      setError(null);
      async function loadProducts() {
        try {
          const fetchedProducts = await fetchProducts(activeCategory);
          setProducts(fetchedProducts);
        } catch (err) {
          setError('Failed to fetch products.');
        } finally {
          setLoading(false);
        }
      }
      loadProducts();
    }
  }, [activeCategory]);

  return { categories, products, loading, error };
}
