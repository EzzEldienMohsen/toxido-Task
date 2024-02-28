import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItemsList, CartTotals } from '../components';
import { useGlobalContext } from '../utils';

const Cart = () => {
  var numItemsInCart = useSelector((state) => state.cart.numItemsInCart);
  const { isClicked } = useGlobalContext();

  if (numItemsInCart < 1) {
    return (
      <div className="w-full flex justify-center items-center bg-inherit">
        <div
          className={`w-4/5  flex flex-col justify-center items-center ${
            isClicked ? 'pt-[137px]' : 'pt-[233px]'
          }`}
        >
          <h1 className="mb-4text-black text-2xl font-bold tracking-wide capitalize">
            Please Login
          </h1>
          <h2 className="mb-4 text-xl text-black capitalize">
            Please login to access the cart.
          </h2>
          <button className="manual-button w-3/5 p-4 rounded-md text-xl font-bold tracking-wide">
            Login
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full  flex justify-center items-center bg-inherit">
      <div
        className={`grid w-4/5  mt-8 gap-8 lg:grid-cols-12 ${
          isClicked ? 'pt-[137px]' : 'pt-[233px]'
        }`}
      >
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />

          <Link to="/login" className="btn btn-primary btn-block mt-8">
            Please Login
          </Link>

          {/* <button
            className="btn btn-accent btn-block mt-8"
            onClick={clearTheCart}
          >
            Clear Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
