export async function fetchCategories() {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (err) {
    console.error('Failed to fetch categories:', err);
    throw new Error(err.message || 'An unexpected error occurred while fetching categories.');
  }
}

export async function fetchProducts(category = '') {
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : 'https://fakestoreapi.com/products';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (err) {
    console.error('Failed to fetch products:', err);
    throw new Error(err.message || 'An unexpected error occurred while fetching products.');
  }
}

export async function fetchProductById(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (err) {
    console.error('Failed to fetch product by ID:', err);
    throw new Error(err.message || 'An unexpected error occurred while fetching product details.');
  }
}
