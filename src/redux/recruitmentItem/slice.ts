import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecruitmentType } from "@/models";

export interface RecruitmentItemContext {
  id: number;
  title: string;
  place: string;
  fullday: true;
  start: string;
  end: string;
  content: string;
  paid: false;
  paidContent: string;
  numberLimit: number;
  type: RecruitmentType;
}

export const initialState: RecruitmentItemContext = {
  id: 0,
  title: "",
  place: "",
  fullday: true,
  start: "",
  end: "",
  content: "",
  paid: false,
  paidContent: "",
  numberLimit: 1,
  type: "recruitment",
};

export const recruitmentItemSlice = createSlice({
  name: "recruitmentItem",
  initialState,
  reducers: {
    resetRecruitmentItem(state) {
      state.content = initialState.content;
      state.end = initialState.end;
      state.fullday = initialState.fullday;
      state.id = initialState.id;
      state.numberLimit = initialState.numberLimit;
      state.paid = initialState.paid;
      state.paidContent = initialState.paidContent;
      state.place = initialState.place;
      state.start = initialState.start;
      state.title = initialState.title;
      state.type = initialState.type;
    },
    setRecruitmentItem(state, action: PayloadAction<RecruitmentItemContext>) {
      state.content = action.payload.content;
      state.end = action.payload.end;
      state.fullday = action.payload.fullday;
      state.id = action.payload.id;
      state.numberLimit = action.payload.numberLimit;
      state.paid = action.payload.paid;
      state.paidContent = action.payload.paidContent;
      state.place = action.payload.place;
      state.start = action.payload.start;
      state.title = action.payload.title;
      state.type = action.payload.type;
    },
  },
});

export const { resetRecruitmentItem, setRecruitmentItem } =
  recruitmentItemSlice.actions;
