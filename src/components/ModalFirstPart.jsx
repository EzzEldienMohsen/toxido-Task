/* eslint-disable react/prop-types */

const ModalFirstPart = ({ title, price, info }) => {
  return (
    <>
      <h1 className="text-4xl text-[#767676] uppercase leading-8">{title}</h1>
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
    </>
  );
};

export default ModalFirstPart;
