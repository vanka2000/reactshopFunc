import { createSlice } from "@reduxjs/toolkit";



export const busketCards = createSlice({
    name: 'cards',
    initialState: {value: []},
    reducers: {
        addCard: (state,action) => {
            state.value.push(action.payload)
        }
    }
})

export const {addCard} = busketCards.actions
export default busketCards.reducer