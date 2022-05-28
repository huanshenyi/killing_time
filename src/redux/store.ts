import { createStore } from "redux";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import recruitmentReducer from "./recruitmentReducer";
import { myRecruitmentSlice } from "./myRecruitment/slice";
import { alertControlSlice } from "./alertControl/slice";
import { recruitmentItemSlice } from "./recruitmentItem/slice";
import { userSlice } from "./user/slice";
import { recruitmentSlice } from "./recruitment/slice";
import { tagSlice } from "./tag/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  myRecruitment: myRecruitmentSlice.reducer,
  alertControl: alertControlSlice.reducer,
  recruitmentItem: recruitmentItemSlice.reducer,
  user: userSlice.reducer,
  recruitment: recruitmentSlice.reducer,
  tag: tagSlice.reducer,
});

// データ永久化処理
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
  ], //カスタムミドルウェアも追加可能
  devTools: true,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default { store, persistor };
