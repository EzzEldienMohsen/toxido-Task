/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const SecondaryCard = ({ image, title, price }) => {
  return (
    <div className="card carousel-item w-80 bg-[#454545] shadow-3xl m-4">
      <figure>
        <img src={image} alt="Shoes" className="w-full h-96" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default SecondaryCard;
