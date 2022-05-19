import { axios } from "@/http/request";

export const getMyRecruitmentListApi = (type: string | null) => {
  if (type) {
    return axios.get(`/myRecruitment?type=${type}`);
  }
  return axios.get("/myRecruitment");
};
