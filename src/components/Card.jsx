/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from 'flowbite-react';
import React from 'react';
import TheModal from './TheModal';
import { formatPrice } from '../utilities';
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
  return (
    <div className="card w-80 carousel-item bg-[#454545] shadow-3xl m-4">
      <figure>
        <img src={suitImage} alt="suit" className="w-full h-96" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{formatPrice(price)}</p>
        <div className="card-actions justify-end ">
          {/* PIECES CAROUSEL */}
          <Button
            className="badge badge-outline "
            onClick={() => setComponent(() => components)}
          >
            pieces
          </Button>
          {/* MODAL */}

          <Button
            className=" badge badge-outline"
            onClick={() => setOpenModal(true)}
          >
            More...
          </Button>
          <TheModal
            suitImage={suitImage}
            openModal={openModal}
            setOpenModal={setOpenModal}
            info={info}
            title={title}
            price={price}
            id={id}
          />
          {/* CART BUTTON */}
        </div>
      </div>
    </div>
  );
};

export default Card;
