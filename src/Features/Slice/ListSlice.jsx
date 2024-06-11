import { createSlice, nanoid } from "@reduxjs/toolkit";

const listsSlice = createSlice({
  name: "lists",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addList(state, action) {
      state.data.push({
        list: action.payload.list,
        id: nanoid(),
      });
    },
    removeList(state, action) {
      state.data = state.data.filter((list) => list.id !== action.payload);
    },
    editList(state, action) {
      const { id, newList } = action.payload;
      const existingList = state.data.find((list) => list.id === id);
      if (existingList) {
        existingList.list = newList;
      }
    },
  },
});

export const { changeSearchTerm, addList, removeList, editList } =
  listsSlice.actions;
export const listsReducer = listsSlice.reducer;
