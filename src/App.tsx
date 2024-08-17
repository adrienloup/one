import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TransitionPageProvider } from './contexts/Transition';
import HomePage from './pages/Home/Home';
import ProductPage from './pages/Product/Product';
import CollectionPage from './pages/Collection/Collection';
import ShopPage from './pages/Shop/Shop';
import ShoppingCartPage from './pages/ShoppingCart/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <TransitionPageProvider>
        <Routes>
          <Route path="/one" element={<HomePage />} />
          <Route path="/one/*" element={<HomePage />} />
          <Route path="/one/collection/:id" element={<CollectionPage />} />
          <Route path="/one/product/:id" element={<ProductPage />} />
          <Route path="/one/shop" element={<ShopPage />} />
          <Route path="/one/shoppingcart" element={<ShoppingCartPage />} />
        </Routes>
      </TransitionPageProvider>
    </BrowserRouter>
  );
}

export default App;
