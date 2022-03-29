import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export const myRecruitmentSlice = createSlice({
  name: "myRecruitment",
  initialState,
  reducers: {
    fetchStart: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchFail: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
