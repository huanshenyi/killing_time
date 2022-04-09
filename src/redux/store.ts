import { createStore } from "redux";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import recruitmentReducer from "./recruitmentReducer";
import { myRecruitmentSlice } from "./myRecruitment/slice";
import { alertControlSlice } from "./alertControl/slice";

const rootReducer = combineReducers({
  myRecruitment: myRecruitmentSlice.reducer,
  alertControl: alertControlSlice.reducer,
});

// const store = createStore(rootReducer);
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()], //カスタムミドルウェアも追加可能
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
