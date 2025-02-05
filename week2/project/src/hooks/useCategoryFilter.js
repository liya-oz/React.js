import { useState } from 'react';
import { cleanCategory, filterProductsByCategory } from '../utility';

export function useCategoryFilter(products) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategorySelection = (category) => {
    setActiveCategory(cleanCategory(category));
  };

  const filteredProducts = filterProductsByCategory(products, activeCategory);

  return { activeCategory, handleCategorySelection, filteredProducts };
}
