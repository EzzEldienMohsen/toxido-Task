import { CartItemsList, CartTotals } from '../components';
import { Link } from 'react-router-dom';
const Cart = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="-mt-32 lg:-mt-48 capitalize mb-16 lg:mb-20 flex flex-col justify-center items-center  text-[#cbcbcb]">
          <h1 className="text-xl my-6 md:text-6xl">cart</h1>
        </div>
        <div className="grid mt-8 gap-8 lg:grid-cols-12 w-full">
          <div className="lg:col-span-8 flex justify-center items-center w-full flex-col lg:flex-row lg:justify-between lg:flex-wrap">
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
    </>
  );
};

export default Cart;
