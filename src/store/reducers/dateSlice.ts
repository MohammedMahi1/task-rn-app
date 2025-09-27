import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedDate: new Date().getDay(),
    week:{
        1:"Mon",
        2:"Tue",
        3:"Wed",
        4:"Thu",
        5:"Fri",
        6:"Sat",
        7:"Sun",
    }
}

const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        getWeek:(state) => {
            console.log(state.week[state.selectedDate]);
            
        },
    }
})


export const { getWeek } = dateSlice.actions

export default dateSlice