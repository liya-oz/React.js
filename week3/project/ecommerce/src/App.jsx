import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Spinner from './components/Spinner';
import Header from "./components/Header";
import Favorites from "./components/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";
import { useFetch } from './hooks/useFetchData';

function App() {
  const [activeCategory, setActiveCategory] = useState('');
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetch('https://fakestoreapi.com/products/categories');
  const { data: products, loading: productsLoading, error: productsError } = useFetch(activeCategory ? `https://fakestoreapi.com/products/category/${activeCategory}` : 'https://fakestoreapi.com/products');
  const location = useLocation();

  return (
    <FavoritesProvider>
      <div>
        <Header />
        {location.pathname === "/" && (
          <CategorySelector
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        )}

        {(categoriesError || productsError) && <div style={{ color: 'red' }}>{categoriesError || productsError}</div>}
        {(categoriesLoading || productsLoading) && <Spinner />}

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
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </FavoritesProvider>
  );
}

export default App;