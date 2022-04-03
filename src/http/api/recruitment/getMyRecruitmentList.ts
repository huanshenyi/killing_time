import { axios } from "../../request";

export const getMyRecruitmentListApi = () => {
  return axios.get("/myRecruitment");
};
