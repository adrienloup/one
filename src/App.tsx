import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import ProductPage from './pages/Product/Product';
import ShopPage from './pages/Shop/Shop';
import ShoppingCartPage from './pages/ShoppingCart/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/one" element={<HomePage />} />
        <Route path="/one/*" element={<HomePage />} />
        <Route path="/one/product/:id" element={<ProductPage />} />
        <Route path="/one/shop" element={<ShopPage />} />
        <Route path="/one/shoppingcart" element={<ShoppingCartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
