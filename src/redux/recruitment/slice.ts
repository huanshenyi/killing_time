import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getMyRecruitmentListApi } from "@/http/api";

interface recruitmentState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: recruitmentState = {
  loading: true,
  error: null,
  data: null,
};

// 全ての募集、フリータイム取得
export const getRecruitment = createAsyncThunk(
  "recruitment/getRecruitment",
  async (type: string | null, thunkAPI) => {
    const { data } = await getMyRecruitmentListApi(type);
    return data;
  }
);
export const recruitmentSlice = createSlice({
  name: "recruitment",
  initialState,
  reducers: {},
  extraReducers: {
    [getRecruitment.pending.type]: (state) => {
      state.loading = true;
    },
    [getRecruitment.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    [getRecruitment.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
