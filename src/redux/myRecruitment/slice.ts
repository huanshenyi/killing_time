import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../http/request";

interface recruitmentItem {
  title: string;
  place: string;
  fullday: boolean;
  start: string;
  end: string;
  content: string;
  paid: boolean;
  status?: boolean;
}

interface recruitmentState {
  recruitmentList: recruitmentItem[];
}
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
  },
});
