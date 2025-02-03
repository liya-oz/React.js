function ProductItem({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductItem;
