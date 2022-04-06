import { axios } from "../../request";

export const deleteMyRecruitmentApi = (recruitmentId: number) => {
  return axios.delete(`/myRecruitment/${recruitmentId}`);
};
