import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { useFetchData } from './hooks/useFetchData';
import Spinner from './components/Spinner';
import Header from "./components/Header";

function App() {
  const [activeCategory, setActiveCategory] = useState('');
  const { categories, products, loading, error } = useFetchData(activeCategory);
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" && <Header />}
      {location.pathname === "/" && (
        <CategorySelector
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          
      )}

      {error && <div style={{ color: 'red' }}>{error}</div>}
      {loading && <div className="spinner"></div>}

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
    </div>
  );
}

export default App;