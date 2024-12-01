import { createSlice } from "@reduxjs/toolkit";
const initialState: string = 'Georgia'
const countrySlice = createSlice ({
    name: 'country',
    initialState,
    reducers: {
        changeCountry: (state, action) => {
            return action.payload
        }
    }
})
export const {changeCountry} = countrySlice.actions
export default countrySlice.reducer