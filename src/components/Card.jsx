/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Modal } from 'flowbite-react';
import React from 'react';
import { amountGeneration, sizeGeneration } from '../utilities';
const Card = ({
  id,
  suitImage,
  title,
  price,
  info,
  components,
  setComponent,
}) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [amount, setAmount] = React.useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  return (
    <div className="card w-80 carousel-item bg-[#454545] shadow-3xl m-4">
      <figure>
        <img src={suitImage} alt="suit" className="w-full h-96" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end ">
          {/* PIECES CAROUSEL */}
          <button
            className="badge badge-outline "
            onClick={() => setComponent(() => components)}
          >
            pieces
          </button>
          {/* MODAL */}

          <Button
            className=" badge badge-outline"
            onClick={() => setOpenModal(true)}
          >
            More...
          </Button>
          <Modal
            show={openModal}
            size="full"
            onClose={() => setOpenModal(false)}
          >
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
                      htmlFor="amount"
                    >
                      size
                    </label>
                    <select
                      id="amount"
                      className="select select-[#515151] w-3/5 bg-[#e9e6ed] select-md select-bordered"
                      value={amount}
                      onChange={handleAmount}
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
                </div>
              </div>
            </Modal.Body>
          </Modal>
          {/* CART BUTTON */}
        </div>
      </div>
    </div>
  );
};

export default Card;
