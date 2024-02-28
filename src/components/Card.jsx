/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from 'flowbite-react';
const Card = ({
  id,
  suitImage,
  title,
  price,
  info,
  components,
  setComponent,
}) => {
  return (
    <div className="card w-80 carousel-item bg-[#454545] shadow-3xl m-4">
      <figure>
        <img src={suitImage} alt="Shoes" className="w-full h-96" />
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

          <Button className=" badge badge-outline">Click me</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
