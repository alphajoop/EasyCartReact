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
      <div className="bg-white p-4">
        <h3 className="font-semibold text-lg md:text-xl">{product.name}</h3>
        <h4 className="font-semibold text-base md:text-lg">
          Price: {CurrencyHelper.formatPrice(product.price, 'USD')}
        </h4>
        <button
          onClick={handleAddToCart}
          className="rounded-md bg-gray-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-800"
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
