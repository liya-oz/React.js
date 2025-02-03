// Normalize category names by removing 'FAKE:' prefix and trimming extra spaces
export function cleanCategory(category) {
  if (!category) return '';
  return category
    .replace('FAKE: ', '')
    .trim()
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
}
export function filterProductsByCategory(products, activeCategory) {
  if (!activeCategory) return products;

  const selectedCategory = cleanCategory(activeCategory);
  return products.filter(
    (product) => cleanCategory(product.category) === selectedCategory,
  );
}
