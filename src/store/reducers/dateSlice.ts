import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedDate: new Date()
}

const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        getWeek:(state) => {
            console.log(state);
            
        },
    }
})


export const { getWeek } = dateSlice.actions

export default dateSlice