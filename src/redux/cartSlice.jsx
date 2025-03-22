import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity++;
        toast.info('Item quantity increased');
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        // toast.success('Item added to cart');
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity++;
        toast.info('Item quantity increased');
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        toast.info('Item quantity decreased');
      } else {
        state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        toast.error('Item removed from cart');
      }
    },
    calculateTotals: (state) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity;
        quantity += item.quantity;
      });
      state.totalAmount = total;
      state.totalQuantity = quantity;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;