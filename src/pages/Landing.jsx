import React from 'react';
import { Carousel, SecondaryCarousel } from '../components';
import { autoFetch } from '../utilities';
import { useQuery } from '@tanstack/react-query';
const Landing = () => {
  const [component, setComponent] = React.useState([]);
  console.log(component);
  const {
    data: products,
    status,
    isFetching,
  } = useQuery({
    queryKey: ['all'],
    queryFn: async () => {
      try {
        const response = await autoFetch('/suits.json');

        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return status === 'pending' || isFetching ? (
    <div className="w-full justify-center flex items-center">
      <span className="loading loading-spinner text-primary w-16 h-16"></span>
    </div>
  ) : status === 'error' ? (
    <section className="image-container">
      <h4>There was an error...</h4>
    </section>
  ) : (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="-mt-48 capitalize mb-20 flex flex-col justify-center items-center  text-[#cbcbcb]">
        <h1 className="text-xl my-6 lg:text-4xl">tuxedo</h1>
        <h2 className="text-xl lg:text-3xl">When Elegance Seek Perfection</h2>
      </div>
      <Carousel products={products} setComponent={setComponent} />
      <SecondaryCarousel component={component} />
    </div>
  );
};

export default Landing;
