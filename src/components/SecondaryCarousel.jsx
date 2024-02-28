/* eslint-disable react/prop-types */

import { formatPrice } from '../utilities';
import SecondaryCard from './SecondaryCard';

const SecondaryCarousel = ({ component }) => {
  return (
    <>
      <div className="h-96 carousel mt-5  carousel-vertical  rounded-box lg:hidden ">
        {component.map((product, index) => {
          const thePrice = formatPrice(product.price);
          const { image, id, title } = product;
          return (
            <SecondaryCard
              price={thePrice}
              key={(id + index) * 1.3}
              title={title}
              image={image}
            />
          );
        })}
      </div>
      <div className="lg:carousel carousel-center w-4/5 p-4 space-x-8 bg-inherit rounded-box hidden">
        {component.map((product, index) => {
          const thePrice = formatPrice(product.price);
          const { image, id, title } = product;
          return (
            <SecondaryCard
              price={thePrice}
              key={(id + index) * 1.3}
              title={title}
              image={image}
            />
          );
        })}
      </div>
    </>
  );
};

export default SecondaryCarousel;
