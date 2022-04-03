import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../http/request";
import { postMyRecruitmentApi, PostMyRecruitmentItem } from "../../http/api";

const thisMonth = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
};

interface MyRecruitmentState {
  loading: boolean;
  error: string | null;
  data: any; //応募、もしくは募集したイベントデータ
}

const initialState: MyRecruitmentState = {
  loading: true,
  error: null,
  data: null,
};

export const getMyRecruitment = createAsyncThunk(
  "myRecruitment/getMyRecruitment",
  async (userId: number, thunkAPI) => {
    const { data } = await axios.get(`/myRecruitment`);
    return data;
    // const {data} = await axios.get(`url/userId`);
    // return data
  }
);

// 募集追加のReducers
export const postMyRecruitment = createAsyncThunk(
  "myRecruitment/postMyRecruitment",
  async (recruitmentItem: PostMyRecruitmentItem, thunkAPI) => {
    const { data } = await postMyRecruitmentApi(recruitmentItem);
    return data;
  }
);

export const myRecruitmentSlice = createSlice({
  name: "myRecruitment",
  initialState,
  reducers: {},
  extraReducers: {
    [getMyRecruitment.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [getMyRecruitment.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getMyRecruitment.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    [postMyRecruitment.pending.type]: (state) => {},
    [postMyRecruitment.fulfilled.type]: (state, action) => {
      state.data = [...state.data, action.payload];
      state.error = null;
    },
    [postMyRecruitment.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.error = action.payload;
    },
  },
});
