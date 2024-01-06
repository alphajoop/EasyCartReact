import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../utils/contexts/CartContext';

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="bg-white dark:bg-gray-950 shadow-sm py-4 px-6">
      <div className="flex items-center justify-between">
        <Link to={'/'}>
          <h1 className="text-2xl font-bold">Ndarboutik</h1>
        </Link>
        <div className="flex items-center">
          <Link className="flex items-center" to={'cart'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-gray-600 dark:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293-.511a1 1 0 01-.24-1.961L7 10m0 3h10a1 1 0 100-2H7a1 1 0 100 2zm0 5a1 1 0 100-2h10a1 1 0 100 2H7z"
              ></path>
            </svg>
            <span className="ml-2 text-lg">{cart.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
