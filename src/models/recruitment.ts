import { PostMyRecruitmentItem } from "../http/api/recruitment/postMyRecruitment";

export const initialMyRecruitmentItemData: PostMyRecruitmentItem = {
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
  userId: 0,
};

export type RecruitmentType = "recruitment" | "freeTime" | "application" | "";
