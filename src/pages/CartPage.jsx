import Cart from '../components/Cart';

const CartPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <Cart />
    </div>
  );
};

export default CartPage;
