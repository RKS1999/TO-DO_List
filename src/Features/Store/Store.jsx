import { configureStore } from "@reduxjs/toolkit";
import {
  listsReducer,
  addList,
  removeList,
  changeSearchTerm,
  editList, 
} from "../Slice/ListSlice"; 
import { formReducer, changeList } from "../Slice/FormSlice";

const store = configureStore({
  reducer: {
    lists: listsReducer,
    form: formReducer,
  },
});

export {
  store,
  changeList,
  addList,
  removeList,
  changeSearchTerm,
  editList, 
  listsReducer,
};
