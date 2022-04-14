import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecruitmentType } from "@/models";

interface RecruitmentItemContext {
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

const initialState: RecruitmentItemContext = {
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
      state = initialState;
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
