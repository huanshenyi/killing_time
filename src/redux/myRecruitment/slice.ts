import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../http/request";
import {
  postMyRecruitmentApi,
  PostMyRecruitmentItem,
  deleteMyRecruitmentApi,
  putMyRecruitmentApi,
} from "../../http/api";
import { recruitmentColor, freeTimeColor, applicationColor } from "@/utils";

import { RecruitmentItemContext } from "@/redux/recruitmentItem/slice";

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
  data: any; //応募、もしくは募集したイベントデータ、もしくは暇な時間
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
    data.filter((item: any) => {
      if (item.type === "freeTime") {
        item["color"] = freeTimeColor;
      } else if (item.type === "recruitment") {
        item["color"] = recruitmentColor;
      } else if (item.type === "application") {
        item["color"] = applicationColor;
      }
    });
    return data;
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

// 募集削除のReducers
export const deleteMyRecruitment = createAsyncThunk(
  "myRecruitment/deleteMyRecruitment",
  async (recruitmentItemId: number, thunkAPI) => {
    const { data } = await deleteMyRecruitmentApi(recruitmentItemId);
    return data;
  }
);

// 募集修正のReducers
export const putMyRecruitment = createAsyncThunk(
  "myRecruitment/putMyRecruitment",
  async (recruitmentItem: RecruitmentItemContext, thunkAPI) => {
    const { data } = await putMyRecruitmentApi(recruitmentItem);
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
    [deleteMyRecruitment.pending.type]: (state) => {},
    [deleteMyRecruitment.fulfilled.type]: (state, action) => {},
    [deleteMyRecruitment.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.error = action.payload;
    },
    [putMyRecruitment.pending.type]: (state) => {},
    [putMyRecruitment.fulfilled.type]: (state, action) => {},
    [putMyRecruitment.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.error = action.payload;
    },
  },
});
