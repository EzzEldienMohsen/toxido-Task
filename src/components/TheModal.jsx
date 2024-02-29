/* eslint-disable react/prop-types */
import React from 'react';
import { Modal } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import { amountGeneration, sizeGeneration } from '../utilities';
const TheModal = ({
  openModal,
  suitImage,
  setOpenModal,
  title,
  info,
  price,
  id,
}) => {
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
    cartID: id,
    productID: id + 1,
    image: suitImage,
    title,
    price,
    amount,
  };
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <Modal show={openModal} size="full" onClose={() => setOpenModal(false)}>
      <Modal.Header>More Information</Modal.Header>
      <Modal.Body>
        <div className="flex flex-col w-full lg:grid lg:grid-cols-2 gap-0 bg-white shadow-2xl  ">
          <img src={suitImage} alt="suit" className="w-full" />
          <div className="flex flex-col justify-start items-start pl-4 pt-10 lg:pt-0 lg:pl-20 ">
            <h1 className="text-4xl text-[#767676] uppercase leading-8">
              {title}
            </h1>
            <h2 className="text-3xl text-[#515151] uppercase leading-4 mt-8 lg:mt-16">
              {price}
            </h2>
            <ul className="mt-8 lg:mt-16 list-disc uppercase text-xl text-[#515151]">
              {info.map((li) => {
                return (
                  <li key={li} className="mb-4 ml-16">
                    {li}
                  </li>
                );
              })}
            </ul>
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
                className="btn btn-[#515151] w-full bg-[#e9e6ed] upperCase btn-md"
                onClick={addToCart}
                disabled={size === 'choose a size' || !size}
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TheModal;
