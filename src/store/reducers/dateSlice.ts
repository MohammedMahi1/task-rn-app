import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { getWeeks } from "../../utils/getWeeks";

const initialState = {
  selectedDate: dayjs().format("DD-MM-YYYY"),
selectedDay:""
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    selectedDate: (state, action) => {
      state.selectedDate = action.payload.selectedDate;
      state.selectedDay = action.payload.selectedDay;
    }
  },
});


export default dateSlice;
