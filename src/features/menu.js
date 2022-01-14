import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    value: [
      { id: 1, name: "Takoyaki", price: 300, quantity:0 },
      { id: 2, name: "Okonomiyaki", price: 400, quantity:0 },
      { id: 3, name: "Yakitori", price: 200, quantity:0 },
      { id: 4, name: "Yakisoba", price: 500, quantity:0 },
      { id: 5, name: "Tteokbokki", price: 400, quantity:0 },
      { id: 6, name: "Hotteok", price: 300, quantity:0 },
      { id: 7, name: "Bungeoppang", price: 300, quantity:0 },
      { id: 8, name: "Odeng", price: 100, quantity:0 },
      { id: 9, name: "Baozi", price: 400, quantity:0 },
      { id: 10, name: "Jiaozi", price: 1100, quantity:0 },
      { id: 11, name: "Sichuan Mala", price: 1500, quantity:0},
      { id: 12, name: "Xiaolongbao", price: 800, quantity:0 },
    ],
  },
  reducers: {},
});

export default menuSlice.reducer;
