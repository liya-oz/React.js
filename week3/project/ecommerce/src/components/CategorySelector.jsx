import { cleanCategory } from "../utility";
import '../styles/CategorySelector.css';

function CategorySelector({ categories = [], activeCategory, onSelectCategory }) {
  return (
    <div className="category-buttons">
      <button
        className={`category-button ${activeCategory === null ? "active-category" : ""}`}
        onClick={() => onSelectCategory(null)}
      >
        Show All
      </button>
      {categories?.map((category) => (
        <button
          key={category}
          className={`category-button ${activeCategory === category ? "active-category" : ""}`}
          onClick={() => onSelectCategory(category)}
        >
          {cleanCategory(category)}
        </button>
      ))}
    </div>
  );
}

export default CategorySelector;
