import { PostMyRecruitmentItem } from "../http/api/recruitment/postMyRecruitment";

export const initialMyFreeTimeItemData: PostMyRecruitmentItem = {
  title: "空き時間",
  place: "",
  fullday: false,
  start: "",
  end: "",
  content: "",
  paid: false,
  paidContent: "",
  numberLimit: 1,
  type: "freeTime",
};
