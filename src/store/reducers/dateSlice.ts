import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedDate: new Date().getDay(),
    week:{
        1:'Monday',
        2:'Tueday',
        3:'Wednesday',
        4:'Thursday',
        5:'Friday',
        6:'Saturday',
        0:'Sunday',
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