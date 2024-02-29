/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import { amountGeneration, sizeGeneration } from '../utilities';
import React from 'react';

const ModalSecondPart = ({ id, suitImage, price, title, info }) => {
  const [amount, setAmount] = React.useState(1);
  const [size, setSize] = React.useState();
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const handleSize = (e) => {
    if (e.target.value === 'choose a size') {
      e.target.value = 'choose a size';
      setSize(e.target.value);
    } else {
      setSize(parseInt(e.target.value));
    }
  };
  const cartProduct = {
    cartID: id + size,
    productID: id + 1,
    image: suitImage,
    title,
    price,
    amount,
    size,
    info,
  };
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <>
      {' '}
      <div className="px-5 flex w-full justify-between items-center mt-8 lg:mt-16">
        <label
          className="label uppercase text-3xl text-[#515151] tracking-wider "
          htmlFor="size"
        >
          size
        </label>
        <select
          id="size"
          className="select select-[#515151] w-3/5 bg-[#e9e6ed] select-md select-bordered"
          value={size}
          onChange={handleSize}
        >
          <option value="choose a size">choose a size</option>
          {sizeGeneration(48)}
        </select>
      </div>
      <div className="px-5 flex w-full justify-between items-center mt-8 lg:mt-16">
        <label
          className="label uppercase text-3xl text-[#515151] tracking-wider "
          htmlFor="amount"
        >
          amount
        </label>
        <select
          id="amount"
          className="select select-[#515151] w-3/5 bg-[#e9e6ed] select-md select-bordered"
          value={amount}
          onChange={handleAmount}
        >
          {amountGeneration(10)}
        </select>
      </div>
      <div className="px-5 flex w-full justify-between items-center mt-8 lg:mt-16">
        <button
          className="btn btn-[#515151] mb-8 w-full bg-[#e9e6ed] upperCase btn-md"
          onClick={addToCart}
          disabled={size === 'choose a size' || !size}
        >
          Add to bag
        </button>
      </div>
    </>
  );
};

export default ModalSecondPart;
