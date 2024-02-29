/* eslint-disable react/prop-types */
import Card from './Card';

const Carousel = ({ products, setComponent }) => {
  return (
    <>
      <div className="h-96 carousel carousel-vertical  rounded-box lg:hidden ">
        {products.map((product) => {
          const { suitImage, price, info, id, components, title } = product;
          console.log(price, 'CAROUSEL');
          return (
            <Card
              price={price}
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
          const { suitImage, info, id, components, price, title } = product;
          return (
            <Card
              price={price}
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
