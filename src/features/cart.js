import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], cartCount: 0,total:0 },
  reducers: {
    addToCart: (state, action) => {
      let thisItem = action.payload;

      let existingItem = state.cart.find((item) => item.id === thisItem.id);
      existingItem
        ? (existingItem.quantity += 1)
        : (state.cart = [...state.cart, thisItem]);
      state.cartCount = state.cartCount += 1;
      state.total = state.total += thisItem.price
      console.log(state.cart,state.total);
    },
    removeFromCart: (state, action) => {
      let existingItem = state.cart.find((item) => item.id === action.payload.id);
      let updatedCart = state.cart.filter(item => item.id !== action.payload.id);
      existingItem.quantity > 1
        ? (existingItem.quantity -= 1)
        : (state.cart = updatedCart);
      state.cartCount = state.cartCount -= 1;
      state.total = state.total-=existingItem.price
      console.log(state.cart);
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
