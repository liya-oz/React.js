import { useState } from 'react';
import { useFetch } from '../hooks/useFetchData';
import Spinner from './Spinner';
import CategorySelector from './CategorySelector';
import ProductList from './ProductList';

function Home() {
  const [activeCategory, setActiveCategory] = useState('');
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetch('https://fakestoreapi.com/products/categories');
  const { data: products, loading: productsLoading, error: productsError } = useFetch(
    activeCategory ? `https://fakestoreapi.com/products/category/${activeCategory}` : 'https://fakestoreapi.com/products'
  );

  return (
    <div>
      {(categoriesError || productsError) && (
        <div style={{ color: 'red' }}>
          {categoriesError || productsError}
        </div>
      )}
      {(categoriesLoading || productsLoading) && <Spinner />}

      <CategorySelector
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <div className="app-header">
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default Home;