import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CategorySelector from './components/CategorySelector';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    const url = activeCategory
      ? `https://fakestoreapi.com/products/category/${activeCategory}`
      : 'https://fakestoreapi.com/products';

    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [activeCategory]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Router>
      <div>
        <h1>Products</h1>

        {loading && <div className="spinner"></div>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading && (
          <>
            <CategorySelector
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <div className="app-header">
                    <ProductList products={products} />
                  </div>
                }
              />
              <Route
                path="/product/:id"
                element={<ProductDetail />}
              />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;