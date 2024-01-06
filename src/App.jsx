import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
          <Route
            path="*"
            element={
              <h1 className="text-5xl font-bold flex items-center justify-center">Error 404</h1>
            }
          />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
