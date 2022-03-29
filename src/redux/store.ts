import { createStore } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import recruitmentReducer from "./recruitmentReducer";
import { myRecruitmentSlice } from "./myRecruitment/slice";

const rootReducer = combineReducers({
  myRecruitment: myRecruitmentSlice.reducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
