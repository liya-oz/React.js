import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";
import { useFavorites } from "../context/FavoritesContext";

function ProductItem({ product }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(product.id);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <button className="favorite-button" onClick={() => toggleFavorite(product.id)}>
        <img src={isFavorite ? heartSolid : heartRegular} alt="Favorite" />
      </button>
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="category">{product.category}</p>
    </div>
  );
}

export default ProductItem;