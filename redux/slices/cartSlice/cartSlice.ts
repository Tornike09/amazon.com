import { IProduct } from "@/app/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem extends IProduct {
  qty: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingItem = state.find((item) => item.id === action.payload.id)
      if(existingItem) {
        existingItem.qty += 1
      } else {
        state.push({...action.payload, qty: 1})
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const cartItemId = action.payload
      return state.filter((item) => item.id !== cartItemId)
    },
    incrementQty: (state, action: PayloadAction<number>) => {
      const cartItemId = action.payload
      const existingItem = state.find((item) => item.id === cartItemId)
      if(existingItem) {
        existingItem.qty += 1
      }
    },
    decrementQty: (state, action: PayloadAction<number>) => {
      const cartItemId = action.payload
      const existingItem = state.find((item) => item.id === cartItemId)
      if(existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty} =
  cartSlice.actions;

export default cartSlice.reducer;
{/*const existingItem = state.find((item) => item.id === action.payload.id)
      if(existingItem) {
        existingItem.qty += 1
      } else {
        state.push({ ...action.payload, qty: 1 });
      }*/}
