import { createSlice } from "@reduxjs/toolkit";
import { addList } from "./ListSlice";

const formSlice = createSlice({
  name: "form", 
  initialState: {
    list: "",
  },
  reducers: {
    changeList(state, action) {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addList, (state) => {
      state.list = ""; 
    });
  },
});

export const { changeList } = formSlice.actions;
export const formReducer = formSlice.reducer;
