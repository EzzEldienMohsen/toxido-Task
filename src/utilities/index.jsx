import axios from 'axios';
var url = '/api';
export var autoFetch = axios.create({
  baseURL: url,
});

export var formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-EG', {
    style: 'currency',
    currency: 'EGP',
  }).format(price / 1);
  return dollarsAmount;
};

export const amountGeneration = (number) => {
  return Array.from({ length: number }, (_, index) => {
    var amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
export const sizeGeneration = (number) => {
  return Array.from({ length: 12 }, (_, index) => {
    var amount = number + index;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
