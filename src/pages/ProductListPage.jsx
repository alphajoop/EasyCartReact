import { useContext } from 'react';
import ProductList from '../components/ProductList';
import { CartContext } from '../utils/contexts/CartContext';
import useProducts from '../utils/hooks/useProducts';

const ProductListPage = () => {
  const { addToCart } = useContext(CartContext);
  const { products, loading, error } = useProducts();

  return loading ? (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black"></div>
      <p className="ml-2 text-black">Loading...</p>
    </div>
  ) : error ? (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
      <p className="font-bold">Error</p>
      <p>{error.message}</p>
    </div>
  ) : (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">
      <ProductList products={products} onAddToCart={addToCart} />
    </section>
  );
};

export default ProductListPage;
