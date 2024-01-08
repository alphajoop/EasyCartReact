import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Error from './components/Error';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import ProductListPage from './pages/ProductListPage';
import { CartProvider } from './utils/contexts/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
