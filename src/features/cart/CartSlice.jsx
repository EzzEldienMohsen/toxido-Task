import { createSlice } from '@reduxjs/toolkit';

var getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState;
};
const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
var cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      var { product } = action.payload;
      var items = state.cartItems.find((i) => i.cartID === product.cartID);
      if (items) {
        items.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
    },
    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      var { cartID } = action.payload;
      var removedProduct = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
      state.numItemsInCart -= removedProduct.amount;
      state.cartTotal -= removedProduct.price * removedProduct.amount;
      cartSlice.caseReducers.calculateTotals(state);
    },
    editItem: (state, action) => {
      var { cartID, amount } = action.payload;
      var item = state.cartItems.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
    },
    calculateTotals: (state) => {
      state.tax = 0;
      state.tax += 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export var { addItem, removeItem, clearCart, editItem } = cartSlice.actions;

export default cartSlice.reducer;
