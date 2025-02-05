import categories from "./fake-data/all-categories";
import products from "./fake-data/all-products";
import { useCategoryFilter } from "./hooks/useCategoryFilter";
import CategorySelector from "./components/CategorySelector";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const { activeCategory, handleCategorySelection, filteredProducts } = useCategoryFilter(products);

  return (
    <>
      <h1>Products</h1>
      <CategorySelector 
        categories={categories} 
        activeCategory={activeCategory} 
        onSelectCategory={handleCategorySelection} 
      />
      <ProductList products={filteredProducts} />
    </>
  );
}

export default App;
