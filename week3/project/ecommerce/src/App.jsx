import { Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Favorites from './components/Favorites';
import { FavoritesProvider } from './context/FavoritesContext';
import Home from './components/Home';

function App() {
  return (
    <FavoritesProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </FavoritesProvider>
  );
}

export default App;