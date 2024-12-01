import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "/";
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
        return action.payload
      },
  },
});
export const { changeCategory } = filterSlice.actions;

export default filterSlice.reducer;
