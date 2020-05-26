import { atom } from 'recoil';


export const cart = atom({
  key: 'cart',
  default: [
    { id: 'apple', price: 2, qty: 4 },
    { id: 'pear', price: 5, qty: 2}
  ]
});
