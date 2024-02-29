/* eslint-disable react/prop-types */

import { useDispatch } from 'react-redux';
import { formatPrice, amountGeneration } from '../utilities';
import { editItem, removeItem } from '../features/cart/CartSlice';
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { cartID, image, title, price, amount, size, info } = cartItem;
  console.log(info);
  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };
  var handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <div className="card w-[400px] flex flex-col mr-2 mb-2 md:grid my-4 md:grid-cols-2 bg-white shadow-4xl ">
      <figure className="py-2 lg:py-0">
        <img src={image} alt="suit" className="w-full h-[100%]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#767676] text-md mb-4 ">{title}</h2>
        <p className="text-lg font-medium text-[#515151] sm:ml-auto">
          {formatPrice(price)}
        </p>
        {/* <ul className="list-disc uppercase text-2xl text-[#515151]">
          {info.map((li) => {
            return (
              <li key={li} className="mb-4 ml-16">
                {li}
              </li>
            );
          })}
        </ul> */}
        <div className="flex w-full justify-between items-center  text-3xl text-[#515151]">
          <h1>size</h1>
          <h1>{size}</h1>
        </div>
        <div className=" flex w-full justify-between items-center">
          <label
            className="label uppercase text-md text-[#515151] tracking-wider "
            htmlFor="amount"
          >
            amount
          </label>
          <select
            id="amount"
            className="select select-[#515151] text-[#515151]  bg-[#e9e6ed] select-md select-bordered"
            value={amount}
            onChange={handleAmount}
          >
            {amountGeneration(10)}
          </select>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={removeItemFromCart}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
