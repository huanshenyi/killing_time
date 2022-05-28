import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TagItem } from "@/models";
import { getTagListApi } from "@/http/api";

interface TagState {
  loading: boolean;
  error: string | null;
  data: any;
}

export const initialState: TagState = {
  loading: false,
  error: null,
  data: null,
};

export const getTag = createAsyncThunk(
  "tag/getTag",
  async (
    paramaters: { status: number; page: number; limt: number },
    thunkAPI
  ) => {
    const { data } = await getTagListApi(paramaters);
    return data;
  }
);

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {},
  extraReducers: {
    [getTag.pending.type]: (state) => {
      state.loading = true;
    },
    [getTag.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    [getTag.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
