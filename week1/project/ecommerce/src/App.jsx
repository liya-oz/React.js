import { useState } from "react";
import categories from "./fake-data/all-categories";
import products from "./fake-data/all-products";
import "./App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategorySelection = (category) => {
    const cleanedCategory = category.replace("FAKE: ", "").trim();
    setActiveCategory(cleanedCategory);
  };
  
  const filteredProducts = activeCategory
    ? products.filter((product) => {
        const productCategory = product.category.toLowerCase().trim();
        const selectedCategory = activeCategory.toLowerCase().trim();
        return productCategory === selectedCategory;
      })
    : products;

  return (
    <div id="root">
      <h1>Ecommerce App</h1>

      <div className="category-buttons">
        <button
          className={`category-button ${activeCategory === null ? "active-category" : ""}`}
          onClick={() => setActiveCategory(null)}
        >
          Show All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? "active-category" : ""}`}
            onClick={() => handleCategorySelection(category)}
          >
            {category.replace("FAKE: ", "")}
          </button>
        ))}
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
