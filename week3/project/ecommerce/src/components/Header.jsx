import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Products</h1>
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Products
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </nav>
    </div>
  );
};

export default Header;
