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

export var amountGeneration = (number) => {
  return Array.from({ length: number }, (_, index) => {
    var amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
