/* eslint-disable react/prop-types */
import { formatPrice } from '../utilities';
import Card from './Card';

const Carousel = ({ products, setComponent }) => {
  return (
    <>
      <div className="h-96 carousel carousel-vertical  rounded-box lg:hidden ">
        {products.map((product) => {
          const thePrice = formatPrice(product.price);
          const { suitImage, info, id, components, title } = product;
          return (
            <Card
              price={thePrice}
              key={id}
              title={title}
              suitImage={suitImage}
              info={info}
              id={id}
              components={components}
              setComponent={setComponent}
            />
          );
        })}
      </div>
      <div className="lg:carousel w-4/5 carousel-center  p-4 space-x-8 bg-inherit rounded-box hidden">
        {products.map((product) => {
          const thePrice = formatPrice(product.price);
          const { suitImage, info, id, components, title } = product;
          return (
            <Card
              price={thePrice}
              key={id}
              title={title}
              suitImage={suitImage}
              info={info}
              id={id}
              components={components}
              setComponent={setComponent}
            />
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
