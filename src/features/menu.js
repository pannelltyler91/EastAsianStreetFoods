import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    value: [
      { id: 13, name: "Takoyaki", price: 3, quantity:0 },
      { id: 14, name: "Okonomiyaki", price: 4, quantity:0 },
      { id: 15, name: "Yakitori", price: 2, quantity:0 },
      { id: 16, name: "Yakisoba", price: 5, quantity:0 },
      { id: 17, name: "Tteokbokki", price: 4, quantity:0 },
      { id: 18, name: "Hotteok", price: 3, quantity:0 },
      { id: 19, name: "Bungeoppang", price: 3, quantity:0 },
      { id: 20, name: "Odeng", price: 1, quantity:0 },
      { id: 21, name: "Baozi", price: 4, quantity:0 },
      { id: 22, name: "Jiaozi", price: 11, quantity:0 },
      { id: 23, name: "Sichuan Mala", price: 15, quantity:0},
      { id: 24, name: "Xiaolongbao", price: 8, quantity:0 },
    ],
  },
  reducers: {},
});

export default menuSlice.reducer;
