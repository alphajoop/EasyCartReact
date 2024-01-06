import PropTypes from 'prop-types';
import CurrencyHelper from '../utils/helpers/currencyHelpers';

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
    console.log('Product added to cart:', product);
  };

  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img
        src={product.cover}
        alt="Product 1"
        width="300"
        height="300"
        className="object-cover w-full h-60"
        style={{ aspectRatio: 300 / 300, objectFit: 'cover' }}
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="font-semibold text-lg md:text-xl">{product.name}</h3>
        <h4 className="font-semibold text-base md:text-lg">
          Price: {CurrencyHelper.formatPrice(product.price, 'USD')}
        </h4>
        <button
          onClick={handleAddToCart}
          className="bg-gray-950 text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Product;
