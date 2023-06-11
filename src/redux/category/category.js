import { createSlice } from "@reduxjs/toolkit";

export const stateShop = createSlice({
    name: 'category',
    initialState: {value : 'json'},
    reducers : {
        SwitchCategory : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {SwitchCategory} = stateShop.actions

export default stateShop.reducer