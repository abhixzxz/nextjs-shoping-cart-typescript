// cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

export interface CartData {
  id: string;
  name: string;
  price: number;
  images: string | StaticImageData;
  battery: string;
  camera: string;
  display: string;
  processor: string;
  ram: string;
  rom: string;
  rating: string;
  description: string;
  companyName: string;
}

interface CartState {
  cartDatas: CartData[];
}

const initialState: CartState = {
  cartDatas: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<CartData>) => {
      state.cartDatas.push(action.payload);
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      state.cartDatas = state.cartDatas.filter(item => item.id !== action.payload);
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
